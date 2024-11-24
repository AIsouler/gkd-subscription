import { RawApp } from '@gkd-kit/api';

interface RawDeprecatedKeysSetting {
  /**
   * 应用ID
   */
  id: string;

  /**
   * 应用名称
   */
  name: string;

  /**
   * 废弃的key值，不可使用
   */
  deprecatedKeys: number[];
}

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((app) => {
    const deprecatedKeys = appDeprecatedKeysMap.get(app.id);
    if (deprecatedKeys) {
      app.groups.forEach(({ key, name }) => {
        if (deprecatedKeys.includes(key)) {
          console.error({
            configName: app.name,
            appId: app.id,
            groupName: name,
            groupKey: key,
          });
          throw new Error('invalid deprecated group key');
        }
      });
    }
  });
};

const appDeprecatedKeys: RawDeprecatedKeysSetting[] = [];

const map: Map<string, number[]> = new Map();

appDeprecatedKeys.forEach(({ id, deprecatedKeys }) => {
  map.set(id, deprecatedKeys);
});

const appDeprecatedKeysMap = map;
