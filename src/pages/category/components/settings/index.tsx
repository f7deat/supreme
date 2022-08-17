import { updateCategory, addCategory, getListParrentCategory, queryCategory } from "@/services/defzone/category";
import { FolderOpenOutlined } from "@ant-design/icons"
import type { ProFormInstance } from "@ant-design/pro-form";
import { DrawerForm, ProFormText, ProFormTextArea, ProFormSelect } from "@ant-design/pro-form"
import { Button, message } from "antd"
import type { DefaultOptionType } from "antd/lib/select";
import { useEffect, useRef, useState } from "react";

type CategorySettingProps = {
    types: DefaultOptionType[];
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    categoryId: number;
    onFinish: any;
}

const CategorySetting: React.FC<CategorySettingProps> = (props) => {
    const formRef = useRef<ProFormInstance>();

    const [parrentCategries, setParrentCategories] = useState<any>();

    useEffect(() => {
        getListParrentCategory().then((response) =>
            setParrentCategories(
                response.map((x: API.CategoryListItem) => {
                    return { value: x.id, label: x.name };
                }),
            ),
        );
    }, []);

    useEffect(() => {
        if (props.categoryId && props.categoryId !== 0) {
            queryCategory(props.categoryId).then(async (response) => {
                formRef.current?.setFields([
                    {
                        name: 'id',
                        value: response.id,
                    },
                    {
                        name: 'name',
                        value: response.name,
                    },
                    {
                        name: 'normalizeName',
                        value: response.normalizeName,
                    },
                    {
                        name: 'description',
                        value: response.description,
                    },
                    {
                        name: 'parrentId',
                        value: response.parrentId,
                    },
                    {
                        name: 'status',
                        value: response.status,
                    },
                    {
                        name: 'thumbnail',
                        value: response.thumbnail,
                    },
                    {
                        name: 'type',
                        value: response.type
                    }
                ]);
            });
        }
    }, [props.categoryId])

    const onFinish = async (values: any) => {
        const response = values.id ? await updateCategory(values) : await addCategory(values);
        if (response.succeeded) {
            message.success('succeeded!');
            props.setVisible(false);
            props.onFinish();
        } else {
            message.error(response.message);
        }
    };

    return (
        <DrawerForm
            title="Category settings"
            formRef={formRef}
            onVisibleChange={props.setVisible}
            visible={props.visible}
            autoFocusFirstInput
            onFinish={onFinish}
        >
            <ProFormText name="id" hidden={true} />
            <div className="flex gap-4">
                <div className="w-1/2">
                    <ProFormText name="name" label="Tên danh mục" className="w-full" required />
                </div>
                <div className="w-1/2">
                    <ProFormText
                        name="normalizeName"
                        label="Normalize name"
                        tooltip="Name without special character"
                        className="w-full"
                    />
                </div>
            </div>
            <ProFormTextArea name="description" label="Description" />
            <div className="flex gap-4">
                <div className="w-1/2">
                    <ProFormSelect
                        options={parrentCategries}
                        name="parrentId"
                        label="Danh mục cha"
                        className="w-full"
                    />
                </div>
                <div className="w-1/2">
                    <ProFormSelect
                        className="w-full"
                        initialValue={1}
                        options={[
                            {
                                value: 0,
                                label: 'Draft',
                            },
                            {
                                value: 1,
                                label: 'Active',
                            },
                        ]}
                        name="status"
                        label="Trạng thái"
                    />
                </div>
            </div>
            <ProFormSelect
                options={props.types}
                name="type"
                label="Type"
                className="w-full"
            />
            <div className="flex gap-4">
                <div className="flex-grow">
                    <ProFormText name="thumbnail" className="w-full" />
                </div>
                <Button
                    style={{ marginBottom: 24 }}
                    icon={<FolderOpenOutlined />}
                >
                    Explorer
                </Button>
            </div>
        </DrawerForm>
    )
}

export default CategorySetting