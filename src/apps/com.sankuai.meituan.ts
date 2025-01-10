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
          activityIds: [
            'com.meituan.android.upgrade.UpgradeDialogActivity',
            'com.meituan.android.pt.homepage.activity.MainActivity',
          ],
          matches: [
            '[vid="update_logo"][visibleToUser=true]',
            '[vid="btn_close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18344492',
            'https://i.gkd.li/i/18375410',
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
          key: 1,
          action: 'back',
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
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
            '@Button[text="完成"] < View <2 View < View <2 View < WebView[text="支付成功"] < WebView < [vid="mil_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14392284',
        },
      ],
    },
  ],
});
