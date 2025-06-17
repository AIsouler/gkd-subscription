import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务',
  groups: [
    {
      key: 1,
      name: '功能类-USB安装时自动继续安装',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/i/13269875',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-电量已低于20%',
      desc: '点击[知道了]',
      rules: [
        {
          fastQuery: true,
          matches: ['[text="省电模式"]', '[text="知道了"]'],
          snapshotUrls: 'https://i.gkd.li/i/14468423',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-高敏感权限自动确定',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]',
            '@[vid="check_box"][checked=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14965657',
            'https://i.gkd.li/i/15242826',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14965656',
            'https://i.gkd.li/i/15242825',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动允许启动应用',
      desc: '授权应用: InstallerX',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.miui.wakepath.ui.ConfirmStartActivity',
          matches: ['[text*="InstallerX"][text*="想要打开"]', '[text$="允许"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/15263088',
            'https://i.gkd.li/i/20748624',
            'https://i.gkd.li/i/20748626',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-应用信息页-自启动提示',
      desc: '点击[知道了]/[关闭]',
      fastQuery: true,
      activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: '[text^="开启自启动"]',
          snapshotUrls: 'https://i.gkd.li/i/15524706',
        },
        {
          key: 1,
          matches: ['[text^="关闭自启动后将导致"]', '[text="关闭"]'],
          snapshotUrls: 'https://i.gkd.li/i/15531768',
        },
      ],
    },
  ],
});
