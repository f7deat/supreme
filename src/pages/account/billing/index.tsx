import { addBilling, deleteBilling, queryBillings, queryBillingTotal } from '@/services/defzone/api';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-form';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Card, Col, Divider, message, Popconfirm, Row, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Billing: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    queryBillingTotal().then((response) => {
      setTotal(response);
    });
  });

  const handleAdd = () => {
    formRef.current?.resetFields();
    setVisible(true);
  };

  const Extra = () => (
    <div>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
        New transaction
      </Button>
    </div>
  );

  const onFinish = async (values: API.BillingListItem) => {
    values.price = Number(values.price);
    values.quantity = Number(values.quantity);
    addBilling(values).then((response: any) => {
      console.log(response);
      message.success('succeeded');
      actionRef.current?.reload();
      setVisible(false);
    });
  };

  const handleDelete = (id: string) => {
    deleteBilling(id).then(response => {
      if (response.succeeded) {
        message.success('succeeded!')
        actionRef.current?.reload();
      }
    })
  }

  const columns: ProColumns<API.BillingListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      search: false,
    },
    {
      title: 'Price',
      render: (dom, entity) => entity.price.toLocaleString(),
      search: false,
    },
    {
      title: 'Task',
      render: (dom, entity) => (
        <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(entity.id)}>
          <Button icon={<DeleteOutlined />} danger type='primary' />
        </Popconfirm>
      ),
      valueType: 'option'
    }
  ];

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
                    <img
                      src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"
                      alt="Paypal"
                      width={150}
                    />
                  </div>
                  <div className="font-bold">Paypal</div>
                  <div className="">Freelance Payment</div>
                  <Divider />
                  <Typography.Title level={4}>{total.toLocaleString()}₫</Typography.Title>
                </div>
              </Card>
            </Col>
          </Row>
          <Card title="Transaction" extra={<Extra />}>
            <ProTable
              search={{
                layout: 'vertical',
              }}
              rowKey="id"
              columns={columns}
              actionRef={actionRef}
              request={queryBillings}
              rowSelection={{}}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
      <DrawerForm
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
        formRef={formRef}
      >
        <ProFormText name="name" label="Name" required />
        <ProFormText name="price" label="Price" required />
        <ProFormText name="quantity" label="Quantity" required />
      </DrawerForm>
    </PageContainer>
  );
};
export default Billing
