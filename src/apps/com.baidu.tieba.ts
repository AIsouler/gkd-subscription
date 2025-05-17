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
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16598692',
        },
        {
          key: 1,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/17902766',
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
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595124',
            'https://i.gkd.li/i/16596297',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16632851', // [childCount>1] 防止误触
        },
        {
          key: 1,
          activityIds: [
            '.tblauncher.MainTabActivity',
            '.pb.pb.main.PbActivity',
            '.forum.ForumActivity',
          ],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595301',
            'https://i.gkd.li/i/16596195',
            'https://i.gkd.li/i/16596775',
          ],
        },
        {
          key: 2,
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text="小游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17943902',
            'https://i.gkd.li/i/18217417',
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
          activityIds: ['.pb.pb.main.PbActivity', '.forum.ForumActivity'],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛" || text^="关注本吧"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595234',
            'https://i.gkd.li/i/16619736',
            'https://i.gkd.li/i/16647874',
            'https://i.gkd.li/i/17992981',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: [
            '.tblauncher.MainTabActivity',
            '.pb.pb.main.PbActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true][vid="obfuscated"] - [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16622395',
            'https://i.gkd.li/i/16632851',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/13327933',
        },
        {
          key: 3,
          fastQuery: true,
          actionMaximum: 1,
          activityIds: '.pb.pb.main.PbActivity',
          matches: '@[clickable=true] >2 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18531187',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            '@Image[text!=null][index=parent.childCount.minus(1)][visibleToUser=true] <3 View < View < View < WebView[text="会员弹窗"] < WebView < FrameLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595138',
            'https://i.gkd.li/i/17944283',
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
          activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
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
            '.forum.ForumActivity',
            '.pb.pb.main.PbActivity',
            '.tblauncher.MainTabActivity',
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
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595120',
            'https://i.gkd.li/i/16595133',
          ],
        },
        {
          key: 3,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
          snapshotUrls: 'https://i.gkd.li/i/16596210',
        },
        {
          preKeys: [0, 1, 2, 3],
          activityIds: [
            '.tblauncher.MainTabActivity',
            '.pb.pb.main.PbActivity',
            '.forum.ForumActivity',
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
      name: '局部广告-感兴趣的吧推广',
      desc: '关闭首页、吧内其他贴吧的推广',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧" || text^="本吧的人都在逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16914357',
            'https://i.gkd.li/i/17944680',
            'https://i.gkd.li/i/18218517',
          ],
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
      priorityTime: 10000,
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
