import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read.oversea.gp',
  name: '红果短剧',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text="暂不开启"] <<n [vid="push_permission_bottom_v2_compose_view"]',
          snapshotUrls: 'https://i.gkd.li/i/34212912',
        },
      ],
    },
  ],
});
