import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 1,
      name: '功能类-关闭广告的声音',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="开启声音"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20979049',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20979052', // 关闭声音后
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.luna.biz.main.main.MainActivity',
          matches: '[text="稍后再说"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21164341',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-全自动看广告获取听歌时长',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionDelay: 15000,
          position: {
            left: 'width * 7.45',
            top: 'height * 0.5',
          },
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@FlattenUIText[text="广告"] + [text$="声音"] + [text="反馈"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24521423',
            'https://i.gkd.li/i/24521440',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          matches: '[visibleToUser=true][text="奖励已领取"]',
          snapshotUrls: 'https://i.gkd.li/i/24522627',
        },
        {
          preKeys: [0, 1],
          fastQuery: true,
          actionDelay: 1000,
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
          ],
          matches:
            '[text="领取奖励" || text^="再看一个" || text="继续观看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15140816',
            'https://i.gkd.li/i/24521416',
            'https://i.gkd.li/i/24521446',
            'https://i.gkd.li/i/24521516',
          ],
        },
        {
          key: 99,
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@[clickable=true][width<120 && height<120] + LinearLayout > [text="当前无新视频"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24522244',
        },
      ],
    },
  ],
});
