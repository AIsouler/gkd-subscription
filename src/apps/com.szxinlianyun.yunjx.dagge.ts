import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.szxinlianyun.yunjx.dagge',
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
          key: 1,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches: ['[text="每日支持"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/18037266',
        },
        {
          key: 2,
          actionDelay: 500,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/18037255',
        },
        {
          key: 3,
          actionDelay: 500,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/18037268',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/18037269',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.HomeActivity',
          matches: ['[text="广告"]', '@[clickable=true] > [text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/18037273',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/665b18a4-66f4-4a92-94d3-8f05c88436f7',
          snapshotUrls: 'https://i.gkd.li/i/18147895',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      forcedTime: 10000,
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.janz.music.ui.AddViewActivity',
            'com.janz.music.ui.SearchActivity',
          ],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup[childCount=2] > [text^="立即" || text="继续看" || text="扭一扭" || text="摇一摇"] <<n [vid="ksad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18037248',
            'https://i.gkd.li/i/18037492',
            'https://i.gkd.li/i/18037580',
            'https://i.gkd.li/i/18147892',
            'https://i.gkd.li/i/18147953',
            'https://i.gkd.li/i/18266262',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.janz.music.ui.AddViewActivity',
            'com.janz.music.ui.SearchActivity',
          ],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup[childCount=1] <(1,2) ViewGroup -(1,2) ViewGroup >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18037405',
            'https://i.gkd.li/i/18037523',
            'https://i.gkd.li/i/18148085',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.janz.music.ui.AddViewActivity',
          matches: '[vid="ksad_ad_dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18266243',
        },
      ],
    },
  ],
});
