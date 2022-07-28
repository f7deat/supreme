import { queryPost } from "@/services/defzone/api";
import { queryAddProduct, queryUpdateProduct } from "@/services/defzone/commerce";
import { SendOutlined } from "@ant-design/icons";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormSelect, ProFormText } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import { Button, Card, Input } from "antd"
import BraftEditor from "braft-editor"
import 'braft-editor/dist/index.css';
import { useEffect, useRef, useState } from "react";
import { history, useParams } from "umi";
import ProductCenterCategory from "./components/category";

const ProductCenterPage: React.FC = () => {

    const params = useParams<any>();
    const formRef = useRef<ProFormInstance>();

    const [tabKey, setTabKey] = useState<string>('')

    useEffect(() => {
        if (params && params.id) {
            queryPost(params.id).then((response) => {
                formRef.current?.setFields([
                    {
                        name: 'id',
                        value: response.id,
                    },
                    {
                        name: 'title',
                        value: response.title,
                    },
                    {
                        name: 'url',
                        value: response.url,
                    },
                    {
                        name: 'description',
                        value: response.description,
                    },
                    {
                        name: 'thumbnail',
                        value: response.thumbnail,
                    },
                    {
                        name: 'content',
                        value: BraftEditor.createEditorState(response.content),
                    },
                ]);
            });
        }
    }, [params])

    const onFinish = async (values: any) => {
        values.content = values.content.toHTML();
        let response = null;
        if (values.id) {
            response = await queryUpdateProduct(values);
        } else {
            response = await queryAddProduct(values);
        }
        if (response.succeeded) {
            history.push(`/commerce/products`);
        }
    }

    const onTabChange = (key: string) => {
        setTabKey(key)
    }

    const renderChildrenByTabKey = () => {
        if (tabKey === 'categories') {
            return <ProductCenterCategory />;
        }
        return null;
    }

    return (
        <PageContainer
            extra={<Button type="primary" icon={<SendOutlined />}>Publish</Button>}
            tabList={[
                {
                    tab: 'General',
                    key: 'general'
                },
                {
                    tab: 'Categories',
                    key: 'categories',
                    disabled: !params.id
                },
                {
                    tab: 'Images',
                    key: 'images',
                    disabled: !params.id
                },
                {
                    tab: 'Tags',
                    key: 'tags',
                    disabled: !params.id
                },
                {
                    tab: 'Setting',
                    key: 'setting',
                    disabled: !params.id
                }
            ]}
            onTabChange={onTabChange}>
            <Card>
                {tabKey === 'categories' ? renderChildrenByTabKey() : <ProForm onFinish={onFinish} formRef={formRef}>
                    <ProFormText name="id" hidden={true} />
                    <ProFormText name="title" label="Tiêu đề" rules={[{ required: true }]} />
                    <ProForm.Item name="url" label="Đường dẫn">
                        <Input />
                    </ProForm.Item>
                    <ProForm.Item name="description" label="Mô tả">
                        <Input.TextArea />
                    </ProForm.Item>
                    <ProForm.Item name="content" label="Nội dung" rules={[{ required: true }]}>
                        <BraftEditor language="en" style={{ border: '1px solid #d1d1d1' }} />
                    </ProForm.Item>
                    <div className='mb-2'>Ảnh đại diện</div>
                    <div className='flex gap-4'>
                        <div className='flex-grow'>
                            <ProForm.Item name="thumbnail">
                                <Input />
                            </ProForm.Item>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <ProForm.Item name="status" label="Trạng thái" initialValue={1}>
                            <ProFormSelect
                                allowClear={false}
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
                            />
                        </ProForm.Item>
                    </div>
                </ProForm>}
            </Card>
        </PageContainer>
    )
}

export default ProductCenterPage