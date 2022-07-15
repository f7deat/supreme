import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar, Card, Col, List, Skeleton, Row, Statistic, Typography, Space } from 'antd';
import { Radar } from '@ant-design/charts';
import { useModel, useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { CurrentUser } from './data.d';
import { fakeChartData } from './service';
import { queryPopularPosts } from '@/services/defzone/api';

const PageHeaderContent: FC<{ currentUser: Partial<CurrentUser> }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <Space>
      <div>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div>
        <div>Hi, {currentUser.name}!</div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </Space>
  );
};

const ExtraContent: FC<Record<string, any>> = () => (
  <Space size="large">
    <div>
      <Statistic title="Bài viết" value={56} />
    </div>
    <div>
      <Statistic title="Xếp hạng" value={8} suffix="/ 24" />
    </div>
    <div>
      <Statistic title="Lượt xem" value={2223} />
    </div>
  </Space>
);

const Workplace: FC = () => {
  const [popularPosts, setPopularPosts] = useState<API.PostListItem[]>();

  const { data } = useRequest(fakeChartData);
  const { initialState } = useModel<any>('@@initialState');
  const { currentUser } = initialState;
  useEffect(() => {
    queryPopularPosts().then((response) => {
      setPopularPosts(response);
    });
  }, []);
  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar: currentUser.avatar,
            name: currentUser.userName,
            userid: currentUser.id,
            email: currentUser.email,
            signature: '',
            title: currentUser.email,
            group: currentUser.phoneNumber,
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row gutter={24}>
        <Col span={16}>
          <Card title="Dự án đang khởi chạy">
            <Card.Grid>CRM</Card.Grid>
          </Card>
          <Card title="Bài viết xem nhiều">
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
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card title="Dữ liệu" loading={data?.radarData?.length === 0}>
            <div>
              <Radar
                height={343}
                data={data?.radarData || []}
                xField="name"
                yField="value"
                legend={{
                  position: 'bottom',
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Workplace;
