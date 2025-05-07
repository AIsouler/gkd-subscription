import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[text="看视频领取" || text="立即领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/20083354',
            'https://i.gkd.li/i/20083359',
          ],
        },
      ],
    },
  ],
});
