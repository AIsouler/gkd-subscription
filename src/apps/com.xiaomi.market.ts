import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
          matches: '@Button[clickable=true][text="关闭"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/16323123',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-点击升级软件后的弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '[vid="dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14814456',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-个性化推荐卡片',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
          matches: '[id="com.xiaomi.market:id/close_float_recommend"]',
          snapshotUrls: 'https://i.gkd.li/i/13624971',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动点击[查看全部升级]',
      desc: '应用升级页面',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '@[clickable=true] > [text^="查看全部升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14782814',
        },
      ],
    },
  ],
});
