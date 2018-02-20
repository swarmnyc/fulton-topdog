import { entityRouter, EntityRouter } from 'fulton-server';
import { HotdogPostEntity } from '../entities/hotdog-post-entity';

@entityRouter("/api/posts", HotdogPostEntity)
export class HotdogEntityRouter extends EntityRouter<HotdogPostEntity> {
}
