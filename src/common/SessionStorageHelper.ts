import { requireEnv } from './utility';

// Copied from LocalStorageHelper
// OPT Refactor to share logic

export default class SessionStorageHelper {
  static getItem(key: string, tokenId?: string): string | undefined {
    return sessionStorage.getItem(SessionStorageHelperPrivate.toItemKey(key, tokenId)) ?? undefined;
  }

  static setItem(key: string, value: string, tokenId?: string) {
    sessionStorage.setItem(SessionStorageHelperPrivate.toItemKey(key, tokenId), value);
  }

  static removeItem(key: string, tokenId?: string) {
    sessionStorage.removeItem(SessionStorageHelperPrivate.toItemKey(key, undefined));
    if (tokenId != null) {
      sessionStorage.removeItem(SessionStorageHelperPrivate.toItemKey(key, tokenId));
    }
  }

  static getKeys(tokenId: string | undefined): Array<string> {
    const appPrefix  = `${requireEnv('REACT_APP_NAME')}--`;
    const tokenPrefix = tokenId ? `${SessionStorageHelperPrivate.hashCode(tokenId)}$$` : '';
    const keyPrefix = `${appPrefix}${tokenPrefix}`;
    return Object.keys(sessionStorage)
        .filter(key => key.startsWith(keyPrefix))
        .map(key => key.substring(keyPrefix.length))
        .filter(key => tokenId || !key.includes('$$'));
  }
}

class SessionStorageHelperPrivate {
  static toItemKey(key: string, tokenId?: string) {
    const appPrefix  = `${requireEnv('REACT_APP_NAME')}--`;
    const tokenPrefix = tokenId ? `${SessionStorageHelperPrivate.hashCode(tokenId)}$$` : '';
    return `${appPrefix}${tokenPrefix}${key}`;
  }

  static hashCode(str: string): string {
    // Code by Barak (https://stackoverflow.com/a/8831937).

    let hash = 0;
    for (let i = 0; i < str.length; ++i) {
      const char = str.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      hash = ((hash << 5) - hash) + char;
      // eslint-disable-next-line no-bitwise
      hash &= hash;
    }

    return hash.toString();
  }
}
