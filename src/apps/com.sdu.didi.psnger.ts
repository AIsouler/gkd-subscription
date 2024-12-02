import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
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
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches: '[vid="iv_upgrade_btn_ignore"]',
          snapshotUrls: 'https://i.gkd.li/i/14582620',
        },
      ],
    },
  ],
});
