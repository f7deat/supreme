import { Button, Card, Col, Form, Input, Row, Space } from "antd"
import { FormattedMessage } from "umi"

const NewUser: React.FC = () => {
    return (
        <Row className="items-center h-full">
            <Col span={6} />
            <Col span={12}>
                <Card title="Create new user">
                    <Form layout="vertical">
                        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item name="usename" label="Username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item name="confirmPassword" label="Repeat Password" rules={[{ required: true }]}>
                            <Input type="password" />
                        </Form.Item>
                        <div className="flex justify-end">
                            <Space>
                                <Button htmlType="button">
                                    <FormattedMessage id="global.back-to-list" />
                                </Button>
                                <Button type="primary" htmlType="submit">Create</Button>
                            </Space>
                        </div>
                    </Form>
                </Card>
            </Col>
            <Col span={6} />
        </Row>
    )
}
export default NewUser