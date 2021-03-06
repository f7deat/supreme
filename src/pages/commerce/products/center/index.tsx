import { queryPost } from "@/services/defzone/api";
import { queryAddProduct, queryUpdateProduct } from "@/services/defzone/commerce";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormSelect, ProFormText } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import { Card, Input } from "antd"
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
            tabList={[
                {
                    tab: 'General',
                    key: 'general'
                },
                {
                    tab: 'Categories',
                    key: 'categories'
                },
                {
                    tab: 'Images',
                    key: 'images'
                },
                {
                    tab: 'Tags',
                    key: 'tags'
                },
                {
                    tab: 'Setting',
                    key: 'setting'
                }
            ]}
            onTabChange={onTabChange}>
            <Card>
                {tabKey === 'category' ? renderChildrenByTabKey() : <ProForm onFinish={onFinish} formRef={formRef}>
                    <ProFormText name="id" hidden={true} />
                    <ProFormText name="title" label="Ti??u ?????" rules={[{ required: true }]} />
                    <ProForm.Item name="url" label="???????ng d???n">
                        <Input />
                    </ProForm.Item>
                    <ProForm.Item name="description" label="M?? t???">
                        <Input.TextArea />
                    </ProForm.Item>
                    <ProForm.Item name="content" label="N???i dung" rules={[{ required: true }]}>
                        <BraftEditor language="en" style={{ border: '1px solid #d1d1d1' }} />
                    </ProForm.Item>
                    <div className='mb-2'>???nh ?????i di???n</div>
                    <div className='flex gap-4'>
                        <div className='flex-grow'>
                            <ProForm.Item name="thumbnail">
                                <Input />
                            </ProForm.Item>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <ProForm.Item name="status" label="Tr???ng th??i" initialValue={1}>
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