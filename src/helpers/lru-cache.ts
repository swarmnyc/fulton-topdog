export class LruCache<K, V> {


	private values: Map<K, V> = new Map<K, V>();
	private maxEntries: number;

	constructor(maxEntries: number = 20) {
		this.maxEntries = maxEntries;
	}

	public get(key: K): V {
		const hasKey = this.values.has(key);
		let entry: V;
		if ( hasKey ) {
			// peek the entry, re-insert for LRU strategy
			entry = this.values.get(key);
			this.values.delete(key);
			this.values.set(key, entry);
		}

		return entry;
	}

	public set(key: K, value: V) {

		if ( this.values.size >= this.maxEntries ) {
			// least-recently used cache eviction strategy
			const keyToDelete = this.values.keys().next().value;

			this.values.delete(keyToDelete);
		}

		this.values.set(key, value);
	}

	public has(key: K): boolean {
		return this.values.has(key);
	}

	public delete(key: K): boolean {
		return this.values.delete(key);
	}
}