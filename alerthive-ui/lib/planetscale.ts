import 'server-only';

import { Emergency } from './types/emergency';

import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface Database {
  emergencies: Emergency;
  // https://github.com/nextauthjs/next-auth/issues/4922
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});
