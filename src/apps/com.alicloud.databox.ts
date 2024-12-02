import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alicloud.databox.MainActivity',
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[text="领取"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15573070', // 签到前
            'https://i.gkd.li/i/15573233', // 签到后
          ],
        },
        {
          // preKeys: [0], 有概率被其他规则打断
          key: 1,
          action: 'back',
          matches: '[vid="ivCardBackBackground"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15600210',
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
          activityIds: '.MainActivity',
          matches:
            '[text*="新版本"] >4 View[childCount=4] > @View > Image <<n [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/13806865',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭[开启相册自动备份功能]弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.alicloud.databox.MainActivity',
          matches:
            '[text="允许后台自动备份"] < * +3 @TextView[clickable=true][index=parent.childCount.minus(1)] <<n [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14414446',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动授权登录',
      fastQuery: true,
      actionMaximum: 1,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: 'com.taobao.login4android.scan.QrScanActivity',
          matches: '[text="确认并登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414503', // 该页面不允许截图所以快照页面是黑屏，但不影响编写规则
        },
        {
          key: 1,
          activityIds:
            'com.alicloud.databox.webview.jsbridge.BridgeWebViewActivity',
          matches: [
            'TextView[text="登录与授权"]',
            '@[childCount=0][text="允许"] <<n [vid="webContainer"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16086539',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'back',
          activityIds: 'com.alicloud.databox.MainActivity',
          matches:
            'View[childCount=3] > TextView[index=1][text=""] <<n [vid="webContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14235204',
            'https://i.gkd.li/i/15524739',
          ],
        },
        {
          key: 1,
          action: 'back',
          activityIds: 'com.alicloud.databox.MainActivity',
          matches:
            'View[text=""] > @[visibleToUser=true][text*="自动备份"] <<n [vid="webContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16799126',
            'https://i.gkd.li/i/16861314',
          ],
        },
      ],
    },
  ],
});
