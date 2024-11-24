import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text^="新版本"]',
            '[id="com.sankuai.meituan:id/btn_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12614559',
            'https://i.gkd.li/i/12673132',
            'https://i.gkd.li/i/13292635',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '评价提示-订单调查弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: 'TextView[text="小调查"]',
          snapshotUrls: 'https://i.gkd.li/i/12639723',
        },
        {
          key: 1,
          action: 'back',
          matches: '[id="com.sankuai.meituan:id/questionnaireTitle"]',
          snapshotUrls: 'https://i.gkd.li/i/13682336',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-直播悬浮窗',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="正在讲解"]',
          snapshotUrls: 'https://i.gkd.li/i/17182888',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-付款后自动点击完成',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.sankuai.waimai.platform.machpro.container.WMMPActivity',
          matches: [
            '[text="商家已接单" || text="等待商家接单"][visibleToUser=true]',
            '[text="完成"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14163717',
            'https://i.gkd.li/i/17158063',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '[text="支付成功"] >5 @[clickable=true][text="完成"] <<n [vid="mil_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14392284',
        },
      ],
    },
  ],
});
