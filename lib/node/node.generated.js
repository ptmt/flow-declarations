// Type definitions for Node.js v0.10.1
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/borisyankov/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v0.10.1 API             *
*                                               *
************************************************/

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: any;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

declare var require: {
    (id: string): any;
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
};

declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
};

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (size: Uint8Array): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};


// Buffer class
declare class Buffer extends NodeBuffer {}
declare var Buffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (size: Uint8Array): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare module NodeJS {
    declare class ErrnoException extends Error {
        errno?: any;
        code?: string;
        path?: string;
        syscall?: string;
    }

    declare class EventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    declare class ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    declare class WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    declare class ReadWriteStream extends ReadableStream, WritableStream {}

    declare class Process extends EventEmitter {
        stdout: WritableStream;
        stderr: WritableStream;
        stdin: ReadableStream;
        argv: string[];
        execPath: string;
        abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        env: any;
        exit(code?: number): void;
        getgid(): number;
        setgid(id: number): void;
        setgid(id: string): void;
        getuid(): number;
        setuid(id: number): void;
        setuid(id: string): void;
        version: string;
        versions: {
            http_parser: string;
            node: string;
            v8: string;
            ares: string;
            uv: string;
            zlib: string;
            openssl: string;
        };
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid: number, signal?: string): void;
        pid: number;
        title: string;
        arch: string;
        platform: string;
        memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
        nextTick(callback: Function): void;
        umask(mask?: number): number;
        uptime(): number;
        hrtime(time?:number[]): number[];

        // Worker
        send(message: any, sendHandle?: any): void;
    }

    declare class Timer {
        ref() : void;
        unref() : void;
    }
}

/**
 * @deprecated
 */
declare class NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    toJSON(): any;
    length: number;
    copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): Buffer;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt8(value: number, offset: number, noAssert?: boolean): void;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
    fill(value: any, offset?: number, end?: number): void;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    declare var INSPECT_MAX_BYTES: number;
}

declare module "querystring" {
    declare function stringify(obj: any, sep?: string, eq?: string): string;
    declare function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
    declare function escape(): any;
    declare function unescape(): any;
}

declare module "events" {
    declare class EventEmitter extends NodeJS$EventEmitter {
        static listenerCount(emitter: EventEmitter, event: string): number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
   }
}

declare module "http" {




    declare class Server extends events$EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
        listen(path: string, callback?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(cb?: any): Server;
        address(): { port: number; family: string; address: string; };
        maxHeadersCount: number;
    }
    declare class ServerRequest extends events$EventEmitter, stream$Readable {
        method: string;
        url: string;
        headers: any;
        trailers: string;
        httpVersion: string;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
        connection: net$Socket;
    }
    declare class ServerResponse extends events$EventEmitter, stream$Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        setHeader(name: string, value: string): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    declare class ClientRequest extends events$EventEmitter, stream$Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    declare class ClientResponse extends events$EventEmitter, stream$Readable {
        statusCode: number;
        httpVersion: string;
        headers: any;
        trailers: any;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
    }
    declare class Agent { maxSockets: number; sockets: any; requests: any; }

    declare var STATUS_CODES: {
        [errorCode: number]: string;
        [errorCode: string]: string;
    };
    declare function createServer(requestListener?: (request: ServerRequest, response: ServerResponse) =>void ): Server;
    declare function createClient(port?: number, host?: string): any;
    declare function request(options: any, callback?: Function): ClientRequest;
    declare function get(options: any, callback?: Function): ClientRequest;
    declare var globalAgent: Agent;
}

declare module "cluster" {



    declare class ClusterSettings {
        exec?: string;
        args?: string[];
        silent?: boolean;
    }

    declare class Worker extends events$EventEmitter {
        id: string;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
    }

    declare var settings: ClusterSettings;
    declare var isMaster: boolean;
    declare var isWorker: boolean;
    declare function setupMaster(settings?: ClusterSettings): void;
    declare function fork(env?: any): Worker;
    declare function disconnect(callback?: Function): void;
    declare var worker: Worker;
    declare var workers: Worker[];

    // Event emitter
    declare function addListener(event: string, listener: Function): void;
    declare function on(event: string, listener: Function): any;
    declare function once(event: string, listener: Function): void;
    declare function removeListener(event: string, listener: Function): void;
    declare function removeAllListeners(event?: string): void;
    declare function setMaxListeners(n: number): void;
    declare function listeners(event: string): Function[];
    declare function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {

    declare class ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    declare class Gzip extends stream$Transform { }
    declare class Gunzip extends stream$Transform { }
    declare class Deflate extends stream$Transform { }
    declare class Inflate extends stream$Transform { }
    declare class DeflateRaw extends stream$Transform { }
    declare class InflateRaw extends stream$Transform { }
    declare class Unzip extends stream$Transform { }

    declare function createGzip(options?: ZlibOptions): Gzip;
    declare function createGunzip(options?: ZlibOptions): Gunzip;
    declare function createDeflate(options?: ZlibOptions): Deflate;
    declare function createInflate(options?: ZlibOptions): Inflate;
    declare function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    declare function createInflateRaw(options?: ZlibOptions): InflateRaw;
    declare function createUnzip(options?: ZlibOptions): Unzip;

    declare function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    declare function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;

    // Constants
    declare var Z_NO_FLUSH: number;
    declare var Z_PARTIAL_FLUSH: number;
    declare var Z_SYNC_FLUSH: number;
    declare var Z_FULL_FLUSH: number;
    declare var Z_FINISH: number;
    declare var Z_BLOCK: number;
    declare var Z_TREES: number;
    declare var Z_OK: number;
    declare var Z_STREAM_END: number;
    declare var Z_NEED_DICT: number;
    declare var Z_ERRNO: number;
    declare var Z_STREAM_ERROR: number;
    declare var Z_DATA_ERROR: number;
    declare var Z_MEM_ERROR: number;
    declare var Z_BUF_ERROR: number;
    declare var Z_VERSION_ERROR: number;
    declare var Z_NO_COMPRESSION: number;
    declare var Z_BEST_SPEED: number;
    declare var Z_BEST_COMPRESSION: number;
    declare var Z_DEFAULT_COMPRESSION: number;
    declare var Z_FILTERED: number;
    declare var Z_HUFFMAN_ONLY: number;
    declare var Z_RLE: number;
    declare var Z_FIXED: number;
    declare var Z_DEFAULT_STRATEGY: number;
    declare var Z_BINARY: number;
    declare var Z_TEXT: number;
    declare var Z_ASCII: number;
    declare var Z_UNKNOWN: number;
    declare var Z_DEFLATED: number;
    declare var Z_NULL: number;
}

declare module "os" {
    declare function tmpdir(): string;
    declare function hostname(): string;
    declare function type(): string;
    declare function platform(): string;
    declare function arch(): string;
    declare function release(): string;
    declare function uptime(): number;
    declare function loadavg(): number[];
    declare function totalmem(): number;
    declare function freemem(): number;
    declare function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
    declare function networkInterfaces(): any;
    declare var EOL: string;
}

declare module "https" {




    declare class ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }

    declare class RequestOptions {
        host?: string;
        hostname?: string;
        port?: number;
        path?: string;
        method?: string;
        headers?: any;
        auth?: string;
        agent?: any;
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
    }

    declare class Agent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    declare var Agent: {
        new (options?: RequestOptions): Agent;
    };
    declare class Server extends tls$Server { }
    declare function createServer(options: ServerOptions, requestListener?: Function): Server;
    declare function request(options: RequestOptions, callback?: (res: http$ClientResponse) =>void ): http.ClientRequest;
    declare function get(options: RequestOptions, callback?: (res: http$ClientResponse) =>void ): http.ClientRequest;
    declare var globalAgent: Agent;
}

declare module "punycode" {
    declare function decode(string: string): string;
    declare function encode(string: string): string;
    declare function toUnicode(domain: string): string;
    declare function toASCII(domain: string): string;
    declare var ucs2: ucs2;
declare     class ucs2 {
        decode(string: string): string;
        encode(codePoints: number[]): string;
    }
    declare var version: any;
}

declare module "repl" {



    declare class ReplOptions {
        prompt?: string;
        input?: NodeJS$ReadableStream;
        output?: NodeJS$WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    declare function start(options: ReplOptions): events$EventEmitter;
}

declare module "readline" {



    declare class ReadLine extends events$EventEmitter {
        setPrompt(prompt: string, length: number): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: Function): void;
        pause(): void;
        resume(): void;
        close(): void;
        write(data: any, key?: any): void;
    }
    declare class ReadLineOptions {
        input: NodeJS$ReadableStream;
        output: NodeJS$WritableStream;
        completer?: Function;
        terminal?: boolean;
    }
    declare function createInterface(options: ReadLineOptions): ReadLine;
}

declare module "vm" {
    declare class Context { }
    declare class Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    declare function runInThisContext(code: string, filename?: string): void;
    declare function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    declare function runInContext(code: string, context: Context, filename?: string): void;
    declare function createContext(initSandbox?: Context): Context;
    declare function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {



    declare class ChildProcess extends events$EventEmitter {
        stdin:  stream$Writable;
        stdout: stream$Readable;
        stderr: stream$Readable;
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle: any): void;
        disconnect(): void;
    }

    declare function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    declare function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    declare function exec(command: string, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    declare function execFile(file: string,
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    declare function execFile(file: string, args?: string[],
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    declare function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: string;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    declare function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        encoding?: string;
    }): ChildProcess;
}

declare module "url" {
    declare class Url {
        href: string;
        protocol: string;
        auth: string;
        hostname: string;
        port: string;
        host: string;
        pathname: string;
        search: string;
        query: any; // string | Object
        slashes: boolean;
        hash?: string;
        path?: string;
    }

    declare class UrlOptions {
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any;
        hash?: string;
        path?: string;
    }

    declare function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
    declare function format(url: UrlOptions): string;
    declare function resolve(from: string, to: string): string;
}

declare module "dns" {
    declare function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
    declare function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
    declare function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    declare function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module "net" {


    declare class Socket extends stream$Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remotePort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }

    declare var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): Socket;
    };

    declare class Server extends Socket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    declare function createServer(connectionListener?: (socket: Socket) =>void ): Server;
    declare function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) =>void ): Server;
    declare function connect(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    declare function connect(port: number, host?: string, connectionListener?: Function): Socket;
    declare function connect(path: string, connectionListener?: Function): Socket;
    declare function createConnection(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    declare function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
    declare function createConnection(path: string, connectionListener?: Function): Socket;
    declare function isIP(input: string): number;
    declare function isIPv4(input: string): boolean;
    declare function isIPv6(input: string): boolean;
}

declare module "dgram" {


declare     class RemoteInfo {
        address: string;
        port: number;
        size: number;
    }

declare     class AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    declare function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

declare     class Socket extends events$EventEmitter {
        send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        bind(port: number, address?: string, callback?: () => void): void;
        close(): void;
        address(): AddressInfo;
        setBroadcast(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
    }
}

declare module "fs" {



declare     class Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }

declare     class FSWatcher extends events$EventEmitter {
        close(): void;
    }

    declare class ReadStream extends stream$Readable {
        close(): void;
    }
    declare class WriteStream extends stream$Writable {
        close(): void;
    }

    declare function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function renameSync(oldPath: string, newPath: string): void;
    declare function truncate(path: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function truncate(path: string, len: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function truncateSync(path: string, len?: number): void;
    declare function ftruncate(fd: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function ftruncate(fd: number, len: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function ftruncateSync(fd: number, len?: number): void;
    declare function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function chownSync(path: string, uid: number, gid: number): void;
    declare function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function fchownSync(fd: number, uid: number, gid: number): void;
    declare function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function lchownSync(path: string, uid: number, gid: number): void;
    declare function chmod(path: string, mode: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function chmod(path: string, mode: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function chmodSync(path: string, mode: number): void;
    declare function chmodSync(path: string, mode: string): void;
    declare function fchmod(fd: number, mode: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function fchmod(fd: number, mode: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function fchmodSync(fd: number, mode: number): void;
    declare function fchmodSync(fd: number, mode: string): void;
    declare function lchmod(path: string, mode: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function lchmod(path: string, mode: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function lchmodSync(path: string, mode: number): void;
    declare function lchmodSync(path: string, mode: string): void;
    declare function stat(path: string, callback?: (err: NodeJS$ErrnoException, stats: Stats) => any): void;
    declare function lstat(path: string, callback?: (err: NodeJS$ErrnoException, stats: Stats) => any): void;
    declare function fstat(fd: number, callback?: (err: NodeJS$ErrnoException, stats: Stats) => any): void;
    declare function statSync(path: string): Stats;
    declare function lstatSync(path: string): Stats;
    declare function fstatSync(fd: number): Stats;
    declare function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function linkSync(srcpath: string, dstpath: string): void;
    declare function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    declare function readlink(path: string, callback?: (err: NodeJS$ErrnoException, linkString: string) => any): void;
    declare function readlinkSync(path: string): string;
    declare function realpath(path: string, callback?: (err: NodeJS$ErrnoException, resolvedPath: string) => any): void;
    declare function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS$ErrnoException, resolvedPath: string) =>any): void;
    declare function realpathSync(path: string, cache?: {[path: string]: string}): string;
    declare function unlink(path: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function unlinkSync(path: string): void;
    declare function rmdir(path: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function rmdirSync(path: string): void;
    declare function mkdir(path: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function mkdir(path: string, mode: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function mkdir(path: string, mode: string, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function mkdirSync(path: string, mode?: number): void;
    declare function mkdirSync(path: string, mode?: string): void;
    declare function readdir(path: string, callback?: (err: NodeJS$ErrnoException, files: string[]) => void): void;
    declare function readdirSync(path: string): string[];
    declare function close(fd: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function closeSync(fd: number): void;
    declare function open(path: string, flags: string, callback?: (err: NodeJS$ErrnoException, fd: number) => any): void;
    declare function open(path: string, flags: string, mode: number, callback?: (err: NodeJS$ErrnoException, fd: number) => any): void;
    declare function open(path: string, flags: string, mode: string, callback?: (err: NodeJS$ErrnoException, fd: number) => any): void;
    declare function openSync(path: string, flags: string, mode?: number): number;
    declare function openSync(path: string, flags: string, mode?: string): number;
    declare function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function utimesSync(path: string, atime: number, mtime: number): void;
    declare function utimesSync(path: string, atime: Date, mtime: Date): void;
    declare function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function futimesSync(fd: number, atime: number, mtime: number): void;
    declare function futimesSync(fd: number, atime: Date, mtime: Date): void;
    declare function fsync(fd: number, callback?: (err?: NodeJS$ErrnoException) => void): void;
    declare function fsyncSync(fd: number): void;
    declare function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS$ErrnoException, written: number, buffer: Buffer) => void): void;
    declare function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    declare function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS$ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    declare function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    declare function readFile(filename: string, encoding: string, callback: (err: NodeJS$ErrnoException, data: string) => void): void;
    declare function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS$ErrnoException, data: string) => void): void;
    declare function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS$ErrnoException, data: Buffer) => void): void;
    declare function readFile(filename: string, callback: (err: NodeJS$ErrnoException, data: Buffer) => void ): void;
    declare function readFileSync(filename: string, encoding: string): string;
    declare function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    declare function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    declare function writeFile(filename: string, data: any, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    declare function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    declare function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function appendFile(filename: string, data: any, callback?: (err: NodeJS$ErrnoException) => void): void;
    declare function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    declare function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    declare function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    declare function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    declare function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    declare function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    declare function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    declare function exists(path: string, callback?: (exists: boolean) => void): void;
    declare function existsSync(path: string): boolean;
    declare function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: number;
        bufferSize?: number;
    }): ReadStream;
    declare function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: string;
        bufferSize?: number;
    }): ReadStream;
    declare function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        string?: string;
    }): WriteStream;
}

declare module "path" {
    declare function normalize(p: string): string;
    declare function join(...paths: any[]): string;
    declare function resolve(...pathSegments: any[]): string;
    declare function relative(from: string, to: string): string;
    declare function dirname(p: string): string;
    declare function basename(p: string, ext?: string): string;
    declare function extname(p: string): string;
    declare var sep: string;
}

declare module "string_decoder" {
    declare class NodeStringDecoder {
        write(buffer: Buffer): string;
        detectIncompleteChar(buffer: Buffer): number;
    }
    declare var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "tls" {




declare     var CLIENT_RENEG_LIMIT: number;
declare     var CLIENT_RENEG_WINDOW: number;

    declare class TlsOptions {
        pfx?: any;   //string or buffer
        key?: any;   //string or buffer
        passphrase?: string;
        cert?: any;
        ca?: any;    //string or buffer
        crl?: any;   //string or string array
        ciphers?: string;
        honorCipherOrder?: any;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //array or Buffer;
        SNICallback?: (servername: string) => any;
    }

    declare class ConnectionOptions {
        host?: string;
        port?: number;
        socket?: net$Socket;
        pfx?: any;   //string | Buffer
        key?: any;   //string | Buffer
        passphrase?: string;
        cert?: any;  //string | Buffer
        ca?: any;    //Array of string | Buffer
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //Array of string | Buffer
        servername?: string;
    }

    declare class Server extends net$Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;

        listen(port: number, host?: string, callback?: Function): Server;
        close(): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    declare class ClearTextStream extends stream$Duplex {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }

    declare class SecurePair {
        encrypted: any;
        cleartext: any;
    }

    declare function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
    declare function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
    declare function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    declare function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    declare function createSecurePair(credentials?: crypto$Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
}

declare module "crypto" {
    declare class CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    declare class Credentials { context?: any; }
    declare function createCredentials(details: CredentialDetails): Credentials;
    declare function createHash(algorithm: string): Hash;
    declare function createHmac(algorithm: string, key: string): Hmac;
    declare function createHmac(algorithm: string, key: Buffer): Hmac;
declare     class Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
declare     class Hmac {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    declare function createCipher(algorithm: string, password: any): Cipher;
    declare function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
declare     class Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    declare function createDecipher(algorithm: string, password: any): Decipher;
    declare function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
declare     class Decipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    declare function createSign(algorithm: string): Signer;
declare     class Signer {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    declare function createVerify(algorith: string): Verify;
declare     class Verify {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    declare function createDiffieHellman(prime_length: number): DiffieHellman;
    declare function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
declare     class DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    declare function getDiffieHellman(group_name: string): DiffieHellman;
    declare function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    declare function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number) : Buffer;
    declare function randomBytes(size: number): Buffer;
    declare function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    declare function pseudoRandomBytes(size: number): Buffer;
    declare function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
}

declare module "stream" {


    declare class Stream extends events$EventEmitter {
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
    }

    declare class ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    declare class Readable extends events$EventEmitter , NodeJS$ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions): void;
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: NodeJS$ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    declare class WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
    }

    declare class Writable extends events$EventEmitter , NodeJS$WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions): void;
        _write(data: Buffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    declare class DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    declare class Duplex extends Readable , NodeJS$ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions): void;
        _write(data: Buffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    declare class TransformOptions extends ReadableOptions, WritableOptions {}

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    declare class Transform extends events$EventEmitter , NodeJS$ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions): void;
        _transform(chunk: Buffer, encoding: string, callback: Function): void;
        _transform(chunk: string, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: NodeJS$ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    declare class PassThrough extends Transform {}
}

declare module "util" {
    declare class InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    declare function format(format: any, ...param: any[]): string;
    declare function debug(string: string): void;
    declare function error(...param: any[]): void;
    declare function puts(...param: any[]): void;
    declare function print(...param: any[]): void;
    declare function log(string: string): void;
    declare function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    declare function inspect(object: any, options: InspectOptions): string;
    declare function isArray(object: any): boolean;
    declare function isRegExp(object: any): boolean;
    declare function isDate(object: any): boolean;
    declare function isError(object: any): boolean;
    declare function inherits(constructor: any, superConstructor: any): void;
}

declare module "assert" {
declare     function internal (value: any, message?: string): void;

        declare class AssertionError extends Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {message?: string; actual?: any; expected?: any;
                                  operator?: string; stackStartFunction?: Function}): void;
        }

        declare function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        declare function ok(value: any, message?: string): void;
        declare function equal(actual: any, expected: any, message?: string): void;
        declare function notEqual(actual: any, expected: any, message?: string): void;
        declare function deepEqual(actual: any, expected: any, message?: string): void;
        declare function notDeepEqual(acutal: any, expected: any, message?: string): void;
        declare function strictEqual(actual: any, expected: any, message?: string): void;
        declare function notStrictEqual(actual: any, expected: any, message?: string): void;
        declare var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        declare var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        declare function ifError(value: any): void;



}

declare module "tty" {


    declare function isatty(fd: number): boolean;
    declare class ReadStream extends net$Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
    }
    declare class WriteStream extends net$Socket {
        columns: number;
        rows: number;
    }
}

declare module "domain" {


    declare class Domain extends events$EventEmitter {
        run(fn: Function): void;
        add(emitter: events$EventEmitter): void;
        remove(emitter: events$EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): Domain;
        on(event: string, listener: Function): Domain;
        once(event: string, listener: Function): Domain;
        removeListener(event: string, listener: Function): Domain;
        removeAllListeners(event?: string): Domain;
    }

    declare function create(): Domain;
}

    declare class events$EventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }
    declare class EventEmitter extends NodeJS$EventEmitter {
        static listenerCount(emitter: EventEmitter, event: string): number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
   }
    declare class stream$ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }
    declare class ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }
    declare class Readable extends events$EventEmitter , NodeJS$ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions): void;
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: NodeJS$ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }
    declare class net$Socket extends stream$Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remotePort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    declare class stream$WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }
    declare class WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
    }
    declare class Writable extends events$EventEmitter , NodeJS$WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions): void;
        _write(data: Buffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }
    declare class stream$TransformOptions extends ReadableOptions, WritableOptions {}
    declare class Transform extends events$EventEmitter , NodeJS$ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions): void;
        _transform(chunk: Buffer, encoding: string, callback: Function): void;
        _transform(chunk: string, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: NodeJS$ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }
    declare class net$Server extends events$EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
        listen(path: string, callback?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(cb?: any): Server;
        address(): { port: number; family: string; address: string; };
        maxHeadersCount: number;
    }
    declare class ServerRequest extends events$EventEmitter, stream$Readable {
        method: string;
        url: string;
        headers: any;
        trailers: string;
        httpVersion: string;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
        connection: net$Socket;
    }
    declare class ServerResponse extends events$EventEmitter, stream$Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        setHeader(name: string, value: string): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    declare class ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }
    declare class Server extends tls$Server { }
    declare class Server extends Socket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    declare class Server extends net$Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;

        listen(port: number, host?: string, callback?: Function): Server;
        close(): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }
    declare class http$ClientResponse extends events$EventEmitter, stream$Readable {
        statusCode: number;
        httpVersion: string;
        headers: any;
        trailers: any;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
    }
    declare class NodeJS$ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }
    declare class NodeJS$WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }
    declare class stream$DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }
    declare class Duplex extends Readable , NodeJS$ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions): void;
        _write(data: Buffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }
    declare class NodeJS$ErrnoException extends Error {
        errno?: any;
        code?: string;
        path?: string;
        syscall?: string;
    }
    declare class crypto$Credentials { context?: any; }
    declare class NodeJS$ReadWriteStream extends ReadableStream, WritableStream {}