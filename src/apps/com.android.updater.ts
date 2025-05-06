import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 1,
      name: '更新提示-智能更新弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.MainActivity', '.UpdateActivity'],
          matches: [
            '[text="开启智能更新"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15127998',
            'https://i.gkd.li/i/20061900',
          ],
        },
      ],
    },
  ],
});
