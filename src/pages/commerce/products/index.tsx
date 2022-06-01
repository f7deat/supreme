import { queryProducts } from "@/services/defzone/commerce";
import { PageContainer } from "@ant-design/pro-layout";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { Button } from "antd";
import { useRef } from "react";

const ProducPage: React.FC = () => {

  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.ProductListItem>[] = [
    {
      title: '#',
      dataIndex: 'id',
      search: false
    }
  ]

  const Extra = () => (
    <Button type="primary">Add new</Button>
  )

  return (
    <PageContainer extra={<Extra />}>
      <ProTable<API.ProductListItem, API.PageParams>
        headerTitle="Danh sách"
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={queryProducts}
        columns={columns}
        rowSelection={{}}
        actionRef={actionRef}
      />
    </PageContainer>
  );
};

export default ProducPage;
