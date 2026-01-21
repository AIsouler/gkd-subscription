import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: '.search.ui.search.SearchOperateActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048443',
            'https://i.gkd.li/i/15048416',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16388942', // 防止误触
        },
        {
          key: 1,
          position: {
            left: 'width * 0.9055',
            top: 'width * 0.1611',
          },
          excludeMatches: '[text*="跳过"][visibleToUser=true]',
          matches: '[vid="native_container"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048354',
            'https://i.gkd.li/i/18388919',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/15048376', // 防止在此页面提前触发规则
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
          activityIds: 'com.xunlei.upgrade.XUpgradeActivity',
          matches: '[id="com.xunlei.downloadprovider:id/x_upgrade_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13228920',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.frame.MainTabActivity',
          matches: '[vid="close_btn"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16388890',
            'https://i.gkd.li/i/16920802',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.frame.MainTabActivity',
          matches: '@[vid="close"] - [text$="领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048352',
            'https://i.gkd.li/i/15048357',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18250812',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.search.ui.search.SearchOperateActivity',
          matches: '[vid="search_banner_ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17725350',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            '.frame.MainTabActivity',
            '.download.center.DownloadCenterActivity',
          ],
          matches:
            '[vid="home_flow_item_close_iv" || vid="ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17376753',
            'https://i.gkd.li/i/18250890',
            'https://i.gkd.li/i/18265938',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xunlei.uikit.activity.TransformActivity',
          matches: ['[text="是否打开系统通知"]', '[vid="btn_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/15322046',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: '.frame.MainTabActivity',
      rules: [
        {
          key: 1,
          matches: '[vid="btn_ad_feedback"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18250917',
        },
        {
          preKeys: [1],
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18250933',
        },
      ],
    },
    {
      key: 6,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.frame.MainTabActivity',
          matches: '@[vid="iv_close"] -3 [text="五星好评"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18310367',
        },
      ],
    },
  ],
});
