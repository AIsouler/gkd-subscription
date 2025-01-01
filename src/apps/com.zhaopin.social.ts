import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.homepage.ZSC_MainTabActivity',
          matches: '[vid="rl_banner_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15130818',
        },
      ],
    },
  ],
});
