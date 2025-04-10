import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '分段广告-朋友圈广告',
      activityIds: '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text="广告"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15242828',
        },
        {
          key: 1,
          matches:
            'RecyclerView > FrameLayout[id=null][text=null][desc=null] >4 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/19633571',
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1],
          key: 25,
          fastQuery: true,
          anyMatches: [
            '[text^="关闭"][clickable=true][visibleToUser=true]', // 1
            '@[clickable=true] > [text^="关闭"][clickable=false][visibleToUser=true]', // 2
            '@[text="关闭该广告"][clickable=true] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]', // 3
          ],
          snapshotUrls: [
            // 1
            'https://i.gkd.li/i/13926578',
            'https://i.gkd.li/i/15242827',
            // 2
            'https://i.gkd.li/i/18284569',
            // 3
            'https://i.gkd.li/i/19633486',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-电脑微信快捷自动登录',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.plugin.webwx.ui.ExtDeviceWXLoginUI',
          matches: ['[text="登录 Windows 微信"]', '[text="登录"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13522625',
            'https://i.gkd.li/i/17697996',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动授权登录',
      desc: '自动允许使用头像昵称等',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: [
            '.plugin.webview.ui.tools.MMWebViewUI',
            '.plugin.webview.ui.tools.SDKOAuthUI',
          ],
          matches: ['[text$="你的昵称、头像"]', '[text="允许"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/15271716',
            'https://i.gkd.li/i/15524445',
            'https://i.gkd.li/i/16972565',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动领取微信红包',
      desc: '自动领取私聊红包,群聊红包',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击别人发的红包',
          activityIds: '.ui.LauncherUI',
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
          snapshotUrls: 'https://i.gkd.li/i/18134826',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18134823', // 自己发的， LinearLayout[childCount=1] 区分
            'https://i.gkd.li/i/18134833', // 已领取的， getChild(1).childCount=1 区分
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击红包-开',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          matches: '@Button[desc="开"] -3 LinearLayout >2 [text$="红包"]',
          snapshotUrls: 'https://i.gkd.li/i/18134828',
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [0, 1],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          matches: '@ImageView[desc="返回"] +2 LinearLayout >8 [text$="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            '.plugin.gallery.ui.AlbumPreviewUI',
            '.plugin.gallery.ui.ImagePreviewUI',
          ],
          anyMatches: [
            '@ImageButton[desc="未选中,原图,复选框"][visibleToUser=true] + [text="原图"]',
            '@ImageButton[desc="未选中,原图,复选框"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16987145', // 未选中
            'https://i.gkd.li/i/16987144', // 未选中
            'https://i.gkd.li/i/16987141', // 已选中
            'https://i.gkd.li/i/16987147', // 已选中
            'https://i.gkd.li/i/19625049', // 无法快速查询
          ],
        },
      ],
    },
    {
      key: 6,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      // actionMaximum: 1, // 经常需要点2次
      priorityTime: 10000,
      rules: [
        {
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI',
            '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
          ],
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.plugin.finder.',
          matches:
            '@[text="我知道了"][index=parent.childCount.minus(1)] <n LinearLayout > [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13538145',
            'https://i.gkd.li/i/13575195',
            'https://i.gkd.li/i/18135103',
            'https://i.gkd.li/i/19683937',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-付款后自动点击完成/返回商家',
      rules: [
        {
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches:
            '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14662147',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-解锁 Windows 微信',
      desc: '点击[解锁]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.webwx.ui.WebWXUnlockUI',
          matches: '[text="解锁"]',
          snapshotUrls: 'https://i.gkd.li/i/14490116',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-文档页面-腾讯文档APP弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-付款时自动点击[支付]',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches:
            'ViewGroup + ViewGroup > ViewGroup > [vid="kinda_button_impl_wrapper"][desc="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15144570',
            'https://i.gkd.li/i/15144571',
            'https://i.gkd.li/i/15360745',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-小程序弹窗广告',
      desc: '点击关闭',
      matchTime: 20000,
      actionCd: 300, // 有时候需要点击多次
      actionDelay: 300, // 过早触发有概率无效
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发
          matches:
            '@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13459614',
            'https://i.gkd.li/i/16943989',
            'https://i.gkd.li/i/16920797',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动语音转文字',
      desc: '点击语音旁边的转文字',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: '@[clickable=true] > [text="转文字"]',
          snapshotUrls: 'https://i.gkd.li/i/18135057',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18135054',
        },
      ],
    },
  ],
});
