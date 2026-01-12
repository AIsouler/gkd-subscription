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
            'RecyclerView > FrameLayout[id=null][text=null][desc=null][childCount=1] >4 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true][childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/19633571',
            'https://i.gkd.li/i/20074295',
          ],
        },
        {
          key: 2,
          actionDelay: 300,
          position: {
            left: 'width * 0.9',
            top: 'height * 0.5',
          },
          matches:
            'RecyclerView > FrameLayout[id=null][text=null][desc=null][childCount=1] >4 LinearLayout > LinearLayout > @LinearLayout[childCount=2] > LinearLayout[index=1][childCount=0][clickable=false][visibleToUser=false]',
          snapshotUrls: 'https://i.gkd.li/i/22319705',
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1, 2],
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
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
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
        {
          preKeys: [0],
          activityIds: '.plugin.webview.ui.tools.SDKOAuthOtherUI',
          matches: [
            '[text="申请获得"][visibleToUser=true]',
            '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24560465',
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
          activityIds: '.plugin.gallery.ui.AlbumPreviewUI',
          matches:
            '@[desc="未选中,原图,复选框"] < RelativeLayout < RelativeLayout + RelativeLayout > [text="预览"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22528658',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.plugin.gallery.ui.ImagePreviewUI',
          matches:
            '@[desc="未选中,原图,复选框"] < RelativeLayout < RelativeLayout + [text="编辑"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22528661',
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
      key: 8,
      name: '功能类-付款后自动点击[返回商家]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
          matches:
            '@Button[desc="返回商家"][childCount=0][visibleToUser=true] <4 ScrollView < View < View < View < View < View < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23646449',
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
          matches:
            '@[text="解锁"][clickable=true] < LinearLayout -2 [text^="解锁"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23688962',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-付款时自动点击[支付]',
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
        {
          key: 1,
          activityIds: '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
          matches:
            '[desc^="付款方式"] + Button[desc="支付"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23646466',
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
    {
      key: 14,
      name: '功能类-收付款页面点击[我知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches: [
            '[text="收付款"][visibleToUser=true]',
            '@Button[desc="我知道了"][clickable=true] > [text="我知道了"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20709385',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-自动允许打开外部应用',
      desc: '授权应用：Via浏览器',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: [
            '[text="即将离开微信，打开“Via”"][visibleToUser=true]',
            '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22451505',
        },
      ],
    },
  ],
});
