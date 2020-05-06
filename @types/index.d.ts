
export type ENV = 'production' | 'stage' | 'development' | 'test';

export interface ApplicationOptions {
    readonly http: HttpServerOptions;
}

export interface HttpServerOptions {
    readonly host: string;
    readonly port: number;
}
