import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
          ],
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15092772',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15092814',
            'https://i.gkd.li/i/16318423',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-推荐页卡片广告',
      desc: '点击关闭-点击直接关闭',
      fastQuery: true,
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="tag_ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/13927753',
        },
        {
          // preKeys: [0], 可能会被其他弹窗插入触发其他规则导致二段不触发
          key: 1,
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13927752',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          activityIds: [
            '.activity.MainActivity',
            '.activity.PlayerActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
            '.music.biz.comment.activity.CommentActivity',
          ],
          excludeMatches: '[text="当前场景"][visibleToUser=true]',
          matches:
            '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text$="立即续费" || text*="小组件到桌面"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/20097535',
            'https://i.gkd.li/i/20097609',
            'https://i.gkd.li/i/20115012',
            'https://i.gkd.li/i/22451511',
            'https://i.gkd.li/i/23770986',
            'https://i.gkd.li/i/23770978',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15404777',
            'https://i.gkd.li/i/20115204',
            'https://i.gkd.li/i/20159204',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          action: 'back',
          activityIds: [
            '.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            '.activity.MainActivity',
            '.activity.PlayListActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
          ],
          matches: [
            '[text="支付宝"][visibleToUser=true]',
            '[text^="确认协议并" || text="立即开通"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
            'https://i.gkd.li/i/13391498',
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
            'https://i.gkd.li/i/16242200',
            'https://i.gkd.li/i/20097276',
            'https://i.gkd.li/i/20218350',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/20097306', // 正常开通会员页面
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.activity.MainActivity',
          matches: [
            '[text*="新版本"][visibleToUser=true]',
            '[text="近期不再提示"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16357369',
        },
        {
          key: 1,
          activityIds: '.activity.MainActivity',
          matches: '[vid="md_dialog_cm_close_btn"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20200168',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: '.music.biz.rn.activity.MainProcessRNActivity',
          matches: '[vid="adTagView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20367030',
        },
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.MainActivity',
          matches: '[vid="v_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23982125',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-扫码后自动点击[授权登录]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.module.login.LoginPermissionActivity',
          matches: '[text="授权登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14830218',
        },
      ],
    },
  ],
});
