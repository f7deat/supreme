import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Card, Col, List, Row } from 'antd';

const Commerce: React.FC = () => {

  const data = [
    {
      title: 'Google Merchant Center ',
      description: 'Merchant Center lets you manage how your in-store and online product inventory appears on Google',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'
    },
    {
      title: 'Meta Commerce',
      description: 'Manage your catalog and organize your sales on Facebook and Instagram and gain valuable insights about your business with Facebook Commerce Manager',
      avatar: 'https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg'
    },
  ];

  return (
    <PageContainer title="Commerce">
      <Row gutter={24}>
        <Col span={8}>
          <Card title="External Market">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item actions={[<a key="list-loadmore-edit">connect</a>]}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} size="large" />}
                    title={<a href="https://defzone.net">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Commerce;
