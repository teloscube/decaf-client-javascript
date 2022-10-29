/**
 * This module provides internal definitions for the remote DECAF bare client.
 */

import axios, { AxiosInstance } from 'axios';
import Qs from 'qs';
import { Credentials, getAuthorizationHeader } from './-auth';
import { Remote } from './-commons';

/**
 * Defines the DECAF bare client as a type alias to [[AxiosInstance]].
 */
export type BareClient = AxiosInstance;

/**
 * Builds a DECAF bare client.
 *
 * @param remote DECAF bare deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[BareClient]] instance.
 */
export function buildBareClient(remote: Remote, credentials: Credentials): BareClient {
  return axios.create({
    baseURL: `${remote}`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthorizationHeader(credentials),
    },
    paramsSerializer: {
      serialize: (params) => Qs.stringify(params, { arrayFormat: 'repeat' }),
    },
  });
}
