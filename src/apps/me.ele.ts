import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
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
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: ['[text*="更新应用版本"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/17979012',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-红包弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.component.webcontainer.view.AppUCWebActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.application.ui.GeneralSettingsActivity',
            '.shopdetailv2.ShopDetailV2Activity',
          ],
          matches:
            'ViewGroup[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="me.ele:id/id_magex_mistview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12650238',
            'https://i.gkd.li/i/13294893',
            'https://i.gkd.li/i/13331361',
            'https://i.gkd.li/i/13362974',
            'https://i.gkd.li/i/13376008',
            'https://i.gkd.li/i/13710581',
          ],
        },
        {
          key: 1,
          matches:
            'ViewGroup[childCount=3] > @ViewGroup[index=2][clickable=true] <<n [vid="id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/14472929',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.newbooking.checkout.entrypoint.WMCheckoutActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726709',
            'https://i.gkd.li/i/13476719',
            'https://i.gkd.li/i/13523508',
            'https://i.gkd.li/i/13685037',
            'https://i.gkd.li/i/14050401',
          ],
        },
        {
          key: 2,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13710574',
            'https://i.gkd.li/i/13710591',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '评价提示-底部调研邀请卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.foodchannel.page.WMChannelNativeActivity',
          matches: [
            '[text*="小调研"]',
            '[vid="iv_cancel"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14630370',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-签到弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches:
            'ViewGroup[childCount=9] > @ViewGroup[childCount=0][index=8] <<n [vid="id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15047795',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches:
            'ViewGroup[childCount=2] > @ViewGroup[childCount=0][clickable=true] <<n [vid="id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15047819',
        },
      ],
    },
  ],
});
