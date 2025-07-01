import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.omarea.vtools',
  name: 'Scene',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击ADB模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activities.ActivityStartSplash',
          matches: '[vid="mode_adb"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20991811',
        },
      ],
    },
  ],
});
