import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          position: {
            left: 'width * 0.8657',
            top: 'width * 0.1333',
          },
          matches: '[vid="ad_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18423724',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: [
            '[text^="喜欢豆瓣吗"][visibleToUser=true]',
            '[text="下次再说"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18424257',
        },
      ],
    },
  ],
});
