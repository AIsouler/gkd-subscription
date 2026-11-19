import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '功能类-WiFi无法联网时自动点击使用数据上网',
      rules: [
        {
          fastQuery: true,
          activityIds: '.wifi.WifiAssistantDialog',
          matches: [
            '[text="当前WLAN无法联网"][visibleToUser=true]',
            '[text="使用数据流量上网"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/35069641',
        },
      ],
    },
  ],
});
