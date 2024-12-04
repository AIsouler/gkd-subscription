import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kairui.discounts.cicls',
  name: '岸听音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches: ['[text="每日支持"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/17589011',
        },
        {
          key: 1,
          fastQuery: true,
          actionDelay: 500, // 避免误触
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text^="打开或下载" || text="进入小程序"][text.length>3]',
          snapshotUrls: 'https://i.gkd.li/i/17588801',
        },
        {
          key: 2,
          fastQuery: true,
          actionDelay: 500, // 避免误触
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/17690791',
        },
        {
          key: 3,
          fastQuery: true,
          actionDelay: 500, // 避免误触
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17588812',
            'https://i.gkd.li/i/17690758',
            'https://i.gkd.li/i/17690760',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          actionDelay: 500, // 避免误触
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17893509',
        },
        {
          key: 5,
          fastQuery: true,
          actionDelay: 500, // 避免误触
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches: ['[text="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/17893521',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchRoot: true,
          forcedTime: 10000,
          activityIds: 'com.janz.music.ui.AddViewActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1][text=null] > @ImageView[childCount=0][text=null] <<n [vid="add_view_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/17589097',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.SearchActivity',
          matches: '[vid="ksad_ad_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/17893524',
        },
      ],
    },
  ],
});
