import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const YOUTH_MODE_ORDER = -9; // 青少年模式

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    priorityTime: 10000,
    disableIfAppGroupMatch: '开屏广告',
    rules: [
      {
        key: 0,
        // 防止误触
        excludeMatches:
          '([text*="搜索" || text^="猜你想" || text^="猜你喜欢" || text="历史记录" || text$="在搜"][text.length>3 && text.length<7][visibleToUser=true]) || ([text="设置" || text="退款详情" || text="Submit"][visibleToUser=true])',
        anyMatches: [
          '[text*="跳过"][text.length<10][visibleToUser=true]',
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text~="(?is).*skip.*")) || (vid~="(?is).*skip.*" && vid!~="(?is).*video.*" && text!="帮助" && text!="取消") || id$="tt_splash_skip_btn" || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]',
        ],
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/17108010', // text!="帮助"
          'https://i.gkd.li/i/18265000', // text!="取消"
          'https://i.gkd.li/i/19580951', // text="退款详情"
          'https://i.gkd.li/i/19952277', // text="Submit"
          'https://i.gkd.li/i/20946730', // text="设置"
          'https://i.gkd.li/i/20949002', // vid!~="(?is).*video.*"
        ],
      },
      {
        key: 1, // 字节SDK
        anyMatches: [
          '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物"][visibleToUser=true]',
          'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
        ],
        snapshotUrls: [
          'https://i.gkd.li/i/19685971', // +(1,2)
          'https://i.gkd.li/i/19701216', // +(1,2)
          'https://i.gkd.li/i/20262130',
          'https://i.gkd.li/i/20768349',
        ],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '青少年模式-全局',
    order: YOUTH_MODE_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '青少年模式',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满" || text*="不再提醒"][text.length<8][childCount=0][visibleToUser=true]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
