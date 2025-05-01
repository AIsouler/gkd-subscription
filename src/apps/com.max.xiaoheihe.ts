import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    {
      key: 1,
      name: '功能类-签到成功弹窗',
      desc: '返回关闭弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[text*="签到成功"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421535',
            'https://i.gkd.li/i/15048252',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.module.bbs.post.ui.activitys.PicturePostPageActivity',
            '.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
          ],
          matches: '[text^="查看原图"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19996647',
            'https://i.gkd.li/i/19996671',
          ],
        },
      ],
    },
  ],
});
