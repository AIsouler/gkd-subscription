import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 1,
      name: '功能类-关闭广告的声音',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="开启声音"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20979049',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20979052', // 关闭声音后
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.luna.biz.main.main.MainActivity',
          matches: '[text="稍后再说"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21164341',
        },
      ],
    },
  ],
});
