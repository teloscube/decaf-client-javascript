/**
 * This module provides internal definitions for the remote DECAF API authorization.
 */

/**
 * Available DECAF authentication credentials.
 */
export type Credentials = BasicCredentials | KeyCredentials | TokenCredentials;

/**
 * DECAF "HTTP Basic Authentication" credentials.
 */
export interface BasicCredentials {
  username: string;
  password: string;
}

/**
 * DECAF "Key Authentication" credentials.
 */
export interface KeyCredentials {
  key: string;
  secret: string;
}

/**
 * DECAF "Token Authentication" credentials.
 */
export interface TokenCredentials {
  token: string;
}

/**
 * Type predicate function for [[BasicCredentials]] instances.
 *
 * @param object object to check.
 * @return Type predicate marking the object as an instance of [[BasicCredentials]].
 */
export function isBasicCredentials(object: Credentials): object is BasicCredentials {
  return 'username' in object && 'password' in object;
}

/**
 * Type predicate function for [[KeyCredentials]] instances.
 *
 * @param object object to check.
 * @return Type predicate marking the object as an instance of [[KeyCredentials]].
 */
export function isKeyCredentials(object: Credentials): object is KeyCredentials {
  return 'key' in object && 'secret' in object;
}

/**
 * Type predicate function for [[TokenCredentials]] instances.
 *
 * @param object object to check.
 * @return Type predicate marking the object as an instance of [[TokenCredentials]].
 */
export function isTokenCredentials(object: Credentials): object is TokenCredentials {
  return 'token' in object;
}

/**
 * Builds HTTPP Authorization header for the given [[Credentials]] instance.
 *
 * @param auth Credentials.
 * @return HTTP Authorization header.
 * @throws Error is unknown credentials is provided.
 */
export function getAuthorizationHeader(auth: Credentials): { Authorization: string } {
  if (isTokenCredentials(auth)) {
    return { Authorization: `Token ${auth.token}` };
  } else if (isKeyCredentials(auth)) {
    return { Authorization: `Key ${auth.key}:${auth.secret}` };
  } else if (isBasicCredentials(auth)) {
    if (typeof Buffer === 'undefined') {
      throw Error('Buffer is undefined. Are you in node environment?');
    }
    return { Authorization: `Basic ${Buffer.from(auth.username + ':' + auth.password).toString('base64')}` };
  }
  throw new Error('Unkown DECAF API credentials type');
}
