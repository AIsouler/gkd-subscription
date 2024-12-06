import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.NewPageMaskActivity',
          matches: [
            '[text="继续拼单"][visibleToUser=true]',
            '[text="先去逛逛"][visibleToUser=true]',
          ], // @[clickable=true] > [text="先去逛逛"]该写法有概率失效
          snapshotUrls: [
            'https://i.gkd.li/i/15197527',
            'https://i.gkd.li/i/15211473',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches:
            '[text="去刮奖" || text="开心收下" || text^="红包助手" || text="立即抽免单" || text^="近期超"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15256531',
            'https://i.gkd.li/i/16636685',
            'https://i.gkd.li/i/16920803',
            'https://i.gkd.li/i/16958450',
            'https://i.gkd.li/i/17301131',
            'https://i.gkd.li/i/17710120',
            'https://i.gkd.li/i/17800557',
          ],
        },
        {
          key: 3,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup[childCount=2] < [childCount=1] < [vid="pdd"][childCount=1] < [childCount=1] < [vid="pdd"][childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/17348846',
        },
        {
          key: 4,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            '@TextView[text="你有一张无门槛券可使用"][visibleToUser=true] <3 View < View < View < View < WebView < WebView < FrameLayout < FrameLayout <2 ViewGroup <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/17613246',
        },
        {
          key: 5,
          fastQuery: true,
          action: 'back',
          activityIds: '.activity.NewPageActivity',
          matches: '[text="本单可用优惠"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17933585',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-商品详情页视频讲解窗口',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches: '[vid="iv_float_window_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14549415',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-下单后出现的弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '邀请好友弹窗',
          activityIds: [
            'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches:
            '@[clickable=true][childCount=0][index=0][text="" || text="关闭弹窗"] < View >(1,2) [text$="拼单成功" || text$="下单成功" ||text$="已支付" || text="待发货"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13308175',
            'https://i.gkd.li/i/13927594',
            'https://i.gkd.li/i/14434154',
            'https://i.gkd.li/i/14456017',
            'https://i.gkd.li/i/16361233',
            'https://i.gkd.li/i/16377027',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.activity.NewPageActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches: '[text="及时获取物流消息"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15004580',
            'https://i.gkd.li/i/15048085',
            'https://i.gkd.li/i/17727875',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches: '[text*="发送物流消息"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17613247',
            'https://i.gkd.li/i/17789290',
          ],
        },
      ],
    },
  ],
});
