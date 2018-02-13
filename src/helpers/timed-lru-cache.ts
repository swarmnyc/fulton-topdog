import { LruCache } from './lru-cache';

export class TimedLruCache<K, V> {

	private lruCache: LruCache<K, V>;
	private expiresAt: Map<K, Date> = new Map();

	private expiresInSeconds: number;

	constructor(size: number, expiresInSeconds: number) {
		this.expiresInSeconds = expiresInSeconds;
		this.lruCache = new LruCache(size);
	}

	// TODO Consider Adding to mee the Map Interface
	public clear(): void {}


	public delete(key: K): boolean {
		this.expiresAt.delete(key);
		return this.lruCache.delete(key);
	}

	// TODO Consider Adding to mee the Map Interface
	// public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
	// }

	public get(key: K): V | undefined {
		if ( this.has(key) ) {
			return this.lruCache.get(key);
		}
		else {
			// Remove from cache
			this.delete(key);
		}
		// Return undefined
		return;
	}

	public has(key: K): boolean {
		if ( this.expiresAt.has(key) ) {
			const expiresAt = this.expiresAt.get(key).getTime();
			const now = Date.now();
			if ( now < expiresAt ) {
				return this.lruCache.has(key);
			}
		}
		this.delete(key);
		return false;
	}

	public set(key: K, value: V): this {
		const expiresAt = new Date(Date.now() + this.expiresInSeconds * 1000);
		this.expiresAt.set(key, expiresAt);
		this.lruCache.set(key, value);
		return this;
	}

}

