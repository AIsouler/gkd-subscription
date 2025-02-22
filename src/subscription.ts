import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 404,
  name: '魔法棒棒糖(/≧▽≦)/',
  version: 0,
  author: 'AIsouler',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://ys.mihoyo.com/',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
