import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.thememanager',
  name: '主题壁纸',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.android.thememanager.ThemeResourceTabActivity',
            'com.android.thememanager.ThemeResourceProxyTabActivity',
          ],
          matches: '[vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14722559',
            'https://i.gkd.li/i/15286334',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.android.thememanager.ThemeResourceTabActivity',
            'com.android.thememanager.ThemeResourceProxyTabActivity',
          ],
          matches: '[vid="cancel"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15077774',
            'https://i.gkd.li/i/15286330',
          ],
        },
      ],
    },
  ],
});
