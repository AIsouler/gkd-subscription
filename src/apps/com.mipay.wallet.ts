import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="skip"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16828053',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
          matches:
            'FrameLayout >2 View[childCount=2] >2 View[childCount=2] > @ImageView[clickable=true][index=0][visibleToUser=true] <<n [vid="flutter_container"]',
          snapshotUrls: 'https://i.gkd.li/i/16828039',
        },
      ],
    },
  ],
});
