import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 1,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.twitter.android:id/app_rating_button_never"]',
          snapshotUrls: 'https://i.gkd.li/i/13774150',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[clickable=true] > [visibleToUser=true][text="Not now"] <<n [vid="half_cover_recycler_view_holder"]',
          snapshotUrls: 'https://i.gkd.li/i/13930126',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动点击翻译',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
          matches: '[vid="translation_link"][text^="翻译"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14189817',
            'https://i.gkd.li/i/14615911',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动点击"显示更多帖子"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.twitter.app.main.MainActivity',
          matches: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
          snapshotUrls: 'https://i.gkd.li/i/14189847',
        },
      ],
    },
  ],
});
