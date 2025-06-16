import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮窗口',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainTabActivity',
          matches:
            '[vid="floating_window"] >2 [vid="close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20277426',
        },
        {
          key: 1,
          fastQuery: true,
          actionMaximum: 1,
          actionDelay: 300,
          activityIds: '.feed.DetailWeiboActivity',
          matches: '[vid="close_layout"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20277548',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainTabActivity',
          matches: '[text="不了，谢谢"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20277628',
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
          activityIds: '.notifyguidev2.NotifyGuideV2Activity',
          matches: [
            '[text="选择通知类型"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20562139',
        },
      ],
    },
  ],
});
