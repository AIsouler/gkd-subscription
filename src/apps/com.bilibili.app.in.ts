import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '功能类-一键已读确定',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bilibili.bplus.im.communication.HomeCommunicationActivity',
          matches: '[vid="common_dialog_positive_btn"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19243184',
        },
      ],
    },
  ],
});
