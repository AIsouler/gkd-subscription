import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.zhanghai.android.files',
  name: '质感文件',
  groups: [
    {
      key: 1,
      name: '功能类-自动删除图片',
      fastQuery: true,
      activityIds: '.viewer.image.ImageViewerActivity',
      rules: [
        {
          key: 1,
          matches: '@LinearLayout[clickable=true] >3 [text="删除"]',
          snapshotUrls: 'https://i.gkd.li/i/18903899',
        },
        {
          preKeys: [1],
          matches: ['[text^="删除"]', '[text="确定"]'],
          snapshotUrls: 'https://i.gkd.li/i/18903902',
        },
      ],
    },
  ],
});
