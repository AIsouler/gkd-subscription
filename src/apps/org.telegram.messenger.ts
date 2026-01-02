import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '功能类-自动打开链接',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches: [
            '[text="打开链接"][visibleToUser=true]',
            '[text="打开"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24404404',
        },
      ],
    },
  ],
});
