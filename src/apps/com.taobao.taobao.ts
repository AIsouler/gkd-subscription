import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
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
          matches:
            '@[vid*="close"] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17576743',
            'https://i.gkd.li/i/17578451',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          ],
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/13198052',
            'https://i.gkd.li/i/14905372',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@ImageView[desc="图片"][childCount=0][clickable=true][visibleToUser=true][width<180&&height<180] <<n [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18218537',
            'https://i.gkd.li/i/20277438',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
            'com.taobao.android.order.bundle.TBOrderListActivity',
          ],
          matches: '[vid="update_imageview_cancel_v2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13336760',
            'https://i.gkd.li/i/13695520',
            'https://i.gkd.li/i/14899863',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭小额免密支付',
      desc: '在支付前/后出现',
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          key: 0,
          matches: [
            '[text$="小额免密支付"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13438414',
        },
        {
          key: 1,
          matches: '@[checked=true] < * - [text="开通淘宝小额免密支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14471853', // 关闭前
            'https://i.gkd.li/i/14471858', // 关闭后
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-花呗升级弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗升级" || text*="花呗服务"]',
            '@[clickable=true] >n [text="暂不升级，继续付款" || text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13691864',
            'https://i.gkd.li/i/13628020',
            'https://i.gkd.li/i/13898735',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-"「0元下单」权益"弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="恭喜获得「0元下单」权益"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14155537',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-商品详情页直播悬浮窗',
      fastQuery: true,
      matchTime: 5000,
      rules: [
        {
          activityIds:
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          matches: '[vid="view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15124094',
        },
      ],
    },
  ],
});
