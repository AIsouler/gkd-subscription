import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ktls.fileinfo',
  name: '存储空间清理',
  groups: [
    {
      key: 1,
      name: '功能类-确定开启重新检索并开始查找',
      fastQuery: true,
      activityIds: '.O000OO00O0OOO00OO00.O0O0OO00OOOOO0OOO0O',
      rules: [
        {
          key: 0,
          matches: [
            '[text="开启重新检索"][visibleToUser=true]',
            '[text="确定"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18937807',
        },
        {
          preKeys: [0],
          matches: '[text="开始查找"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18937803',
        },
      ],
    },
  ],
});
