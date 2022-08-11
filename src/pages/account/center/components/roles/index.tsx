import { queryRole } from "@/services/defzone/user";
import type { ProFormInstance } from "@ant-design/pro-form";
import { ModalForm, ProFormCheckbox } from "@ant-design/pro-form"
import { useEffect, useRef, useState } from "react";

type RoleProps = {
    visible: boolean;
    onVisibleChange: React.Dispatch<React.SetStateAction<boolean>>;
    roles: string[];
}

const RoleComponent: React.FC<RoleProps> = (props) => {

    const [roles, setRoles] = useState<string[]>([]);
    const formRef = useRef<ProFormInstance>()

    useEffect(() => {
        queryRole().then(response => {
            setRoles(response.map(x => x.name))
        })
    }, [])

    useEffect(() => {
        formRef.current?.setFields([{
            name: 'roles',
            value: props.roles
        }])
    }, [props.roles, props.visible])

    const onFinish = async (values: API.RoleListItem) => {
        if (values) {
            props.onVisibleChange(false);
        }
    }

    return (
        <ModalForm title="Assign Roles" visible={props.visible} onVisibleChange={props.onVisibleChange} onFinish={onFinish} formRef={formRef}>
            <ProFormCheckbox.Group name="roles" label="Roles" options={roles} />
        </ModalForm>
    )
}

export default RoleComponent