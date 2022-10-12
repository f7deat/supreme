import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar, Card, Col, List, Skeleton, Row, Statistic, Typography, Space, Tag } from 'antd';
import { useIntl, useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { queryPopularPosts } from '@/services/defzone/api';
import { queryPieChart, queryPostCount, queryViewCount } from '@/services/defzone/post';
import { Column, Pie } from '@ant-design/charts';
import { UserSwitchOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';

const PageHeaderContent: FC<{ currentUser: Partial<API.User> }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <Space>
      <Avatar size="large" src={currentUser.avatar} />
      <div>
        <Typography.Title level={5}>Hi, {currentUser.email}!</Typography.Title>
        <Space>
          <UserSwitchOutlined />
          {currentUser.roles?.map((role: string) => (
            <Tag key={role}>{role}</Tag>
          ))}
        </Space>
      </div>
    </Space>
  );
};

const Workplace: FC = () => {
  const intl = useIntl();
  const { initialState } = useModel<any>('@@initialState');
  const { currentUser } = initialState;

  const [popularPosts, setPopularPosts] = useState<API.PostListItem[]>();
  const [viewCount, setViewCount] = useState(0);
  const [pieChart, setPieChart] = useState<any>();
  const [postCount, setPostCount] = useState<number>(0);

  useEffect(() => {
    queryViewCount().then((response) => setViewCount(response));
    queryPieChart().then((response) => setPieChart(response));
    queryPostCount().then((response) => setPostCount(response));
  }, []);

  const ExtraContent: FC<Record<string, any>> = () => (
    <Space size="large">
      <Statistic
        title={intl.formatMessage({
          id: 'menu.blog.post',
          defaultMessage: 'Article',
        })}
        value={postCount}
      />
      <Statistic title="Xếp hạng" value={8} suffix="/ 24" />
      <Statistic title="Lượt xem" value={viewCount} />
    </Space>
  );
  useEffect(() => {
    queryPopularPosts().then((response) => {
      setPopularPosts(response);
    });
  }, []);

  const data = [
    {
      action: 'Browse',
      pv: 50000,
    },
    {
      action: 'Cart',
      pv: 35000,
    },
    {
      action: 'Orders',
      pv: 25000,
    },
    {
      action: 'Payment',
      pv: 15000,
    },
    {
      action: 'Seal deal',
      pv: 8500,
    },
  ];
  const configColumn = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar: currentUser.avatar,
            id: currentUser.id,
            email: currentUser.email,
            roles: currentUser.roles,
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row gutter={24}>
        <Col span={16}>
          <div className="mb-4">
            <ProCard title="Chart">
              <Column {...configColumn} />
            </ProCard>
          </div>
          <ProCard title="Dự án đang khởi chạy">
            <Card.Grid>CRM</Card.Grid>
          </ProCard>
        </Col>
        <Col span={8}>
          <div className="mb-4">
            <ProCard title="Dữ liệu">
              {pieChart && (
                <Pie
                  data={pieChart}
                  angleField="value"
                  colorField="key"
                  legend={{
                    layout: 'horizontal',
                    position: 'bottom',
                  }}
                />
              )}
            </ProCard>
          </div>
          <ProCard title="Bài viết xem nhiều">
            <List
              bordered
              dataSource={popularPosts}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Typography.Text mark>[{item.id}]</Typography.Text> {item.title} -{' '}
                  {item.view.toLocaleString()}
                </List.Item>
              )}
            />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Workplace;
