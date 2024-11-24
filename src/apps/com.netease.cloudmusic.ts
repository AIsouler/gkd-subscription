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
            'com.netease.cloudmusic.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
          ],
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15092772',
            'https://i.gkd.li/i/15092814', // 避免误触
            'https://i.gkd.li/i/16318423', // 避免误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-推荐页卡片广告',
      desc: '点击关闭-点击直接关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="tag_ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/import/13927753',
        },
        {
          key: 1,
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13927752',
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
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.activity.PlayerActivity',
          ],
          excludeMatches: '[text="当前场景"]',
          matches: '[vid="dsl_dialog_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/15404777', // 避免误触
          ],
        },
        {
          key: 5,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            'View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid="popLayerWebViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15160018',
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
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            'com.netease.cloudmusic.activity.MainActivity',
            '.activity.PlayListActivity',
          ],
          matches: ['[text="支付宝"]', '[text^="确认协议并"]'],
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
          ],
        },
        {
          key: 1,
          action: 'back',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text^="邀您开通VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/14956768',
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
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: ['[text*="新版本"]', '[text="近期不再提示"]'],
          snapshotUrls: 'https://i.gkd.li/i/16357369',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="adTagView"]',
          snapshotUrls: 'https://i.gkd.li/i/15047096',
        },
        {
          key: 1,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches:
            '[vid="iv_ad_close"][clickable=true][visibleToUser=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
        {
          key: 2,
          activityIds:
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          matches: '[vid="adCloseIV"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16385547',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-评论区广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: [
        'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
      ],
      rules: [
        {
          key: 1,
          matches: '[vid="adTagView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964828',
            'https://i.gkd.li/i/15430827',
          ],
        },
        {
          preKeys: [1],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14932659',
            'https://i.gkd.li/i/14964832',
          ],
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
          activityIds:
            'com.netease.cloudmusic.module.login.LoginPermissionActivity',
          matches: '[text="授权登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14830218',
        },
      ],
    },
  ],
});
