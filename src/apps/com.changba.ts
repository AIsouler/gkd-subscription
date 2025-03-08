import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.changba',
  name: '唱吧',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[text="打开通知"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19035151',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: [
            '[vid="dialog_view"][visibleToUser=true]',
            '[vid="cancel"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19035150',
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.MainActivity',
          matches:
            '@TextView[index=0][id=null][childCount=0][visibleToUser=true] < View < View < WebView[text="福利社"] < WebView < [vid="common_fragment_web_view_parent"]',
          snapshotUrls: 'https://i.gkd.li/i/19143658',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.playpage.activity.PlayPageActivity',
          matches: '[vid="close_mp4_gift_button"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19143691',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="delete_icon" || vid="fl_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19035144',
            'https://i.gkd.li/i/19035146',
          ],
        },
      ],
    },
  ],
});
