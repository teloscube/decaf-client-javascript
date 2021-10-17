/**
 * This module provides internal definitions for the remote DECAF API authorization.
 */
/**
 * Available DECAF authentication credentials.
 */
export declare type Credentials = BasicCredentials | KeyCredentials | TokenCredentials;
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
export declare function isBasicCredentials(object: Credentials): object is BasicCredentials;
/**
 * Type predicate function for [[KeyCredentials]] instances.
 *
 * @param object object to check.
 * @return Type predicate marking the object as an instance of [[KeyCredentials]].
 */
export declare function isKeyCredentials(object: Credentials): object is KeyCredentials;
/**
 * Type predicate function for [[TokenCredentials]] instances.
 *
 * @param object object to check.
 * @return Type predicate marking the object as an instance of [[TokenCredentials]].
 */
export declare function isTokenCredentials(object: Credentials): object is TokenCredentials;
/**
 * Builds HTTPP Authorization header for the given [[Credentials]] instance.
 *
 * @param auth Credentials.
 * @return HTTP Authorization header.
 * @throws Error is unknown credentials is provided.
 */
export declare function getAuthorizationHeader(auth: Credentials): {
    Authorization: string;
};
