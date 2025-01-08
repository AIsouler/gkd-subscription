import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[vid="custom_dialog_cancel_button"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18344655',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[vid="home_xuanfu_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13930543',
        },
      ],
    },
  ],
});
