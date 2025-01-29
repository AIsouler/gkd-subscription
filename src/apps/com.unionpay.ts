import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.UPActivityMain',
          matches: '[vid="close_view"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18584832',
            'https://i.gkd.li/i/18584842',
          ],
        },
      ],
    },
  ],
});
