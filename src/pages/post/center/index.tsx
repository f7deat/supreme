import { Card, message } from 'antd';
import { useEffect, useState } from 'react';
import { addPost, getPost, updatePost } from '@/services/ant-design-pro/api';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'umi';
import PostCenterSetting from './components/setting';
import GeneralTab from './components/general';
import { history } from 'umi';

const PostCenter = () => {
  const params = useParams<any>();

  const [tabKey, setTabKey] = useState<string>('');
  const [post, setPost] = useState<API.Post>();
  const [categories, setCategories] = useState<API.Category>();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getPost(params.id).then((response) => {
      setPost(response.post);
      setCategories(response.categories);
    });
  }, [params.id]);

  const onTabChange = (key: string) => {
    setTabKey(key);
  };

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    if (tags) {
      values.tags = tags.join(',');
    } else {
      values.tags = '';
    }
    const response = values.id ? await updatePost(values) : await addPost(values);
    if (response.succeeded) {
      history.push('/blog/post');
    } else {
      message.error(response.message);
    }
  };

  const renderChildrenByTabKey = () => {
    if (tabKey === 'setting') {
      return (
        <PostCenterSetting
          data={post}
          categories={categories}
          setTags={setTags}
          handleFinish={handleFinish}
          tags={tags}
        />
      );
    }
    return (
      <GeneralTab id={params.id} post={post} categories={categories} handleFinish={handleFinish} />
    );
  };

  return (
    <PageContainer
      title="Start writing"
      onTabChange={onTabChange}
      tabList={[
        {
          tab: 'General',
          key: 'general',
        },
        {
          tab: 'Setting',
          key: 'setting',
        },
      ]}
    >
      <Card size="small">{renderChildrenByTabKey()}</Card>
    </PageContainer>
  );
};

export default PostCenter;
