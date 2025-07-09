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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
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
            '([text$="广告"][vid="desc"][visibleToUser=true]) || (ImageView[childCount=0] + [text="应用" || text="购物"][visibleToUser=true])',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/21142063',
            'https://i.gkd.li/i/21142589',
            'https://i.gkd.li/i/21142249',
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
  ],
});
