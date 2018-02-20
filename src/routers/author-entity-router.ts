import { entityRouter, EntityRouter } from 'fulton-server';
import { AuthorEntity } from '../entities/author-entity';

@entityRouter("/api/authors", AuthorEntity)
export class AuthorEntityRouter extends EntityRouter<AuthorEntity> {
}
