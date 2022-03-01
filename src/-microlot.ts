/**
 * This module provides internal definitions for the remote DECAF Microlot API client.
 */

import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import fetch from 'cross-fetch';
import { Credentials, getAuthorizationHeader } from './-auth';
import { Remote } from './-commons';

/**
 * Defines the DECAF Microlot API client as a type alias to [[AxiosInstance]].
 */
export type MicrolotClient = ApolloClient<NormalizedCacheObject>;

/**
 * Builds a DECAF Microrlot API client.
 *
 * @param remote DECAF deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[MicrolotClient]] instance.
 */
export function buildMicrolotClient(remote: Remote, credentials: Credentials): MicrolotClient {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${remote}/apis/microlot/v1/graphql`,
      fetch,
      headers: getAuthorizationHeader(credentials),
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
}
