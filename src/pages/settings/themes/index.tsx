import { readAllText } from "@/services/defzone/api";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormTextArea } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import { Card } from "antd"
import { useEffect, useRef } from "react"

const Theme: React.FC = () => {

    const formFef = useRef<ProFormInstance>();

    useEffect(() => {
        readAllText('css').then(response => {
            formFef.current?.setFieldsValue({
                name: 'style',
                value: response.data
            })
        })
    }, [])

    return (
        <PageContainer title="Theme">
            <Card title="Customize theme">
                <ProForm layout="vertical" formRef={formFef}>
                    <ProForm.Item label="style.css" name="style">
                        <ProFormTextArea />
                    </ProForm.Item>
                </ProForm>
            </Card>
        </PageContainer>
    )
}

export default Theme