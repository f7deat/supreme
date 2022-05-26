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
                name: 'css',
                value: response
            })
        })
    }, [])

    return (
        <PageContainer title="Theme">
            <Card title="Customize theme">
                <ProForm layout="vertical" formRef={formFef}>
                    <ProFormTextArea label="css" name="css" />
                    <ProFormTextArea name="js" label="js" />
                </ProForm>
            </Card>
        </PageContainer>
    )
}

export default Theme