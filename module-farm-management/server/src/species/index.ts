import { typeDef, queryDef, mutationDef, resolver } from './graphql';

export * from './types';
export * from './entities';
export * from './repository';
export const graphql = { typeDef, queryDef, mutationDef, resolver };
