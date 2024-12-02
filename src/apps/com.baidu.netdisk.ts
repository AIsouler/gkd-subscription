import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.baidu.netdisk.business.guide.dialog.lifeproduct.',
            'com.baidu.netdisk.ui.MainActivity',
            'com.baidu.netdisk.ui.Navigate',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642505',
            'https://i.gkd.li/i/12783106',
            'https://i.gkd.li/i/12923937',
            'https://i.gkd.li/i/13806852',
            'https://i.gkd.li/i/14730106',
            'https://i.gkd.li/i/14822799',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches: ['[vid="view_score_style"]', '[text="以后再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/14317054',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@ImageView[vid="float_btn_close"][visibleToUser=true] < ViewGroup <2 FrameLayout <2 LinearLayout < FrameLayout < LinearLayout < FrameLayout < [vid="content_view"]',
          snapshotUrls: 'https://i.gkd.li/i/14278618',
        },
      ],
    },
  ],
});
