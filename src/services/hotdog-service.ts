import {
	EntityService, IEntityService, inject, OperationOneResult, OperationResult, OperationStatus,
	QueryParams,
	Service
} from 'fulton-server';
import { MongoRepository } from 'typeorm';
import { HotdogPostEntity } from '../entities/hotdog-post-entity';
import { HotdogEntityService } from '../entity-services/hotdog-entity-service';
import { TimedLruCache } from '../helpers/timed-lru-cache';


export class HotdogService extends Service implements IEntityService<HotdogPostEntity> {

	findById(id: any, QueryParams?: QueryParams): Promise<OperationOneResult<HotdogPostEntity>> {
		throw new Error("Method not implemented.");
	}
	
	userCache: TimedLruCache<string, HotdogPostEntity[]>;

	constructor(private hotdogEntityService: HotdogEntityService) {
		super();
		this.userCache = new TimedLruCache(100, 60 * 60 * 24); // 1 Day
	}

	async find(queryParams: QueryParams): Promise<OperationResult<HotdogPostEntity>> {
		await this.populateUserCache();

		return { data: this.userCache.get(this.app.userService.currentUser.id) };
	}


	async findOne(queryParams: QueryParams): Promise<OperationOneResult<HotdogPostEntity>> {
		await this.populateUserCache();

		return {
			data: this.userCache.get(this.app.userService.currentUser.id).find(
				value => value.hotdogId == queryParams.filter.hotdogId)
		};
	}

	create(entity: HotdogPostEntity): Promise<OperationOneResult<HotdogPostEntity>> {
		return undefined;
	}

	update(id: string, entity: HotdogPostEntity): Promise<OperationStatus> {
		return undefined;
	}

	delete(id: string): Promise<OperationStatus> {
		return undefined;
	}

	private async populateUserCache() {
		let userId = this.app.userService.currentUser.id;
		if ( !this.userCache.has(userId) ) {
			let result = await this.hotdogEntityService.find({});
			this.userCache.set(userId, result.data);
		}
	}


}