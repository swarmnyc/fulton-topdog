import { MongoEntityService } from 'fulton-server';
import { HotdogPostEntity } from '../entities/hotdog-post-entity';


export class HotdogEntityService extends MongoEntityService<HotdogPostEntity> {


	constructor() {
		super(HotdogPostEntity);
	}
}