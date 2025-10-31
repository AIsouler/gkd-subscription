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
          excludeMatches: '[vid="tvTipNum"][text="--"][visibleToUser=true]',
          matches: '@[vid="btnCheckIn"] >2 [text="签到"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23210761',
            'https://i.gkd.li/i/23211622',
          ],
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
          activityIds: [
            '.ui.activity.QDBookDetailActivity',
            '.ui.activity.MainGroupActivity',
          ],
          matches: [
            '[text="允许通知"][visibleToUser=true]',
            '[vid="closeBtn"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22634980',
            'https://i.gkd.li/i/23210768',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: '[vid="imgClose" || vid="btnClose"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23210736',
            'https://i.gkd.li/i/23210763',
            'https://i.gkd.li/i/23249358',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: [
            '[text*="青少年模式"][visibleToUser=true]',
            '@[vid="btnCancel"] >2 [text="我知道了"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23210752',
        },
      ],
    },
  ],
});
