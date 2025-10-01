import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: '[vid="ivAdClose"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动签到',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: '[vid="btnCheckIn"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.QDBookDetailActivity',
          matches: [
            '[text="允许通知"][visibleToUser=true]',
            '[vid="closeBtn"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22634980',
        },
      ],
    },
  ],
});
