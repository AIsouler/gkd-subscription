import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.mediaeditor',
  name: '小米相册-编辑',
  groups: [
    {
      key: 1,
      name: '功能类-继续使用流量下载',
      rules: [
        {
          fastQuery: true,
          activityIds: '.aicr.AIManagerActivity',
          matches: [
            '[text="正在使用流量下载"][visibleToUser=true]',
            '[text="继续下载"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23924559',
        },
      ],
    },
  ],
});
