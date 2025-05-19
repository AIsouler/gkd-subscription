import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮窗口',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainTabActivity',
          matches:
            '[vid="floating_window"] >2 [vid="close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20277426',
        },
      ],
    },
  ],
});
