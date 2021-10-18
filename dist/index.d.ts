import { Credentials } from './-auth';
import { BareClient } from './-bare';
import { BaristaClient } from './-barista';
import { Remote } from './-commons';
import { MicrolotClient } from './-microlot';
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
export declare function buildDecafClient(remote: Remote, credentials: Credentials): DecafClient;
export { BasicCredentials, KeyCredentials, TokenCredentials } from './-auth';
export { Remote, Credentials, BaristaClient, MicrolotClient };
