import { entityRouter, EntityRouter } from 'fulton-server';
import { HotdogPostEntity } from '../entities/hotdog-post-entity';

@entityRouter('/posts', HotdogPostEntity)
export class HotdogEntityRouter extends EntityRouter<HotdogPostEntity> {
}
