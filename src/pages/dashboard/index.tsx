import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar, Card, Col, List, Skeleton, Row, Statistic, Typography } from 'antd';
import { Radar } from '@ant-design/charts';
import { FacebookFilled } from '@ant-design/icons';
// @ts-ignore
import { Link, useModel, useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import moment from 'moment';
import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';
import type { CurrentUser } from './data.d';
import { queryProjectNotice, fakeChartData } from './service';
import FacebookSetting from '../settings/components/facebook';
import { queryPopularPosts } from '@/services/defzone/api';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const PageHeaderContent: FC<{ currentUser: Partial<CurrentUser> }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>Hi, {currentUser.name}!</div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent: FC<Record<string, any>> = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="Bài viết" value={56} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="Xếp hạng" value={8} suffix="/ 24" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="Lượt xem" value={2223} />
    </div>
  </div>
);

const Workplace: FC = () => {
  const { loading: projectLoading, data: projectNotice = [] } = useRequest(queryProjectNotice);
  const [facebookSettingVisible, setFacebookSettingVisible] = useState<any>(false);
  const [popularPosts, setPopularPosts] = useState<API.PostListItem[]>()

  const { data } = useRequest(fakeChartData);
  const { initialState } = useModel<any>('@@initialState');
  const { currentUser } = initialState;
  useEffect(() => {
    queryPopularPosts().then(response => {
      setPopularPosts(response)
    })
  }, [])
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
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={styles.projectList}
            style={{ marginBottom: 24 }}
            title="Dự án đang khởi chạy"
            bordered={false}
            extra={<Link to="/">Xem thêm</Link>}
            loading={projectLoading}
            bodyStyle={{ padding: 0 }}
          >
            {projectNotice.map((item: any) => (
              <Card.Grid className={styles.projectGrid} key={item.id}>
                <Card bodyStyle={{ padding: 0 }} bordered={false}>
                  <Card.Meta
                    title={
                      <div className={styles.cardTitle}>
                        <Avatar size="small" src={item.logo} />
                        <Link to={item.href}>{item.title}</Link>
                      </div>
                    }
                    description={item.description}
                  />
                  <div className={styles.projectItemContent}>
                    <Link to={item.memberLink}>{item.member || ''}</Link>
                    {item.updatedAt && (
                      <span className={styles.datetime} title={item.updatedAt}>
                        {moment(item.updatedAt).fromNow()}
                      </span>
                    )}
                  </div>
                </Card>
              </Card.Grid>
            ))}
          </Card>
          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            className={styles.activeCard}
            title="Bài viết xem nhiều"
          >
            <List
              bordered
              dataSource={popularPosts}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark>[{item.id}]</Typography.Text> {item.title} - {item.view}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title="Truy cập nhanh"
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            <EditableLinkGroup onAdd={() => { }} links={links} linkElement={Link} />
          </Card>
          <Card
            style={{ marginBottom: 24 }}
            bordered={false}
            title="Dữ liệu"
            loading={data?.radarData?.length === 0}
          >
            <div className={styles.chart}>
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
          <Card
            bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
            bordered={false}
            title="Application"
          >
            <div className={styles.members}>
              <Row gutter={48}>
                <Col span={12}>
                  <div
                    className="cursor-pointer hover:bg-slate-100 p-2"
                    onClick={() => setFacebookSettingVisible(true)}
                  >
                    <FacebookFilled className="text-primary" /> Facebook
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <FacebookSetting visible={facebookSettingVisible} onClose={setFacebookSettingVisible} />
    </PageContainer>
  );
};

export default Workplace;
