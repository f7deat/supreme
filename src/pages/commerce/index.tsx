import { PageContainer } from '@ant-design/pro-layout';
import { Card, Col, Row } from 'antd';

const Commerce: React.FC = () => {
  return (
    <PageContainer title="Commerce">
      <Row gutter={24}>
        <Col span={8}>
          <Card />
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
