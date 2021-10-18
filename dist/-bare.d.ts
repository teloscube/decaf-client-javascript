/**
 * This module provides internal definitions for the remote DECAF bare client.
 */
import { AxiosInstance } from 'axios';
import { Credentials } from './-auth';
import { Remote } from './-commons';
/**
 * Defines the DECAF bare client as a type alias to [[AxiosInstance]].
 */
export declare type BareClient = AxiosInstance;
/**
 * Builds a DECAF bare client.
 *
 * @param remote DECAF bare deployment remote.
 * @param credentials DECAF API authentication credentials.
 * @returns A [[BareClient]] instance.
 */
export declare function buildBareClient(remote: Remote, credentials: Credentials): BareClient;
