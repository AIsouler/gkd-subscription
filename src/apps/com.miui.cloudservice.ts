import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '会员打折弹窗',
          fastQuery: true,
          activityIds: '.ad.AdPopupActivity',
          matches: '[vid="ad_popup_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/14320937',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MiCloudMainActivity',
          matches: ['[text="立即升级"]', '[text="以后再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/14476801',
        },
      ],
    },
  ],
});
