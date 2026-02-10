// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  // 系统自带非系统应用
  // 小米
  'com.miui.huanji', // 小米换机
  'com.miui.weather2', // 天气
  'com.miui.calculator', // 计算器
  'com.android.soundrecorder', // 录音机
  'com.android.email', // 电子邮件
  'com.miui.screenrecorder', // 屏幕录制
  'com.android.deskclock', // 时钟
  'com.miui.newmidrive', // 小米云盘
  'cn.wps.moffice_eng.xiaomi.lite', // 小米文档查看器
  'com.miui.mediaeditor', // 小米相册-编辑
  'com.miui.notes', // 笔记
  'com.miui.cleanmaster', // 垃圾清理
  'com.miui.compass', // 指南针
  'com.duokan.phone.remotecontroller', // 万能遥控
  'com.mfashiongallery.emag', // 小米画报
  'com.android.calendar', // 日历
  'com.xiaomi.smarthome', // 米家
  'com.xiaomi.scanner', // 小爱视觉
  'com.xiaomi.shop', // 小米商城
  'com.mi.earphone', // 小米耳机
  'com.miui.video', // 小米视频
  'com.mi.health', // 小米运动健康
  'com.miui.securitymanager', // 手机管家
  'com.android.providers.downloads.ui', // 下载管理
  'com.miui.gallery', // 小米相册
  'com.miui.themestore', // 小米主题商店

  // 第三方应用
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.twitter.android', // X(推特)
  'com.aistra.hail', // 雹
  'com.heyanle.easybangumi4', // 纯纯看番
  'com.perol.pixez', // PixEz
  'com.perol.play.pixez', // PixEz Google Play版
  'com.magicalstory.videos', // 奇妙影视
  'com.magicalstory.installer', // 奇妙安装程序
  'com.guozhigq.pilipala', // PiliPala
  'com.salt.music', // Salt Player
  'com.xuncorp.qinalt.music', // 青盐云听
  'com.github.wgh136.pica_comic', // Pica Comic
  'com.yenaly.han1meviewer', // Han1meViewer
  'ru.zdevs.zarchiver', // ZArchiver
  'ru.zdevs.zarchiver.pro', // ZArchiver Pro
  'me.zhanghai.android.files', // 质感文件
  'com.xjcheng.musictageditor', // 音乐标签
  'com.lalilu.lmusic', // LMusic
  'com.ktls.fileinfo', // 存储空间清理
  'idm.internet.download.manager', // 1DM
  'idm.internet.download.manager.plus', // 1DM+
  'com.mxtech.videoplayer', // MX播放器
  'com.mxtech.videoplayer.pro', // MX播放器专业版
  'com.github.kr328.clash', // Clash for Android
  'com.x8bit.bitwarden', // Bitwarden
  'org.localsend.localsend_app', // LocalSend
  'moe.shizuku.privileged.api', // Shizuku
  'com.ktls.automation', // 自动点击工具
  'com.deepl.mobiletranslator', // DeepL
  'com.accessibilitymanager', // 无障碍管理器
  'me.tasy5kg.cutegif', // 小萌GIF
  'com.absinthe.libchecker', // LibChecker
  'com.github.metacubex.clash.meta', // Clash Meta for Android
  'io.github.jd1378.otphelper', // 短信验证码自动复制
  'com.valvesoftware.android.steam.community', // Steam
  'io.legado.app.release', // 阅读
  'com.getsurfboard', // Surfboard
  'moe.nb4a', // NekoBox
  'com.v2ray.ang', // v2rayNG
  'com.xiaoyv.bangumi', // Bangumi for Android
  'com.funny.translation', // 译站
  'com.looker.droidify', // Droid-ify
  'app.eleven.com.fastfiletransfer', // 文件闪传
  'com.idaodan.clean.master', // 雪豹速清
  'com.samsung.agc.gcam84', // 相机
  'com.wsw.cospa', // 异次元
  'app.mihon', // Mihon
  'com.rosan.installer.x', // installerX
  'app.rikka.savecopy', // 保存副本
  'com.rosan.dhizuku', // Dhizuku
  'com.rosan.accounts', // Accounts
  'com.dv.adm', // ADM
  'com.assistant.ongoingclear', // 固定通知隐藏
  'org.koitharu.kotatsu', // Kotatsu
  'me.ash.reader', // Read You
  'com.huanchengfly.tieba.post', // 贴吧Lite
  'com.example.c001apk', // c001apk
  'dev.anilbeesetti.nextplayer', // Next Player
  'org.kde.kdeconnect_tp', // KDE Connect
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器
  'com.bilibili.app.in', // bilibili
  'com.alicloud.databox', // 阿里云盘
  'io.nichijou.flutter.mikan', // 蜜柑计划
  'xyz.nextalone.nagram', // Nagram
  'com.google.android.apps.authenticator2', // Authenticator
  'me.jmh.authenticatorpro', // Authenticator Pro
  'com.openai.chatgpt', // ChatGPT
  'com.brouken.player', // Just Player
  'com.android.chrome', // Chrome
  'hello.litiaotiao.app', // 李跳跳
  'com.follow.clash', // FlClash
  'com.google.android.youtube', // YouTube
  'com.xunmeng.pinduoduo', // 拼多多
  'com.one.my_ai', // 艾跳跳
  'com.cnspeedtest.globalspeed', // 全球网测
  'com.github.wgh136.venera', // venera
  'com.hicorenational.antifraud.fork', // 国家反诈中心（伪）
  'com.predidit.kazumi', // Kazumi
  'com.crow.pastemanga', // PasteMangaX
  'com.omarea.vtools', // Scene
  'deltazero.amarok', // Amarok
  'com.sixbugs.bujuan', // BuJuan
  'rikka.appops', // App Ops
  'cn.wps.moffice_eng', // WPS Office
  'main.smart.HY', // 公交e出行
  'com.hpbr.bosszhipin', // BOSS直聘
  'pro.easybox.open', // EasyBox
  'com.music.moment', // 音乐时刻
  'com.quark.browser', // 夸克浏览器 开屏广告误触 https://i.gkd.li/i/18221460
  'com.fongmi.android.tv', // OK影视
  'com.github.tvbox.osc', // TVBox
  'com.junkfood.seal', // Seal
  'com.junkfood.seal.preview', // Seal Preview
  'com.pikcloud.pikpak', // PikPak
  'com.deepseek.chat', // DeepSeek
  'bin.mt.plus', // MT管理器
  'com.yjllq.kito', // 可拓浏览器
  'com.example.piliplus', // PiliPlus
  'tw.nekomimi.nekogram', // Nekogram
  'net.afdian.afdian', // 爱发电
  'com.algermusic.app', // AlgerMusicPlayer
  'com.coolncoolapps.easyvideorecorder', // 背景电影录像机
  'com.termux', // Termux
  'com.didjdk.adbhelper', // 甲壳虫ADB助手
  'com.qingmusic.changqing', // 青听音乐
  'ru.tech.imageresizershrinker', // Image Toolbox
  'com.jiaohua_browser', // JMComic2
  'com.picacomic.fregata', // PicACG
  'com.rosan.installer.x.revived', // installerX Revived
  'com.zhihu.hydrogen.x', // Hydrogen
  'org.videolan.vlc', // VLC
  'cn.cyberIdentity.certification', // 国家网络身份认证
  'com.ifreedomer.flix', // Flix
  'com.bitwarden.authenticator', // Bitwarden Authenticator
  'ai.x.grok', // Grok 全局规则误触 https://i.gkd.li/i/22884434
  'com.huanchengfly.tieba.post.self', // 贴吧Lite
  'com.google.android.googlequicksearchbox', // Google
  'com.google.android.apps.bard', // Gemini
  'com.gtxfury.flyclash.meta', // FlyClash
  'com.appshub.liclash', // LiClash
  'com.android.purebilibili', // BiliPai
  'com.bytedance.android.doubaoime', // 豆包输入法
  'com.ChillyRoom.DungeonShooter', // 元气骑士
  'com.nyapass.loader', // NyaLoader
  'com.appshub.bettbox', // Bettbox
  'com.abdownloadmanager', // ABDM
  'org.easybangumi.next', // 纯纯看番 Next
  'org.xmsleep.app', // XMSleep
  'io.github.stelliberty', // Stelliberty
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([...blackListAppIDs]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.baidu.tieba', // 百度贴吧
  'bin.mt.plus', // MT管理器
  'com.android.bankabc', // 中国农业银行
  'com.autonavi.minimap', // 高德地图
  'com.baidu.netdisk', // 百度网盘
  'com.jingdong.app.mall', // 京东
  'com.max.xiaoheihe', // 小黑盒
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sdu.didi.psnger', // 滴滴出行
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.alibaba.android.rimet', // 钉钉
  'com.taptap', // TapTap
  'com.coolapk.market', // 酷安
  'com.xunlei.downloadprovider', // 迅雷
  'com.taobao.taobao', // 淘宝
  'com.xingin.xhs', // 小红书
  'com.ct.client', // 中国电信
  'me.ele', // 饿了么
  'com.tencent.qqmusic', // QQ音乐
  'com.ss.android.ugc.aweme', // 抖音 全局规则误触 https://i.gkd.li/i/20061572
  'com.ruanmei.ithome', // IT之家
  'com.xiaomi.vipaccount', // 小米社区
  'com.wandoujia.phoenix2', // 豌豆荚
  'com.luna.music', // 汽水音乐
  'com.hnnx.eBank.android',
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.miui.player', // 小米音乐
]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
