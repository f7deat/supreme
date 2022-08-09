import AppSetting from '@/appSetting';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.User | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser?.roles?.includes(AppSetting.roles.admin),
  };
}
