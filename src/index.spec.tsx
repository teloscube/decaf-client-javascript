import gql from 'graphql-tag';
import {
  BasicCredentials,
  getAuthorizationHeader,
  isBasicCredentials,
  isKeyCredentials,
  isTokenCredentials,
  KeyCredentials,
  TokenCredentials,
} from './-auth';

import { buildDecafClient, DecafClient } from './index';

describe('Credentials', () => {
  let credBasic: BasicCredentials;
  let credKey: KeyCredentials;
  let credToken: TokenCredentials;
  beforeEach(() => {
    credBasic = { username: 'test', password: 'xxx' };
    credKey = { key: 'credKey', secret: 'credSecret' };
    credToken = { token: 'sometoken' };
  });
  test('isBasicCredentials', () => {
    const test = isBasicCredentials(credBasic);
    expect(test).toBeTruthy();
  });
  test('isKeyCredentials', () => {
    const test = isKeyCredentials(credKey);
    expect(test).toBeTruthy();
  });
  test('isTokenCredentials', () => {
    const test = isTokenCredentials(credToken);
    expect(test).toBeTruthy();
  });
  test('getAuthorizationHeader', () => {
    const testBasic = getAuthorizationHeader(credBasic);
    expect(testBasic).toStrictEqual({ Authorization: `Basic dGVzdDp4eHg=` });

    const testKey = getAuthorizationHeader(credKey);
    expect(testKey).toStrictEqual({ Authorization: `Key credKey:credSecret` });

    const testToken = getAuthorizationHeader(credToken);
    expect(testToken).toStrictEqual({ Authorization: `Token sometoken` });
  });
});

describe('Decaf Clients', () => {
  let client: DecafClient;
  const remote = process.env.TESTING_API_URL || '';
  const apiKey = process.env.TESTING_API_KEY || '';
  const apiSecret = process.env.TESTING_API_SECRET || '';

  beforeAll(() => {
    jest.resetModules();
    if (!remote || !apiKey || !apiSecret) {
      throw new Error('Please provide credentials');
    }
    client = buildDecafClient(remote, { key: apiKey, secret: apiSecret });
  });

  test('build a valid and authenticated decaf client', async () => {
    const { status } = await client.barista.head('/me/');
    expect(status).toBe(200);
  });

  test('bare client', async () => {
    const { data } = await client.bare.post('/api/me');
    expect(data.username).toBe(apiKey);
  });

  test('barista client', async () => {
    const { data } = await client.barista.post('/me');
    expect(data.username).toBe(apiKey);
  });
  test('microlot client', async () => {
    const { data } = await client.microlot.query({
      query: gql`
        query {
          portfolio {
            id
          }
        }
      `,
    });
    expect(data.portfolio).toBeTruthy();
  });
});
