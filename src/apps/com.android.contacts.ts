import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.mobile.businesshall.ui.common.RecommendPopupActivity',
          matches: '[vid="img_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15369196',
        },
      ],
    },
  ],
});
