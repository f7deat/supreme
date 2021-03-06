import AppSetting from '@/appSetting';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser?.roles?.find((x) => x === AppSetting.roles.admin),
  };
}
