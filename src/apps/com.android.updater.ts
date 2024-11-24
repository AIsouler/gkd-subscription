import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 1,
      name: '更新提示-MIUI更新弹窗',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="开启智能更新"]', '[text="暂不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/15127998',
        },
      ],
    },
  ],
});
