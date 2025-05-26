import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.search.SearchActivity',
          activityIds: 'com.xiaomi.mi.launch.process.OpenScreenActivity',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20282479',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20282598',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      forcedTime: 10000,
      rules: [
        {
          activityIds: '.ui.home.page.HomeFrameActivity',
          matches: [
            '[vid="single_banner"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15173207',
        },
      ],
    },
  ],
});
