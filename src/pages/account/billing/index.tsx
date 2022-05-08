import { addBilling, queryBillings } from "@/services/defzone/api"
import { PlusOutlined } from "@ant-design/icons"
import type { ProFormInstance } from "@ant-design/pro-form";
import { DrawerForm, ProFormText } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table"
import { Button, Card, Col, Divider, message, Row, Typography } from "antd"
import { useRef, useState } from "react"

const Billing: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const actionRef = useRef<ActionType>();
    const formRef = useRef<ProFormInstance>();

    const handleAdd = () => {
        formRef.current?.resetFields();
        setVisible(true);
    }

    const Extra = () => (
        <div>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>New transaction</Button>
        </div>
    )

    const onFinish = async (values: API.BillingListItem) => {
        values.price = Number(values.price)
        addBilling(values).then((response: any) => {
            console.log(response)
            message.success('succeeded')
            actionRef.current?.reload()
            setVisible(false)
        })
    }

    const columns: ProColumns<API.BillingListItem>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Price',
            render: (dom, entity) => entity.price.toLocaleString(),
            search: false
        }
    ]

    return (
        <PageContainer title="Billing" extra={<Extra />}>
            <Row gutter={16}>
                <Col span={16}>
                    <Row gutter={16} className="mb-4">
                        <Col span={12}>
                            <Card />
                        </Col>
                        <Col span={6}>
                            <Card />
                        </Col>
                        <Col span={6}>
                            <Card>
                                <div className="text-center">
                                    <div className="mb-2">
                                        <img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="Paypal" width={150} />
                                    </div>
                                    <div className="font-bold">Paypal</div>
                                    <div className="">Freelance Payment</div>
                                    <Divider />
                                    <Typography.Title level={4}>$455.00</Typography.Title>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Card title="Transaction">
                        <ProTable
                            search={{
                                layout: "vertical"
                            }}
                            rowKey="id"
                            columns={columns}
                            actionRef={actionRef}
                            request={queryBillings} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card />
                </Col>
            </Row>
            <DrawerForm visible={visible} onVisibleChange={setVisible} onFinish={onFinish} formRef={formRef}>
                <ProFormText name="name" label="Name" required />
                <ProFormText name="price" label="Price" required />
            </DrawerForm>
        </PageContainer>
    )
}

export default Billing