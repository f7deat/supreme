import { queryRole } from "@/services/defzone/user";
import { ModalForm, ProFormCheckbox } from "@ant-design/pro-form"
import { useEffect, useState } from "react";
import { useRequest } from "umi";

type RoleProps = {
    visible: boolean;
    onVisibleChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoleComponent: React.FC<RoleProps> = (props) => {

    const { data } = useRequest(queryRole);

    const [roles, setRoles] = useState<API.RoleListItem[]>([]);

    useEffect(() => {
        setRoles(data || [])
    }, [data])

    const onFinish = async (values: API.RoleListItem) => {
        if (values) {
            props.onVisibleChange(false);
        }
    }

    return (
        <ModalForm title="Assign Roles" visible={props.visible} onVisibleChange={props.onVisibleChange} onFinish={onFinish}>
            <ProFormCheckbox.Group name="roles" label="Roles" options={roles.map(x => x.name)} />
        </ModalForm>
    )
}

export default RoleComponent