import { Connector, Pagination } from './types';
import { Field } from 'canner-graphql-utils/lib/schema/types';
export default class DataLoaderConnector implements Connector {
    private connector;
    private dataLoaders;
    constructor({ keys, connector }: {
        keys: string[];
        connector: Connector;
    });
    listResolveByUnique({ key, field, schema }: {
        key: string;
        field: {
            [key: string]: any;
        };
        schema: Field;
    }): Promise<any>;
    listResolveQuery({ key, where, order, pagination, schema }: {
        key: string;
        where: any;
        order: any;
        pagination: Pagination;
        schema: Field;
    }): Promise<any>;
    resolveToOne({ from, to, id, schema }: {
        from: string;
        to: string;
        id: string;
        schema: Field;
    }): Promise<any>;
    resolveToMany({ from, to, ids, pagination, schema }: {
        from: string;
        to: string;
        ids: [string];
        pagination: Pagination;
        schema: Field;
    }): Promise<any>;
    mapResolve(key: string, schema: Field): Promise<any>;
    hasNextPage(args: any): Promise<any>;
    mapUpdate(key: string, payload: any, schema: Field): Promise<any>;
    listCreate(key: string, payload: any, schema: Field): Promise<any>;
    listUpdate(key: string, where: any, payload: any, schema: Field): Promise<any>;
    listDelete(key: string, where: any, schema: Field): Promise<any>;
}
