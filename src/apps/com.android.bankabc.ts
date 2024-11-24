import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.android.bankabc.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="upgrade_checkbox"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/16410094',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="iv_negative"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16410094',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-定位权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="允许获取位置信息"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/14208572',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="iv_notification_reminder_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14208621',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.android.bankabc.MainActivity',
          matches: '[vid="iv_ad_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/16355928',
        },
      ],
    },
  ],
});
