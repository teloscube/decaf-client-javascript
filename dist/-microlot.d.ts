/**
 * This module provides internal definitions for the remote DECAF Microlot API client.
 */
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Credentials } from './-auth';
import { Remote } from './-commons';
/**
 * Defines the DECAF Microlot API client as a type alias to [[AxiosInstance]].
 */
export declare type MicrolotClient = ApolloClient<NormalizedCacheObject>;
/**
 * Builds a DECAF Microrlot API client.
 *
 * @param remote DECAF deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[MicrolotClient]] instance.
 */
export declare function buildMicrolotClient(remote: Remote, credentials: Credentials): MicrolotClient;
