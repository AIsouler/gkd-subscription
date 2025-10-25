import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
          ],
          matches:
            '([vid="btn_skip"][visibleToUser=true]) || ([text*="跳过"][text.length<10][visibleToUser=true])',
          snapshotUrls: [
            'https://i.gkd.li/i/18221451',
            'https://i.gkd.li/i/22714295',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18221225',
            'https://i.gkd.li/i/23141429',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
            '.ContentActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * >n [text*="广告"][childCount=0][id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849671',
            'https://i.gkd.li/i/14645530',
            'https://i.gkd.li/i/14178516',
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14206988',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17002118',
            'https://i.gkd.li/i/17002119',
            'https://i.gkd.li/i/17002120',
          ],
        },
        {
          key: 1,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true] < * - * > [text*="广告" || text$="商品介绍"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14296163',
            'https://i.gkd.li/i/14321041',
            'https://i.gkd.li/i/14468152',
            'https://i.gkd.li/i/17237944',
          ],
        },
        {
          key: 2,
          activityIds: '.app.ui.activity.MainActivity',
          matches: '@ViewGroup[clickable=true] <4 * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14192451',
        },
        {
          key: 3,
          activityIds: '.app.ui.activity.MainActivity',
          matches: '@ViewGroup[clickable=true] <3 * < * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14730741',
        },
        {
          key: 4,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '@[vid="remove"] - [vid="subtitle"][text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17268845',
            'https://i.gkd.li/i/17268869',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 90,
          activityIds: [
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
            '.ContentActivity',
            '.app.ui.activity.MainActivity',
          ],
          matches:
            '@[clickable=true] >(1,3) [text$="不感兴趣" || text^="屏蔽作者"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849689',
            'https://i.gkd.li/i/17237940',
            'https://i.gkd.li/i/17268849',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.app.ui.activity.MainActivity',
          matches: ['[text$="内容推送"]', '[vid="btn_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/18057057',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18343818',
        },
        {
          key: 2,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.app.ui.activity.MainActivity',
          matches: '[vid="floating_close_btn"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18343974',
        }, // 3
      ],
    },
    {
      key: 4,
      name: '局部广告-搜索栏上方广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.ui.activity.MainActivity',
          matches: ['[vid="ad_container"]', '[vid="img_close_focus"]'],
          snapshotUrls: 'https://i.gkd.li/i/14156887',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.mix.activity.ContentMixProfileActivity',
            '.mixshortcontainer.MixShortContainerActivity',
          ],
          matches:
            '@[text="×"][visibleToUser=true] <n * > [visibleToUser=true][text*="广告" || text="查看详情"] <<n [vid="web_frame" || vid="view_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
            'https://i.gkd.li/i/15285359',
          ],
        },
        {
          key: 3,
          activityIds: '.app.ui.activity.MainActivity',
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14332161',
        },
        {
          key: 4,
          activityIds: [
            '.mixshortcontainer.MixShortContainerActivity',
            '.mix.activity.ContentMixProfileActivity',
          ],
          matches:
            '@Image[clickable=true][visibleToUser=true] <2 * > [visibleToUser=true][text$="广告"] <<n [vid="view_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14391614',
            'https://i.gkd.li/i/15282584',
          ],
        },
        {
          key: 5,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true]  -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * > [text*="知乎" || text="创作者小助手"][childCount=0][id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14235024',
            'https://i.gkd.li/i/14944631',
            'https://i.gkd.li/i/14232195',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14232195',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.app.ui.activity.MainActivity',
          matches: ['[vid="activity_img"]', '[vid="activity_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
        {
          key: 1,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
        {
          key: 2,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '[vid="close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14970008',
        },
      ],
    },
    {
      key: 7,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: [
        '.app.ui.activity.MainActivity',
        '.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502', // 勾选前
            'https://i.gkd.li/i/14445815', // 勾选后
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[取消]',
          matches: ['[text="去应用市场"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
    },
  ],
});
