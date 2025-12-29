import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { LocalState } from '@apollo/client/local-state';
import fetch from 'cross-fetch';
import { Credentials, getAuthorizationHeader } from './-auth';
import { Remote } from './-commons';

/**
 * Defines the DECAF Microlot API client as a type alias to [[AxiosInstance]].
 */
export type MicrolotClient = ApolloClient;

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

    localState: new LocalState({}),
  });
}
