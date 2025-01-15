import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          position: {
            left: 'width * 0.8657',
            top: 'width * 0.1333',
          },
          matches: '[vid="ad_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18423724',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: [
            '[text^="喜欢豆瓣吗"][visibleToUser=true]',
            '[text="下次再说"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18424257',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.activity.SplashActivity',
            '.subject.structure.activity.MovieActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches:
            '[vid="ad_header_new"] > [vid="menu_item"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424402',
            'https://i.gkd.li/i/18424418',
            'https://i.gkd.li/i/18424924',
          ],
        },
        {
          key: 2,
          activityIds: [
            '.group.activity.GroupDetailActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches:
            '[vid="ad_not_interest" || vid="ad_tag" || vid="group_ad_not_interest"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424568',
            'https://i.gkd.li/i/18424574',
            'https://i.gkd.li/i/18424681',
            'https://i.gkd.li/i/18424818',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18422533',
        },
        {
          key: 3,
          actionMaximum: 1,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true][text=""] < View[childCount=1] -2 View >2 [childCount=0][text="广告"] <<n [vid="structure_header_container"]',
          snapshotUrls: 'https://i.gkd.li/i/18424747',
        },
        {
          preKeys: [1, 2, 3],
          activityIds: [
            '.activity.SplashActivity',
            '.subject.structure.activity.MovieActivity',
            '.group.activity.GroupDetailActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424404',
            'https://i.gkd.li/i/18424419',
            'https://i.gkd.li/i/18424568',
            'https://i.gkd.li/i/18424674',
            'https://i.gkd.li/i/18424711',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18424415',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"]',
          exampleUrls: 'https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77',
          snapshotUrls: 'https://i.gkd.li/i/18424859',
        },
      ],
    },
    {
      key: 5,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.activity.BetaApkDialogActivity',
            '.activity.SplashActivity',
          ],
          matches: [
            '[text="新版试用邀请"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13228832',
            'https://i.gkd.li/i/13659160',
          ],
        },
      ],
    },
  ],
});
