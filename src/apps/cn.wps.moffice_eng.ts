import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 1,
      name: '局部广告-首页底部广告',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[vid="phone_message_close_button" || vid="close_home_ad_banner_iv"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17893252',
            'https://i.gkd.li/i/18047731',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '@TextView[index=parent.childCount.minus(1)] <3 View < View <2 WebView < WebView <2 ViewGroup < [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/17893251',
        },
      ],
    },
  ],
});
