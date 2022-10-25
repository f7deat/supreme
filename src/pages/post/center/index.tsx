import { Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'umi';
import GeneralTab from './components/general';
import { history } from 'umi';
import { SendOutlined } from '@ant-design/icons';
import { publishRequest, queryPost } from '@/services/defzone/post';
import { ProCard } from '@ant-design/pro-components';
import CategoryTab from './components/categories';
import PostCenterSetting from './components/setting';

const PostCenter = () => {
  const params = useParams<any>();

  const [tabKey, setTabKey] = useState<string>('');
  const [post, setPost] = useState<API.Post>();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    queryPost(params.id).then((response) => {
      setPost(response);
    });
  }, [params.id]);

  const onTabChange = (key: string) => {
    setTabKey(key);
  };

  const renderChildrenByTabKey = () => {
    if (tabKey === 'setting') {
      return <PostCenterSetting data={post} setTags={setTags} tags={tags} />;
    }
    if (tabKey === 'categories') {
      return <CategoryTab id={params.id} />;
    }
    return <GeneralTab id={params.id} post={post} />;
  };

  const publish = async () => {
    const response = await publishRequest(post?.id ?? 0);
    if (response.succeeded) {
      message.success('Published!');
      history.push('/blog/post');
    } else {
      message.error(response.message);
    }
  };

  const hasData = post?.id !== null && post?.id !== undefined;

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
        {
          tab: 'Categories',
          key: 'categories',
        },
      ]}
      extra={
        <Button icon={<SendOutlined />} type="primary" onClick={publish} disabled={!hasData}>
          Publish
        </Button>
      }
    >
      <ProCard>{renderChildrenByTabKey()}</ProCard>
    </PageContainer>
  );
};

export default PostCenter;
