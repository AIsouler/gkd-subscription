import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
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
          matches: '@[clickable=true] >2 [text="关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23839053',
        },
      ],
    },
  ],
});
