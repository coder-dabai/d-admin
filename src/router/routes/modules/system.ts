import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const user: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 3,
    icon: 'ant-design:setting-outlined',
    title: '系统管理',
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('/@/views/sys/system/user/index.vue'),
      meta: {
        title: '用户管理',
      },
    },
  ],
};

export default user;
