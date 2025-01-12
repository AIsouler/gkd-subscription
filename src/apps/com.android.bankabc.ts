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
      activityIds: '.MainActivity',
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
          activityIds: '.MainActivity',
          matches: ['[text="允许获取位置信息"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/14208572',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: [
            '.MainActivity',
            'abc.feinno.uilibrary.activitys.PublicListActivity',
          ],
          matches:
            '[vid="iv_notification_reminder_dialog_close" || vid="dialog_notification_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14208621',
            'https://i.gkd.li/i/18389133',
          ],
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
          activityIds: '.MainActivity',
          matches: '[vid="iv_ad_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/16355928',
        },
      ],
    },
  ],
});
