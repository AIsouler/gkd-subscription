import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17459576',
            'https://i.gkd.li/i/18227243',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="广告 | 关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-底部弹窗广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '@ImageView[id=null][childCount=0][visibleToUser=true] < FrameLayout[id=null][childCount=1] <2 FrameLayout[id=null][childCount=6][getChild(2).childCount=4] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/18265539',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-内测体验弹窗',
      desc: '点击[不再提醒]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="抢先体验"] -2 [text="不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13178485',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'common.hybrid.HybridViewActivity',
          matches: '@[desc="关闭按钮"] <3 * > [desc^="看广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13806773',
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '@[vid="close_btn"] - * > [text*="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/14881903',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-取消自动进入免费畅听模式',
      rules: [
        {
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches: ['[text$="即将进入免费畅听模式"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/16358422',
        },
      ],
    },
  ],
});
