import { queryPostByCategory } from '@/services/defzone/api';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Drawer } from 'antd';

type PostCategoryProps = {
  id: number;
  visible: boolean;
  onClose: any;
};

const PostCategory: React.FC<PostCategoryProps> = (props) => {
  const requestDataSource = async (params: any) => {
    return queryPostByCategory(props.id, params);
  };

  const columns: ProColumns<API.PostListItem>[] = [
    {
      title: '#',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 36,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      title: 'Lượt xem',
      dataIndex: 'view',
      search: false,
    },
  ];

  return (
    <Drawer
      visible={props.visible}
      onClose={() => props.onClose(false)}
      width={window.innerWidth - window.innerWidth / 2}
    >
      <ProTable request={requestDataSource} rowKey="id" columns={columns} />
    </Drawer>
  );
};
export default PostCategory;
