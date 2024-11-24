import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 1,
      name: '分段广告-导出界面底部广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          key: 0,
          name: '点击[关闭]',
          matches:
            'LynxAdComponentView < * > @FlattenUIImage <<n [vid="exportAdContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14648627',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[不感兴趣]',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14648626',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.vega.main.MainActivity',
          matches: ['[text*="开启通知"]', '[vid="close"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/15046675',
            'https://i.gkd.li/i/15046684',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.vega.main.TransLynxActivity',
          matches: [
            'FlattenUIText[text="剪映纪念日"]',
            'LynxFlattenUI[text="CloseBtn"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15046676',
        },
      ],
    },
  ],
});
