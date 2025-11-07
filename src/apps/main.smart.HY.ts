import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'main.smart.HY',
  name: '公交e出行',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'main.smart.activity.MenuActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23418440',
        },
      ],
    },
  ],
});
