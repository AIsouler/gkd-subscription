import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
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
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16323111',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.jd.lib.message.messagecenter',
            '.MainFrameActivity',
          ],
          matches:
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13917163',
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
            'https://i.gkd.li/i/17130954',
            'https://i.gkd.li/i/18060234',
          ],
        },
        {
          key: 1,
          activityIds: 'com.jd.lib.message.messagecenter',
          matches:
            '@[desc="关闭按钮"][clickable=true] + [text^="打开系统通知"]',
          snapshotUrls: 'https://i.gkd.li/i/15228909',
        },
        {
          key: 2,
          activityIds: 'com.jd.lib.message.messagecenter',
          matches: '@[desc="关闭按钮"] - LinearLayout > [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/17912519',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-京东账号自动登录',
      desc: '自动点击[确认登录]',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.lib.login.ScanCodeLoginActivity',
          matches: '[text="确认登录电脑端"]',
          snapshotUrls: 'https://i.gkd.li/i/15129394',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          name: '加入购物车/支付后后出现的弹窗',
          activityIds: [
            'com.jd.lib.cart.ShoppingCartNewActivity',
            'com.jd.lib.productdetail.ProductDetailActivity',
          ],
          matches: '[text^="继续逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13446362',
            'https://i.gkd.li/i/15047243',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: '.MainFrameActivity',
          matches: '[text^="惊喜福利来袭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17974166',
        },
      ],
    },
  ],
});
