import { queryPostByCategory } from '@/services/defzone/api';
import { Drawer } from 'antd';
import { useEffect } from 'react';

type PostCategoryProps = {
  id?: number;
  visible: boolean;
};

const PostCategory: React.FC<PostCategoryProps> = (props) => {
  useEffect(() => {
    queryPostByCategory({
      pageSize: 10,
      id: 1,
      current: 1,
    }).then((response) => {
      console.log(response);
    });
  }, [props.id]);
  return <Drawer visible={props.visible}>haha</Drawer>;
};
export default PostCategory;
