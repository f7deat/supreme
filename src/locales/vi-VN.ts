import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './vi-VN/menu';
import pages from './en-US/pages';
import pwa from './en-US/pwa';
import settingDrawer from './vi-VN/settingDrawer';
import settings from './en-US/settings';

export default {
  'navBar.lang': 'Ngôn ngữ',
  'layout.user.link.help': 'Trợ giúp',
  'layout.user.link.privacy': 'Quyền riêng tư',
  'layout.user.link.terms': 'Điều khoản',
  'app.copyright.produced': 'Một sản phẩm của DefZone Financial Experience Department',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
