import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.search.activity.SearchResultActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: 'FlattenUIText[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20035670',
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '([text$="广告"][vid="desc"][visibleToUser=true]) || (ImageView[childCount=0] + [text="应用" || text="购物" || text$="游戏" || text="子薇剧场" || text="预约"][visibleToUser=true])',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/21142063',
            'https://i.gkd.li/i/21142589',
            'https://i.gkd.li/i/21142249',
            'https://i.gkd.li/i/21142871',
            'https://i.gkd.li/i/21523849',
            'https://i.gkd.li/i/21725628',
            'https://i.gkd.li/i/21765934',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[text="以后再说"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20061568',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.live.LivePlayActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/21212913',
            'https://i.gkd.li/i/21675219',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-个人主页自动选中作品页面',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.detail.ui.DetailActivity',
            '.main.MainActivity',
            '.profile.ui.UserProfileActivity',
          ],
          matches:
            '[!(desc^="收藏")] - @[desc^="作品"][clickable=true] > ViewGroup[childCount=1] >2 [text^="作品"]',
          snapshotUrls: [
            'https://i.gkd.li/i/21388939',
            'https://i.gkd.li/i/21430232',
            'https://i.gkd.li/i/24549453',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/21388934', // 已选中
            'https://i.gkd.li/i/21441604',
          ],
        },
      ],
    },
  ],
});
