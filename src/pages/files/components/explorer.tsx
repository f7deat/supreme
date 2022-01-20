import { DrawerForm } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import { queryFiles } from '@/services/defzone/api';

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
    <DrawerForm
      visible={props.visible}
      onVisibleChange={props.onVisibleChange}
      onFinish={props.onFinish}
      width={window.innerWidth - 400}
    >
      <ProTable columns={columns} request={queryFiles} />
    </DrawerForm>
  );
};
export default Explorer;
