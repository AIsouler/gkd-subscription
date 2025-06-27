import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter', // clickNode 可能无效
          activityIds: '.ui.FloatWebActivity',
          matches:
            '@Button[text="关闭" || desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="webview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19902846',
            'https://i.gkd.li/i/20946336',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动点击[查看全部升级]',
      desc: '应用升级页面',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.UpdateListActivity',
          matches: '@[clickable=true] > [text^="查看全部升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14782814',
        },
      ],
    },
  ],
});
