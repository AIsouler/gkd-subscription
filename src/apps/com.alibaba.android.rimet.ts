import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 1,
      name: '功能类-扫码自动登录桌面版',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.alibaba.android.user.qrcode.WebLoginActivity',
          matches: '[vid="btn_login"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18344194',
        },
      ],
    },
  ],
});
