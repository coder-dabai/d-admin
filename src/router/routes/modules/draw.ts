import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const draw: AppRouteModule = {
  path: '/draw',
  name: 'Draw',
  component: LAYOUT,
  redirect: '/draw/cavasDraw',
  meta: {
    orderNo: 2,
    icon: 'ant-design:picture-outlined',
    title: '绘画',
  },
  children: [
    {
      path: 'cavasDraw',
      name: 'CavasDraw',
      component: () => import('/@/views/draw/cavasDraw/index.vue'),
      meta: {
        title: 'cavas绘画',
      },
    },
    {
      path: 'city',
      name: 'city',
      component: () => import('/@/views/draw/city/index.vue'),
      meta: {
        title: '城市',
      },
    },
  ],
};

export default draw;
