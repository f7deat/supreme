import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'F7DEAT',
          title: 'F7DEAT',
          href: 'https://defzone.net',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/f7deat',
          blankTarget: true,
        },
        {
          key: 'DefZone.Net',
          title: 'DefZone.Net',
          href: 'https://defzone.net',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
