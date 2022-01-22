import ProTable from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import { queryFiles } from '@/services/defzone/api';
import { Drawer } from 'antd';

type ExplorerProps = {
  visible: boolean;
  onVisibleChange: any;
  onFinish: any;
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  const columns = [
    {
      title: '#',
      render: (dom: any, record: any, index: number) => index + 1,
    },
    {
      title: <FormattedMessage defaultMessage="Name" id="global.name" />,
      dataIndex: 'name',
    },
  ];
  return (
    <Drawer
      visible={props.visible}
      width={window.innerWidth - 400}
      onClose={() => props.onFinish(false)}
    >
      <ProTable columns={columns} request={queryFiles} />
    </Drawer>
  );
};
export default Explorer;
