import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '功能类-清空回收站时点击[永久删除]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          activityIds: '.activity.TrashActivity',
          matches: ['[text="清空回收站"]', '[text="永久删除"]'],
          snapshotUrls: 'https://i.gkd.li/i/17529154',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17529155',
        },
      ],
    },
  ],
});
