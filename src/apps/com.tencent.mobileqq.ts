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
      rules: [
        {
          excludeActivityIds: [
            '.activity.ChatActivity', // 在聊天界面禁用
            '.search.activity.UniteSearchActivity', // 在搜索页面禁用
          ],
          excludeMatches: '[vid="root"]', // 在聊天界面禁用，若排除EditText[vid="input"]则滑动消息时会造成误触
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13217807',
            'https://i.gkd.li/i/13856647',
            'https://i.gkd.li/i/13868177',
            'https://i.gkd.li/i/14341023',
            'https://i.gkd.li/i/15334565',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-动态页[好友热播/为你推荐]',
      fastQuery: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        '.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][visibleToUser=true][childCount=0] - [text="好友热播" || text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606',
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] >2 [text="减少好友热播" || text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605',
            'https://i.gkd.li/i/14822576',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-登录授权',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchRoot: true,
          actionMaximum: 3,
          actionCd: 500,
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
            'com.tencent.open.agent.QuickLoginAuthorityActivity',
          ],
          matches: [
            '[text="登录确认" || text$="申请使用"][visibleToUser=true]',
            'Button[text="登录" || text="同意" || text="确认"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20737721',
            'https://i.gkd.li/i/20737651',
            'https://i.gkd.li/i/20737675',
            'https://i.gkd.li/i/20737673',
            'https://i.gkd.li/i/22631619',
          ],
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
            '.mini.appbrand.ui.AppBrandUI',
            '.activity.miniaio.MiniChatActivity',
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
      key: 5,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: [
            '.upgrade.activity.UpgradeActivity',
            '.upgrade.ui.dialog.UpgradeActivity',
          ],
          matches: [
            '[text="立即体验"][visibleToUser=true]',
            '[text="近期不提醒"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19141671',
            'https://i.gkd.li/i/23670528',
          ],
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
          activityIds: '.activity.SplashActivity',
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
      key: 8,
      name: '功能类-自动领红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] < RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][childCount=5][!(getChild(4).text^="已")] + TextView[text="拼手气红包"]',
          snapshotUrls: 'https://i.gkd.li/i/14221309',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18574530',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="拆红包"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14221242',
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
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
          activityIds: '.activity.QQBrowserActivity',
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
      rules: [],
    },
    {
      key: 11,
      name: '分段广告-动态页官方号动态',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] - ViewGroup >2 [desc="官方Qzone"] <<n [vid="root"]',
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
      activityIds: '.activity.SplashActivity',
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
      name: '全屏广告-迷你窝弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: '.profilecard.activity.FriendProfileCardActivity',
          matches: '[text="开启迷你窝"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21750442',
        },
      ],
    },
  ],
});
