import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
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
          excludeMatches: '[vid="iv_search_back"][visibleToUser=true]',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16401878',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16401899',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          resetMatch: 'app',
          actionDelay: 300,
          activityIds: '.ui.MainActivity',
          matches:
            '@[visibleToUser=true][text="关闭"] <<n [vid="ll_web"][visibleToUser=true] + [vid="shadowLayout"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15413491',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15603266',
            'https://i.gkd.li/i/17516358',
          ],
        },
        {
          key: 1,
          activityIds: '.ui.NewsInfoV8Activity',
          matches: '[vid="iv_dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16972394',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: '[vid="btn_dialog_upgrade_ignore"]',
          snapshotUrls: 'https://i.gkd.li/i/15413494',
        },
      ],
    },
  ],
});
