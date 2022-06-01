import { queryProducts } from "@/services/defzone/commerce";
import { PageContainer } from "@ant-design/pro-layout";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { useRef } from "react";

const ProductListPage: React.FC = () => {

    const actionRef = useRef<ActionType>();

    const columns: ProColumns<API.ProductListItem>[] = [
        {
            title: '#',
            dataIndex: 'id'
        }
    ]

    return (
        <PageContainer>
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

export default ProductListPage;
