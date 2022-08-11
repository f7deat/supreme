import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormText, ProFormDateTimePicker } from "@ant-design/pro-form"
import { message } from "antd";
import { useEffect, useRef } from "react";

type PostCenterSettingProps = {
    data?: API.Post
}

const PostCenterSetting: React.FC<PostCenterSettingProps> = (props) => {

    const { data } = props;
    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        formRef.current?.setFields([
            {
                name: 'id',
                value: data?.id
            },
            {
                name: 'createdDate',
                value: data?.createdDate
            }
        ])
    }, [data])

    const onFinish = async (values: any) => {
        message.info(JSON.stringify(values))
    }

    return (
        <ProForm onFinish={onFinish} formRef={formRef}>
            <ProFormText name="id" hidden />
            <ProFormDateTimePicker name="createdDate" label="Created date" />
        </ProForm>
    )
}

export default PostCenterSetting