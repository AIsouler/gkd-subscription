import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
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
          activityIds: '.upgrade.library.dialog.UpgradeDialogAct',
          matches: ['[text="发现新版本"]', '[vid="btn_dismiss"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13387479',
            'https://i.gkd.li/i/13488702',
            'https://i.gkd.li/i/14209268',
          ],
        },
      ],
    },
  ],
});
