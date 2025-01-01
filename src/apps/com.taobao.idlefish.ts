import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '权限提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.maincontainer.activity.MainActivity',
          matches: ['[text*="开启手机信息权限"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13620277',
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
          activityIds: '.maincontainer.activity.MainActivity',
          matches: ['[text="立即升级"]', '[text="暂不升级"]'],
          snapshotUrls: 'https://i.gkd.li/i/13832272',
        },
      ],
    },
  ],
});
