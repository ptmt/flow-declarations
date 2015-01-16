// Type definitions for Node.js v0.8.8
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v0.8.8 API              *
*                                               *
************************************************/

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeProcess;
declare var global: any;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: () => void , ms: number): any;
declare function clearTimeout(timeoutId: any): void;
declare function setInterval(callback: () => void , ms: number): any;
declare function clearInterval(intervalId: any): void;

declare var require: {
    (id: string): any;
    resolve(): string;
    cache: any;
    extensions: any;
}

declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};
declare var Buffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
}

/************************************************
*                                               *
*                   INTERFACES                  *
*                                               *
************************************************/

declare class EventEmitter {
    addListener(event: string, listener: Function): void;
    on(event: string, listener: Function): void;
    once(event: string, listener: Function): void;
    removeListener(event: string, listener: Function): void;
    removeAllListener(event: string): void;
    setMaxListeners(n: number): void;
    listeners(event: string): Array<Function>;
    emit(event: string, arg1?: any, arg2?: any): void;
}

declare class WritableStream extends EventEmitter {
    writable: boolean;
    write(str: string, encoding?: string, fd?: string): boolean;
    write(buffer: Buffer): boolean;
    end(): void;
    end(str: string, enconding: string): void;
    end(buffer: Buffer): void;
    destroy(): void;
    destroySoon(): void;
}

declare class ReadableStream extends EventEmitter {
    readable: boolean;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    destroy(): void;
    pipe(destination: WritableStream, options?: { end?: boolean; }): void;
}

declare class NodeProcess extends EventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): void;
    env: any;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    getuid(): number;
    setuid(id: number): void;
    version: string;
    versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
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
    memoryUsage(): any;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(): number[];
}

// Buffer class
declare class Buffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
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
    INSPECT_MAX_BYTES: number;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "querystring" {
    declare function stringify(obj: any, sep?: string, eq?: string): string;
    declare function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
    declare function escape(): any;
    declare function unescape(): any;
}

declare module "events" {
    declare class NodeEventEmitter {
        addListener(event: string, listener: Function): void;
        on(event: string, listener: Function): any;
        once(event: string, listener: Function): void;
        removeListener(event: string, listener: Function): void;
        removeAllListener(event: string): void;
        setMaxListeners(n: number): void;
        listeners(event: string): Array<Function>;
        emit(event: string, arg1?: any, arg2?: any): void;
    }

    declare var EventEmitter: NodeEventEmitter;
}

declare module "http" {




    declare class Server extends events$NodeEventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): void;
        listen(path: string, callback?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(cb?: any): void;
        maxHeadersCount: number;
    }
    declare class ServerRequest extends events$NodeEventEmitter, stream$ReadableStream {
        method: string;
        url: string;
        headers: string;
        trailers: string;
        httpVersion: string;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
        connection: net$NodeSocket;
    }
    declare class ServerResponse extends events$NodeEventEmitter, stream$WritableStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

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
        end(data?: any, encoding?: string): void;
    }
    declare class ClientRequest extends events$NodeEventEmitter, stream$WritableStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

        write(chunk: any, encoding?: string): void;
        end(data?: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: Function): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
    }
    declare class ClientResponse extends events$NodeEventEmitter, stream$ReadableStream {
        statusCode: number;
        httpVersion: string;
        headers: any;
        trailers: any;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
    }
    declare class Agent { maxSockets: number; sockets: any; requests: any; }

    declare var STATUS_CODES;
    declare function createServer(requestListener?: (request: ServerRequest, response: ServerResponse) =>void ): Server;
    declare function createClient(port?: number, host?: string): any;
    declare function request(options: any, callback?: Function): ClientRequest;
    declare function get(options: any, callback?: Function): ClientRequest;
    declare var globalAgent: Agent;
}

declare module "cluster" {


    declare class ClusterSettings {
        exec: string;
        args: string[];
        silent: boolean;
    }
    declare class Worker {
        id: string;
        process: child_process$ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        destroy(): void;
        disconnect(): void;
    }


    declare var settings: ClusterSettings;
    declare var isMaster: boolean;
    declare var isWorker: boolean;
    declare function setupMaster(settings?: ClusterSettings): void;
    declare function fork(env?: any): Worker;
    declare function disconnect(callback?: Function): void;
    declare var workers: any;

    // Event emitter
    declare function addListener(event: string, listener: Function): void;
    declare function on(event: string, listener: Function): any;
    declare function once(event: string, listener: Function): void;
    declare function removeListener(event: string, listener: Function): void;
    declare function removeAllListener(event: string): void;
    declare function setMaxListeners(n: number): void;
    declare function listeners(event: string): Array<Function>;
    declare function emit(event: string, arg1?: any, arg2?: any): void;
}

declare module "zlib" {

    declare class ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    declare class Gzip extends stream$ReadWriteStream { }
    declare class Gunzip extends stream$ReadWriteStream { }
    declare class Deflate extends stream$ReadWriteStream { }
    declare class Inflate extends stream$ReadWriteStream { }
    declare class DeflateRaw extends stream$ReadWriteStream { }
    declare class InflateRaw extends stream$ReadWriteStream { }
    declare class Unzip extends stream$ReadWriteStream { }

    declare function createGzip(options: ZlibOptions): Gzip;
    declare function createGunzip(options: ZlibOptions): Gunzip;
    declare function createDeflate(options: ZlibOptions): Deflate;
    declare function createInflate(options: ZlibOptions): Inflate;
    declare function createDeflateRaw(options: ZlibOptions): DeflateRaw;
    declare function createInflateRaw(options: ZlibOptions): InflateRaw;
    declare function createUnzip(options: ZlibOptions): Unzip;

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
    declare function tmpDir(): string;
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

    declare class NodeAgent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    declare var Agent: {
        new (options?: RequestOptions): NodeAgent;
    };
    declare class Server extends tls$Server { }
    declare function createServer(options: ServerOptions, requestListener?: Function): Server;
    declare function request(options: RequestOptions, callback?: (res: events$NodeEventEmitter) =>void ): http$ClientRequest;
    declare function get(options: RequestOptions, callback?: (res: events$NodeEventEmitter) =>void ): http$ClientRequest;
    declare var globalAgent: NodeAgent;
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
    declare var version;
}

declare module "repl" {



    declare class ReplOptions {
        prompt?: string;
        input?: stream$ReadableStream;
        output?: stream$WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    declare function start(options: ReplOptions): events$NodeEventEmitter;
}

declare module "readline" {



    declare class ReadLine extends events$NodeEventEmitter {
        setPrompt(prompt: string, length: number): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: Function): void;
        pause(): void;
        resume(): void;
        close(): void;
        write(data: any, key?: any): void;
    }
    declare class ReadLineOptions {
        input: stream$ReadableStream;
        output: stream$WritableStream;
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



    declare class ChildProcess extends events$NodeEventEmitter {
        stdin: stream$WritableStream;
        stdout: stream$ReadableStream;
        stderr: stream$ReadableStream;
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
    declare function execFile(file: string, args: string[], options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: string;
        killSignal?: string;
    }, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
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
        query: string;
        slashes: boolean;
    }

    declare function parse(urlStr: string, parseQueryString?:any , slashesDenoteHost?: any ): Url;
    declare function format(url: Url): string;
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


    declare class NodeSocket extends stream$ReadWriteStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        end(data?: any, encoding?: string): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        remoteAddress: string;
        remotePort: number;
        bytesRead: number;
        bytesWritten: number;
    }

    declare var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): NodeSocket;
    };

    declare class Server extends NodeSocket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(callback?: Function): void;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    declare function createServer(connectionListener?: (socket: NodeSocket) =>void ): Server;
    declare function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: NodeSocket) =>void ): Server;
    declare function connect(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): void;
    declare function connect(port: number, host?: string, connectionListener?: Function): void;
    declare function connect(path: string, connectionListener?: Function): void;
    declare function createConnection(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): void;
    declare function createConnection(port: number, host?: string, connectionListener?: Function): void;
    declare function createConnection(path: string, connectionListener?: Function): void;
    declare function isIP(input: string): number;
    declare function isIPv4(input: string): boolean;
    declare function isIPv6(input: string): boolean;
}

declare module "dgram" {


    declare function createSocket(type: string, callback?: Function): Socket;

declare     class Socket extends events$NodeEventEmitter {
        send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: Function): void;
        bind(port: number, address?: string): void;
        close(): void;
        address: { address: string; family: string; port: number; };
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

declare     class FSWatcher {
        close(): void;
    }

    declare class ReadStream extends stream$ReadableStream { }
    declare class WriteStream extends stream$WritableStream { }

    declare function rename(oldPath: string, newPath: string, callback?: Function): void;
    declare function renameSync(oldPath: string, newPath: string): void;
    declare function truncate(fd: string, len: number, callback?: Function): void;
    declare function truncateSync(fd: string, len: number): void;
    declare function chown(path: string, uid: number, gid: number, callback?: Function): void;
    declare function chownSync(path: string, uid: number, gid: number): void;
    declare function fchown(fd: string, uid: number, gid: number, callback?: Function): void;
    declare function fchownSync(fd: string, uid: number, gid: number): void;
    declare function lchown(path: string, uid: number, gid: number, callback?: Function): void;
    declare function lchownSync(path: string, uid: number, gid: number): void;
    declare function chmod(path: string, mode: string, callback?: Function): void;
    declare function chmodSync(path: string, mode: string): void;
    declare function fchmod(fd: string, mode: string, callback?: Function): void;
    declare function fchmodSync(fd: string, mode: string): void;
    declare function lchmod(path: string, mode: string, callback?: Function): void;
    declare function lchmodSync(path: string, mode: string): void;
    declare function stat(path: string, callback?: (err: Error, stats: Stats) =>any): Stats;
    declare function lstat(path: string, callback?: (err: Error, stats: Stats) =>any): Stats;
    declare function fstat(fd: string, callback?: (err: Error, stats: Stats) =>any): Stats;
    declare function statSync(path: string): Stats;
    declare function lstatSync(path: string): Stats;
    declare function fstatSync(fd: string): Stats;
    declare function link(srcpath: string, dstpath: string, callback?: Function): void;
    declare function linkSync(srcpath: string, dstpath: string): void;
    declare function symlink(srcpath: string, dstpath: string, type?: string, callback?: Function): void;
    declare function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    declare function readlink(path: string, callback?: (err: Error, linkString: string) =>any): void;
    declare function realpath(path: string, callback?: (err: Error, resolvedPath: string) =>any): void;
    declare function realpath(path: string, cache: string, callback: (err: Error, resolvedPath: string) =>any): void;
    declare function realpathSync(path: string, cache?: string): void;
    declare function unlink(path: string, callback?: Function): void;
    declare function unlinkSync(path: string): void;
    declare function rmdir(path: string, callback?: Function): void;
    declare function rmdirSync(path: string): void;
    declare function mkdir(path: string, mode?: string, callback?: Function): void;
    declare function mkdirSync(path: string, mode?: string): void;
    declare function readdir(path: string, callback?: (err: Error, files: string[]) => void): void;
    declare function readdirSync(path: string): string[];
    declare function close(fd: string, callback?: Function): void;
    declare function closeSync(fd: string): void;
    declare function open(path: string, flags: string, mode?: string, callback?: (err: Error, fd: string) =>any): void;
    declare function openSync(path: string, flags: string, mode?: string): void;
    declare function utimes(path: string, atime: number, mtime: number, callback?: Function): void;
    declare function utimesSync(path: string, atime: number, mtime: number): void;
    declare function futimes(fd: string, atime: number, mtime: number, callback?: Function): void;
    declare function futimesSync(fd: string, atime: number, mtime: number): void;
    declare function fsync(fd: string, callback?: Function): void;
    declare function fsyncSync(fd: string): void;
    declare function write(fd: string, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: Buffer) =>any): void;
    declare function writeSync(fd: string, buffer: Buffer, offset: number, length: number, position: number): void;
    declare function read(fd: string, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: Buffer) => void): void;
    declare function readSync(fd: string, buffer: Buffer, offset: number, length: number, position: number): any[];
    declare function readFile(filename: string, encoding: string, callback: (err: Error, data: string) => void ): void;
    declare function readFile(filename: string, callback: (err: Error, data: Buffer) => void ): void;
    declare function readFileSync(filename: string): Buffer;
    declare function readFileSync(filename: string, encoding: string): string;
    declare function writeFile(filename: string, data: any, callback?: (err: any) => void): void;
    declare function writeFile(filename: string, data: any, encoding?: string, callback?: (err: any) => void): void;
    declare function writeFileSync(filename: string, data: any, encoding?: string): void;
    declare function appendFile(filename: string, data: any, encoding?: string, callback?: Function): void;
    declare function appendFileSync(filename: string, data: any, encoding?: string): void;
    declare function watchFile(filename: string, listener: { curr: Stats; prev: Stats; }): void;
    declare function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: { curr: Stats; prev: Stats; }): void;
    declare function unwatchFile(filename: string, listener?: Stats): void;
    declare function watch(filename: string, options?: { persistent?: boolean; }, listener?: (event: string, filename: string) =>any): FSWatcher;
    declare function exists(path: string, callback?: (exists: boolean) =>void ): void;
    declare function existsSync(path: string): boolean;
    declare function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: number;
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
    declare function resolve(from: string, to: string): string;
    declare function resolve(from: string, from2: string, to: string): string;
    declare function resolve(from: string, from2: string, from3: string, to: string): string;
    declare function resolve(from: string, from2: string, from3: string, from4: string, to: string): string;
    declare function resolve(from: string, from2: string, from3: string, from4: string, from5: string, to: string): string;
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
        socket?: net$NodeSocket;
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
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;

        listen(port: number, host?: string, callback?: Function): void;
        close(): void;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    declare class ClearTextStream extends stream$ReadWriteStream {
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
declare     class Hash {
        update(data: any, input_encoding?: string): void;
        digest(encoding?: string): string;
    }
declare     class Hmac {
        update(data: any): void;
        digest(encoding?: string): void;
    }
    declare function createCipher(algorithm: string, password: any): Cipher;
    declare function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
declare     class Cipher {
        update(data: any, input_encoding?: string, output_encoding?: string): string;
        final(output_encoding?: string): string;
        setAutoPadding(auto_padding: boolean): void;
        createDecipher(algorithm: string, password: any): Decipher;
        createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    }
declare     class Decipher {
        update(data: any, input_encoding?: string, output_encoding?: string): void;
        final(output_encoding?: string): string;
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
    declare function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: string) => any): void;
    declare function randomBytes(size: number, callback?: (err: Error, buf: Buffer) =>void ): void;
}

declare module "stream" {


    declare class WritableStream extends events$NodeEventEmitter {
        writable: boolean;
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;
        end(): void;
        end(str: string, enconding: string): void;
        end(buffer: Buffer): void;
        destroy(): void;
        destroySoon(): void;
    }

    declare class ReadableStream extends events$NodeEventEmitter {
        readable: boolean;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        destroy(): void;
        pipe(destination: WritableStream, options?: { end?: boolean; }): void;
    }

    declare class ReadWriteStream extends ReadableStream, WritableStream { }
}

declare module "util" {
    declare function format(format: any, ...param: any[]): string;
    declare function debug(string: string): void;
    declare function error(...param: any[]): void;
    declare function puts(...param: any[]): void;
    declare function print(...param: any[]): void;
    declare function log(string: string): void;
    declare function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): void;
    declare function isArray(object: any): boolean;
    declare function isRegExp(object: any): boolean;
    declare function isDate(object: any): boolean;
    declare function isError(object: any): boolean;
    declare function inherits(constructor: any, superConstructor: any): void;
}

declare module "assert" {
    declare function internal(booleanValue: boolean, message?: string): void;

        declare function fail(actual: any, expected: any, message: string, operator: string): void;
        declare function assert(value: any, message: string): void;
        declare function ok(value: any, message?: string): void;
        declare function equal(actual: any, expected: any, message?: string): void;
        declare function notEqual(actual: any, expected: any, message?: string): void;
        declare function deepEqual(actual: any, expected: any, message?: string): void;
        declare function notDeepEqual(acutal: any, expected: any, message?: string): void;
        declare function strictEqual(actual: any, expected: any, message?: string): void;
        declare function notStrictEqual(actual: any, expected: any, message?: string): void;
        declare function throws(block: any, error?: any, messsage?: string): void;
        declare function doesNotThrow(block: any, error?: any, messsage?: string): void;
        declare function ifError(value: any): void;

}

declare module "tty" {


    declare function isatty(fd: string): boolean;
    declare class ReadStream extends net$NodeSocket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
    }
    declare class WriteStream extends net$NodeSocket {
        columns: number;
        rows: number;
    }
}

declare module "domain" {


    declare class Domain extends events$NodeEventEmitter { }

    declare function create(): Domain;
    declare function run(fn: Function): void;
    declare function add(emitter: events$NodeEventEmitter): void;
    declare function remove(emitter: events$NodeEventEmitter): void;
    declare function bind(cb: (er: Error, data: any) =>any): any;
    declare function intercept(cb: (data: any) => any): any;
    declare function dispose(): void;
}

    declare class events$NodeEventEmitter {
        addListener(event: string, listener: Function): void;
        on(event: string, listener: Function): any;
        once(event: string, listener: Function): void;
        removeListener(event: string, listener: Function): void;
        removeAllListener(event: string): void;
        setMaxListeners(n: number): void;
        listeners(event: string): Array<Function>;
        emit(event: string, arg1?: any, arg2?: any): void;
    }
declare class stream$ReadableStream extends EventEmitter {
    readable: boolean;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    destroy(): void;
    pipe(destination: WritableStream, options?: { end?: boolean; }): void;
}
    declare class ReadableStream extends events$NodeEventEmitter {
        readable: boolean;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        destroy(): void;
        pipe(destination: WritableStream, options?: { end?: boolean; }): void;
    }
    declare class net$NodeSocket extends stream$ReadWriteStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        end(data?: any, encoding?: string): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        remoteAddress: string;
        remotePort: number;
        bytesRead: number;
        bytesWritten: number;
    }
declare class stream$WritableStream extends EventEmitter {
    writable: boolean;
    write(str: string, encoding?: string, fd?: string): boolean;
    write(buffer: Buffer): boolean;
    end(): void;
    end(str: string, enconding: string): void;
    end(buffer: Buffer): void;
    destroy(): void;
    destroySoon(): void;
}
    declare class WritableStream extends events$NodeEventEmitter {
        writable: boolean;
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;
        end(): void;
        end(str: string, enconding: string): void;
        end(buffer: Buffer): void;
        destroy(): void;
        destroySoon(): void;
    }
    declare class child_process$ChildProcess extends events$NodeEventEmitter {
        stdin: stream$WritableStream;
        stdout: stream$ReadableStream;
        stderr: stream$ReadableStream;
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle: any): void;
        disconnect(): void;
    }
    declare class stream$ReadWriteStream extends ReadableStream, WritableStream { }
    declare class net$Server extends events$NodeEventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): void;
        listen(path: string, callback?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(cb?: any): void;
        maxHeadersCount: number;
    }
    declare class ServerRequest extends events$NodeEventEmitter, stream$ReadableStream {
        method: string;
        url: string;
        headers: string;
        trailers: string;
        httpVersion: string;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
        connection: net$NodeSocket;
    }
    declare class ServerResponse extends events$NodeEventEmitter, stream$WritableStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

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
    declare class Server extends NodeSocket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(callback?: Function): void;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    declare class Server extends net$Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;

        listen(port: number, host?: string, callback?: Function): void;
        close(): void;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }
    declare class http$ClientRequest extends events$NodeEventEmitter, stream$WritableStream {
        // Extended base methods
        write(str: string, encoding?: string, fd?: string): boolean;
        write(buffer: Buffer): boolean;

        write(chunk: any, encoding?: string): void;
        end(data?: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: Function): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
    }
    declare class crypto$Credentials { context?: any; }