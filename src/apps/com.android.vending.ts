import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text="以后再说" || text="不用了"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14958783',
            'https://i.gkd.li/i/16227605',
            'https://i.gkd.li/i/16982900',
          ],
        },
      ],
    },
  ],
});
