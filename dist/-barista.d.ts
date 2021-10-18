/**
 * This module provides internal definitions for the remote DECAF Barista API client.
 */
import { AxiosInstance } from 'axios';
import { Credentials } from './-auth';
import { Remote } from './-commons';
/**
 * Defines the DECAF Barista API client as a type alias to [[AxiosInstance]].
 */
export declare type BaristaClient = AxiosInstance;
/**
 * Builds a DECAF Barista API client.
 *
 * @param remote DECAF deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[BaristaClient]] instance.
 */
export declare function buildBaristaClient(remote: Remote, credentials: Credentials): BaristaClient;
