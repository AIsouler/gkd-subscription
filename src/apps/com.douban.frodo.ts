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
          exampleUrls: 'https://e.gkd.li/460eb38d-9c7b-4321-b3e2-3b4d7f315dbd',
          snapshotUrls: 'https://i.gkd.li/i/18423724',
        },
      ],
    },
  ],
});
