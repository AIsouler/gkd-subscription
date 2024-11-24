import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity',
          matches: ['[vid="single_banner"]', '[vid="close"]'],
          snapshotUrls: 'https://i.gkd.li/i/15173207',
        },
      ],
    },
  ],
});
