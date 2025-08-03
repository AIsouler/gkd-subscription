import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnnx.eBank.android',
  name: '湖南农信',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.cqrcb.mainbundle.page.MainActivity',
          matches: [
            '[text="版本更新"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/798b9e60-13c6-4d01-9bc4-e196a9f873fa',
          snapshotUrls: 'https://i.gkd.li/i/21052798',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-点击指纹登录',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.cqrcb.loginbundle.LoginActivity',
          matches:
            '[vid="ll_encrypt"][desc^="点击进行指纹登录"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21052778',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.cqrcb.mainbundle.page.MainActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21565709',
        },
      ],
    },
  ],
});
