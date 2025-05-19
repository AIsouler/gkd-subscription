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
          activityIds: '.feed.DetailWeiboActivity',
          matches: '[vid="close_layout"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20277548',
        },
      ],
    },
  ],
});
