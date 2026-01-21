import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hpbr.bosszhipin',
  name: 'BOSS直聘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18765031',
        },
      ],
    },
  ],
});
