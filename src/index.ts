import { Credentials } from './-auth';
import { BareClient, buildBareClient } from './-bare';
import { BaristaClient, buildBaristaClient } from './-barista';
import { Remote } from './-commons';
import { MicrolotClient, buildMicrolotClient } from './-microlot';

/**
 * Type definition for remote DECAF API clients.
 */
export interface DecafClient {
  bare: BareClient;
  barista: BaristaClient;
  microlot: MicrolotClient;
  credentials: Credentials;
}

/**
 * Builds remote DECAF API clients.
 *
 * @param remote DECAF deployment [[Remote]].
 * @param credentials DECAF authentication credentials.
 */
export function buildDecafClient(remote: Remote, credentials: Credentials): DecafClient {
  return {
    bare: buildBareClient(remote, credentials),
    barista: buildBaristaClient(remote, credentials),
    microlot: buildMicrolotClient(remote, credentials),
    credentials,
  };
}

// Export additional symbols:
export { gql } from '@apollo/client/core';
export * from './-auth';
export { BaristaClient, MicrolotClient, Remote };
