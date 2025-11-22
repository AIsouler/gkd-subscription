import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            'com.xingin.alioth.search.GlobalSearchActivity',
            'com.xingin.growth.ob.FloatingObPageActivity',
            'com.xingin.matrix.notedetail.NoteDetailActivity',
          ],
          excludeMatches:
            '[text="首页" || text="选择兴趣推荐更精准"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][!(vid="tv_user_name")][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17452158',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/19035037',
            'https://i.gkd.li/i/20585457',
            'https://i.gkd.li/i/21937254',
          ],
        },
        {
          key: 1,
          matches: '[vid="splash_count_down_view"]',
          snapshotUrls: 'https://i.gkd.li/i/17109105',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17108010', // 全局规则在此误触
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          matches: '[vid="mNegativeImageView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18492592',
        },
        {
          key: 1,
          activityIds: '.index.v2.IndexActivityV2',
          matches: '[vid="hintImageView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18492666',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.index.v2.IndexActivityV2',
            'com.xingin.update.UpdateDialogActivity',
          ],
          matches: '@ImageView <2 * + * > [text="NEW"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13246890',
            'https://i.gkd.li/i/13741680',
            'https://i.gkd.li/i/14445193',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: 'com.xingin.lurker.appscore.ui.AppScoreDialogActivity',
          matches: '[text^="您对小红书的评分如何"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15281458',
        },
      ],
    },
  ],
});
