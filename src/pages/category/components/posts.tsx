import { queryPostByCategory } from '@/services/defzone/api';
import { EditOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer } from 'antd';
import { useRef } from 'react';
import { Link } from 'umi';

type PostCategoryProps = {
  id: number;
  visible: boolean;
  onClose: any;
};

const PostCategory: React.FC<PostCategoryProps> = (props) => {
  const actionRef = useRef<any>()

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
    {
      title: 'Task',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/blog/post/center${record.id}`} key={0}>
          <Button icon={EditOutlined} />
        </Link>
      ]
    }
  ];

  return (
    <Drawer
      visible={props.visible}
      onClose={() => props.onClose(false)}
      width={window.innerWidth - window.innerWidth / 2}
    >
      <ProTable request={requestDataSource} rowKey="id" columns={columns} actionRef={actionRef} search={false} options={{
        search: true
      }} />
    </Drawer>
  );
};
export default PostCategory;
