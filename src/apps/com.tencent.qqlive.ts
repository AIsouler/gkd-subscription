import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          excludeActivityIds: '.ona.activity.SearchPagerActivity',
          matches:
            '[text*="跳过"][text.length<10][width<400 && height<200][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20691457',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20691504',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ona.update.trunk.client.TrunkUpdateActivity',
          matches: '[text="暂不升级"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19666787',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@[clickable=true] - [text*="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/20368590',
        },
      ],
    },
  ],
});
