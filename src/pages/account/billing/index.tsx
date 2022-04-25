import { PageContainer } from "@ant-design/pro-layout"
import { Card, Col, Divider, Row, Typography } from "antd"

const Billing: React.FC = () => {
    return (
        <PageContainer title="Billing">
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
                    <Card />
                </Col>
                <Col span={8}>
                    <Card />
                </Col>
            </Row>
        </PageContainer>
    )
}

export default Billing