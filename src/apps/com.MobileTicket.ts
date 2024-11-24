import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
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
          matches:
            '[vid="tv_main_splash_skip" || vid="tv_skip"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17580273',
            'https://i.gkd.li/i/17656103',
          ],
        },
      ],
    },
  ],
});
