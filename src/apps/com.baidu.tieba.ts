import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16598692',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@[clickable=true][vid="obfuscated"][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595124',
            'https://i.gkd.li/i/16596297',
            'https://i.gkd.li/i/16632851', // [childCount>1] 防止误触
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.forum.ForumActivity',
          ],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595301',
            'https://i.gkd.li/i/16596195',
            'https://i.gkd.li/i/16596775',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595234',
            'https://i.gkd.li/i/16619736',
            'https://i.gkd.li/i/16647874',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16622395',
            'https://i.gkd.li/i/16632851',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '[text="会员弹窗"] >(2,3) View[childCount=3] > Image[index=2][text!=null][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/16595138',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-信息流广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.forum.ForumActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text="直播中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595137',
            'https://i.gkd.li/i/16596473',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595127',
            'https://i.gkd.li/i/16595515',
            'https://i.gkd.li/i/16596130',
          ],
        },
        {
          key: 2,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595120',
            'https://i.gkd.li/i/16595133',
          ],
        },
        {
          key: 3,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
          snapshotUrls: 'https://i.gkd.li/i/16596210',
        },
        {
          preKeys: [0, 1, 2, 3],
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.forum.ForumActivity',
          ],
          matches:
            '@View[clickable=true][visibleToUser=true] - [text^="选择不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595134',
            'https://i.gkd.li/i/16595511',
            'https://i.gkd.li/i/16595113',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-帖子、感兴趣的吧推广',
      desc: '关闭首页、吧内游戏推广帖子和感兴趣的吧推广',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          // 防止误触标题以“游戏”开头的帖子，此页面推广帖子和正常帖子节点没有区别；[childCount=2]区分是否在热门页面
          excludeMatches: 'RelativeLayout[childCount=2] > [text="热门"]',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] < LinearLayout <4 RelativeLayout + FrameLayout > [text^="游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16828309',
            'https://i.gkd.li/i/16828230',
            'https://i.gkd.li/i/16828318',
            'https://i.gkd.li/i/16828401',
            'https://i.gkd.li/i/16828436',
          ],
        },
        {
          key: 1,
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧"]',
          snapshotUrls: 'https://i.gkd.li/i/16914357',
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.UpdateDialog',
          matches: '[text="稍后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/16908501',
        },
      ],
    },
  ],
});
