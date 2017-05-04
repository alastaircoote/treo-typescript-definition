declare module "treo" {

    interface StoreOptions {
        key: string;
    }

    interface IndexOptions {
        unique: boolean;
    }


    interface Schema {
        version(num: number): Schema
        addIndex(indexName: string, key: string, options: IndexOptions): Schema
        addStore(name: string, options: StoreOptions): Schema
    }

    export interface Store {
        get<T>(key: string, cb: (Error, T) => void);
        put(obj: any, cb: (Error) => void);
        del(key: string, cb: (Error) => void);
    }

    export class TreoInstance {
        version: number;
        store(name: String): Store;
        use<T>(extendedType: T): T;
    }


    function Treo(name: string, schame: Schema): TreoInstance

    module Treo {
        function schema(): Schema
    }

    export default Treo;
}