import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 1,
      name: '功能类-扫码自动登录桌面版',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.alibaba.android.user.qrcode.WebLoginActivity',
          matches: '[id="com.alibaba.android.rimet:id/btn_login"]',
          snapshotUrls: 'https://i.gkd.li/i/13433981',
        },
      ],
    },
  ],
});
