/**
 * This module provides internal definitions for the remote DECAF Barista API client.
 */

import axios, { AxiosInstance } from 'axios';
import Qs from 'qs';
import { Credentials, getAuthorizationHeader } from './-auth';
import { Remote } from './-commons';

/**
 * Defines the DECAF Barista API client as a type alias to [[AxiosInstance]].
 */
export type BaristaClient = AxiosInstance;

/**
 * Builds a DECAF Barista API client.
 *
 * @param remote DECAF deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[BaristaClient]] instance.
 */
export function buildBaristaClient(remote: Remote, credentials: Credentials): BaristaClient {
  return axios.create({
    baseURL: `${remote}/api`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthorizationHeader(credentials),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paramsSerializer: (params: any) => Qs.stringify(params, { arrayFormat: 'repeat' }),
  });
}
