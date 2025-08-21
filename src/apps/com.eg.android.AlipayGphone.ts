import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-花呗升级弹窗',
      actionMaximum: 1,
      rules: [
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.msp.ui.views.MspUniRenderActivity',
          ],
          matches: [
            '[text*="花呗升级" || text*="花呗服务"]',
            '@[clickable=true] >n [text="暂不升级，继续付款" || text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12826077',
            'https://i.gkd.li/i/13183946',
            'https://i.gkd.li/i/13631362',
            'https://i.gkd.li/i/13857535',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.AlipayLogin',
            'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage',
          ],
          matches: [
            '[text="立即更新" || text="马上体验" || text="版本更新"]',
            '[text*="稍后" || id="com.alipay.mobile.antui:id/btn_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/15010554',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '其他-小组件弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text$="小组件"][text.length<10]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13327349',
            'https://i.gkd.li/i/15514142',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-支付后自动点击完成',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity',
          ],
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '[text="完成"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14008852',
            'https://i.gkd.li/i/16328809',
            'https://i.gkd.li/i/17503266',
            'https://i.gkd.li/i/17686972',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-关闭免密支付开关',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
            'https://i.gkd.li/i/17107841',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-支付后的推荐弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text$="推荐你"][visibleToUser=true]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14060628',
            'https://i.gkd.li/i/14893122',
            'https://i.gkd.li/i/15050300',
            'https://i.gkd.li/i/20684144',
            'https://i.gkd.li/i/21917640',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-自动授权登录',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          action: 'clickCenter', // clickNode可能无效
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17376764',
        },
      ],
    },
  ],
});
