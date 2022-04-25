import { queryMenus } from "@/services/defzone/api"
import { PlusOutlined } from "@ant-design/icons"
import { PageContainer } from "@ant-design/pro-layout"
import type { ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table"
import { Button } from "antd"

const MenuPage: React.FC = () => {
    const columns: ProColumns<API.MenuListItem>[] = [
        {
            title: 'Tiêu đề',
            dataIndex: 'name'
        },
    ]
    return (
        <PageContainer title="Navbar">
            <Button icon={<PlusOutlined />}>Add New</Button>
            <ProTable<API.MenuListItem, API.PageParams>
                headerTitle="Danh sách"
                rowKey="id"
                search={{
                    layout: 'vertical'
                }}
                request={queryMenus({
                    current: 1,
                    pageSize: 10
                })}
                columns={columns}
                rowSelection={{}}
            />
        </PageContainer>
    )
}

export default MenuPage