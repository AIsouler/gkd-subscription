import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      excludeActivityIds: [
        '.view.search.', // 在搜索页面禁用
        '.view.feed.', // 在动态页面禁用
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          excludeMatches:
            '[id="com.coolapk.market:id/item_view" || vid="card_view"]',
          matches: '[text*="跳过"][text.length<5][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733',
            'https://i.gkd.li/i/13296816',
            'https://i.gkd.li/i/18245546',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.view.main.MainActivity',
          matches: ['[text="立即更新"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/15511206',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.view.feed.FeedDetailActivityV8',
        '.view.main.MainActivity',
        '.view.node.DynamicNodePageActivity',
        '.view.base.SimpleAlphaActivity',
        '.view.search.SuperSearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[vid="close_view"] <<n [vid="coolapk_card_view"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19004644',
            'https://i.gkd.li/i/19004652',
            'https://i.gkd.li/i/19004663',
            'https://i.gkd.li/i/19005176',
            'https://i.gkd.li/i/20776874',
            'https://i.gkd.li/i/21693917',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359',
            'https://i.gkd.li/i/15159886',
            'https://i.gkd.li/i/15587119',
            'https://i.gkd.li/i/20768037',
          ],
        },
        {
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19004649',
            'https://i.gkd.li/i/19643258',
            'https://i.gkd.li/i/19643262',
            'https://i.gkd.li/i/20776872',
            'https://i.gkd.li/i/21693916',
          ],
        },
      ],
    },
  ],
});
