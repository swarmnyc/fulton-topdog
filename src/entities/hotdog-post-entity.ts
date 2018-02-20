import { AuthorEntity } from './author-entity';
import { entity, objectIdColumn, column, manyToOne, relatedTo } from 'fulton-server';

@entity('hotdogs')
export class HotdogPostEntity {
	@objectIdColumn()
	hotdogId: string;

	@column()
	name: string;

	@column()
	location: number[];

	@column()
	address: string;

	@column()
	review: string;

	@column()
	picture: string;

	@relatedTo(AuthorEntity)
	author: AuthorEntity;

}
