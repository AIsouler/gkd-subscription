import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[text="看视频领取" || text="立即领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/20083354',
            'https://i.gkd.li/i/20083359',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[text="上滑继续观看视频"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/20700498',
            'https://i.gkd.li/i/21812276',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-朋友推荐弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          action: 'back',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[text="朋友推荐"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20700504',
        },
      ],
    },
  ],
});
