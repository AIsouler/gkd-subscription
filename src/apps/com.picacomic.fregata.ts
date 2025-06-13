import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.activities.MainActivity',
          matches: '[vid="imageButton_popup_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20719762',
        },
        {
          key: 1,
          activityIds: '.activities.MainActivity',
          matches:
            '[vid="button_dialog_announcement_positive"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20719765',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activities.MainActivity',
          matches: '[vid="imageButton_banner_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20719755',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-流量提醒/被玩坏弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activities.ComicViewerActivity',
          matches: [
            '[text*="你正在使用數據喔"][visibleToUser=true]',
            '[text="確定"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20719753',
        },
        {
          key: 1,
          activityIds: '.activities.MainActivity',
          matches: [
            '[text^="嗶咔嗶咔被玩壞了"][visibleToUser=true]',
            '[text="確定"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20719771',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动签到',
      fastQuery: true,
      activityIds: '.activities.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="textView_profile_punch_in"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20719746',
        },
        {
          preKeys: [0],
          matches: '[text="確定"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20719745',
        },
      ],
    },
  ],
});
