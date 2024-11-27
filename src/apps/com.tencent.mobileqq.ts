import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity', // 在聊天界面禁用
        'com.tencent.mobileqq.search.activity.UniteSearchActivity', // 在搜索页面禁用
      ],
      rules: [
        {
          excludeMatches: '[vid="root"]', // 在聊天界面禁用，若排除EditText[vid="input"]则滑动消息时会造成误触
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
            'https://i.gkd.li/i/13217807', // 避免在聊天界面误触
            'https://i.gkd.li/i/13856647', // 误触
            'https://i.gkd.li/i/13868177', // 误触
            'https://i.gkd.li/i/14341023', // 误触
            'https://i.gkd.li/i/15334565', // 误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-动态页好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      fastQuery: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: '@Button[clickable=true] <2 * > [text="好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[减少好友热播]',
          matches: '@[clickable=true] >2 [text="减少好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/14822576',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-登录授权',
      desc: '自动点击登录，包括 PC 登录确认、QQ 互联登录确认。',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          name: '点击登录',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches:
            'Button[text*="登录"][clickable=true][visibleToUser=true][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13623520',
            'https://i.gkd.li/i/12789287',
            'https://i.gkd.li/i/13063027',
            'https://i.gkd.li/i/13166314',
          ],
        },
        {
          key: 2,
          name: '点击同意',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14752498',
        },
        {
          preKeys: [2],
          name: '点击确认',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14752519',
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告-QQ小程序开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      priorityTime: 10000,
      rules: [
        {
          activityIds: [
            'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
            'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
          ],
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12877215',
            'https://i.gkd.li/i/12919195',
            'https://i.gkd.li/i/15130235',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-好友动态页面"为你推荐"',
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] <2 * > [text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] <2 * >2 Button[text^="立即"][text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/13386719',
            'https://i.gkd.li/i/13526551',
          ],
        },
        {
          key: 1,
          matches: ['[text="立即升级"]', '[text="稍后处理"]'],
          snapshotUrls: 'https://i.gkd.li/i/14724108',
        },
      ],
    },
    {
      key: 6,
      name: '更新提示-消息页面-顶部',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -2 [text*="新版本" || text*="版本更新"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931212',
            'https://i.gkd.li/i/17529150',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-腾讯文档页面-[使用App]弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/14188983',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-自动领红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            'ImageView < * < FrameLayout +2 * >3 TextView[text*="红包"] - @ViewGroup[childCount=5] > TextView[text!="已领取"] <<n [vid="root"]',
          snapshotUrls: 'https://i.gkd.li/i/14221309',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[desc="拆红包"] - RelativeLayout > [text!=null]',
          snapshotUrls: 'https://i.gkd.li/i/14221242',
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          matches: '@[desc="返回"] + [text="红包记录"]',
          snapshotUrls: 'https://i.gkd.li/i/14221279',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-申请入群后自动点击右上角关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            'TextView[text="入群申请中"][visibleToUser=true]',
            'TextView[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14235163',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matchRoot: true,
          position: {
            left: 'width * 0.9534',
            top: 'width * 0.0805',
          },
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'LinearLayout[childCount=1] > FrameLayout[childCount=1] > FrameLayout[childCount=1] > @View[visibleToUser=true][childCount=0] <<n [vid="root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14732983',
            'https://i.gkd.li/i/15455886',
          ],
        },
        {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@[desc="关闭"][clickable=true][visibleToUser=true] <2 RelativeLayout[childCount=2] >2 TextView[text^="Hi，"]',
          snapshotUrls: 'https://i.gkd.li/i/15272076',
        },
        {
          key: 3,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[childCount=7] > FrameLayout[childCount=2] > @ImageView[childCount=0] <<n [vid="root"]',
          snapshotUrls: 'https://i.gkd.li/i/15388608',
        },
        {
          key: 4,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@[desc="关闭"][clickable=true][visibleToUser=true] <2 RelativeLayout[childCount=2] >2 TextView[text*="限时"][text.length<12]',
          snapshotUrls: 'https://i.gkd.li/i/15514151',
        },
        {
          key: 5,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/16318421',
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-动态页官方号动态',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] <(4,5) * >3 [desc="官方Qzone"] <<n [vid="root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15347669',
            'https://i.gkd.li/i/15600523',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="隐藏此条动态"]',
          snapshotUrls: 'https://i.gkd.li/i/15347668',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/15347667',
        },
      ],
    },
    {
      key: 12,
      name: '分段广告-动态页广告',
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: '@[desc="更多"] <5 * > [desc="广告"] <<n [vid="root"]',
          snapshotUrls: 'https://i.gkd.li/i/15348356',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15348359',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动解锁 Windows QQ',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.tencent.biz.qrcode.activity.UnlockPCQuickVerifyActivity',
          matches: '[text="解锁"]',
          snapshotUrls: 'https://i.gkd.li/i/15360265',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-聊天页面关键词广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
            'com.tencent.mobileqq.activity.ChatActivity',
            'com.tencent.mobileqq.activity.SplashActivity',
          ],
          matches:
            'FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text="跳过" || text="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14183188',
            'https://i.gkd.li/i/16549500',
            'https://i.gkd.li/i/16555184',
          ],
        },
      ],
    },
  ],
});
