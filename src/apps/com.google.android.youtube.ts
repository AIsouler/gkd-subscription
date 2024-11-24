import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 1,
      name: '全屏广告-视频内广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[vid="skip_ad_button"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16323120',
            'https://i.gkd.li/i/16323119',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="开启通知"]', '[text="不用了"]'],
          snapshotUrls: 'https://i.gkd.li/i/16914351',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          name: '会员广告',
          actionMaximum: 1,
          resetMatch: 'app',
          matches: '@[desc="关闭"] <<n [vid="custom"]',
          snapshotUrls: 'https://i.gkd.li/i/16914350',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动翻译评论',
      desc: '评论区自动点击[翻译成中文]',
      rules: [
        {
          fastQuery: true,
          actionCd: 500,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@Button[desc^="翻译成中文"][clickable=true][visibleToUser=true] <<n [vid="results"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17068544', // 翻译前
            'https://i.gkd.li/i/17068647', // 翻译后
          ],
        },
      ],
    },
  ],
});
