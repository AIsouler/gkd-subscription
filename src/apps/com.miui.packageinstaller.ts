import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装/更新应用',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '点击[安装]/[更新]',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          excludeMatches:
            '[text="已了解此应用存在风险"][checked=false][visibleToUser=true]',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^="继续" || text^="仍然"][text.length=4][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487278',
            'https://i.gkd.li/i/16487282',
            'https://i.gkd.li/i/17691996',
            'https://i.gkd.li/i/20053957',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25095995',
        },
        {
          preKeys: [0],
          name: '点击[完成]',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          excludeMatches: '[text*="安装失败"]', // 安装失败时排除匹配，此节点比 [text="完成"] 延迟出现，未出现时 visibleToUser=false，因此去掉[visibleToUser=true]限制
          matches: '[text="完成"]',
          snapshotUrls: 'https://i.gkd.li/i/16487274',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20282424',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-放弃开启安全守护',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
      rules: [
        {
          key: 0,
          name: '点击[30天内不再提示]',
          matches: '[text="30天内不再提示"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/16487140',
        },
        {
          preKeys: [0],
          name: '点击[放弃]',
          matches: '[text="放弃"]',
          snapshotUrls: 'https://i.gkd.li/i/16487142',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动允许应用安装软件',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
        'com.miui.packageInstaller.NewInstallerPrepareActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[记住我的选择]',
          matches: [
            '[text^="是否允许"][text*="安装应用"][visibleToUser=true]',
            'CheckBox[text="记住我的选择"][checked=false][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16487366',
            'https://i.gkd.li/i/16487389',
            'https://i.gkd.li/i/18937578',
            'https://i.gkd.li/i/20287209',
          ],
        },
        {
          preKeys: [0],
          name: '点击[允许]',
          matches: '[text="允许"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487365',
            'https://i.gkd.li/i/18937576',
            'https://i.gkd.li/i/20287160',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-关闭备案信息弹窗',
      desc: '点击[继续安装]',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: ['[text$="备案信息"]', '[text="继续安装"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/17908298',
            'https://i.gkd.li/i/20642970',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-无视风险继续安装',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] >2 [text="无视风险继续安装"]',
          snapshotUrls: 'https://i.gkd.li/i/18002566',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="继续"]',
          snapshotUrls: 'https://i.gkd.li/i/18002704',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[clickable=true][desc="更多"] > [vid="action_menu_item_child_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/18002708',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '@[clickable=true] >(1,2) [text="单次安装授权"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18002712',
            'https://i.gkd.li/i/20746863',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动勾选[已了解此应用存在风险]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[text="已了解此应用存在风险"][checked=false][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25095995',
        },
      ],
    },
  ],
});
