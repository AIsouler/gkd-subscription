import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: '.search.ui.search.SearchOperateActivity',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048443',
            'https://i.gkd.li/i/15048416',
            'https://i.gkd.li/i/16388942', // 防止误触
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.9055',
            top: 'width * 0.1611',
          },
          excludeMatches: '[text*="跳过"]',
          matches: '[vid="native_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048354',
            'https://i.gkd.li/i/15048376', // 防止在此页面提前触发规则
          ],
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
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
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
          matches:
            '[vid="close" || vid="home_flow_item_close_iv"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048352',
            'https://i.gkd.li/i/15048355',
            'https://i.gkd.li/i/15048357',
            'https://i.gkd.li/i/17376753',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.search.ui.search.SearchOperateActivity',
          matches: '[vid="search_banner_ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17725350',
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
          matches: ['[text="是否打开系统通知"]', '[vid="btn_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/15322046',
        },
      ],
    },
  ],
});
