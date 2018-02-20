import { entityRouter, EntityRouter } from 'fulton-server';
import { TagEntity } from '../entities/tag-entity';

@entityRouter("/api/tags", TagEntity)
export class TagEntityRouter extends EntityRouter<TagEntity> {
}
