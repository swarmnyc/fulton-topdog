import { EntityService } from 'fulton-server';
import { HotdogPostEntity } from '../entities/hotdog-post-entity';


export class HotdogEntityService extends EntityService<HotdogPostEntity> {
	constructor() {
		super(HotdogPostEntity);
	}
}