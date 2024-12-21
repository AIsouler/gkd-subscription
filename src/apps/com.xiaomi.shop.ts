import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
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
          excludeActivityIds: 'com.xiaomi.shop2.plugin.PluginRootActivity',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18218380',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18218463',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '@ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)] <2 LinearLayout < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649330',
            'https://i.gkd.li/i/14393039',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches:
            '[id="com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15528092',
        },
      ],
    },
  ],
});
