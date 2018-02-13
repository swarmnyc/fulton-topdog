import { AuthorEntity } from './author-entity';
import { entity, objectIdColumn, column, manyToOne } from 'fulton-server';

@entity('hotdogs')
export class HotdogPostEntity {
	@objectIdColumn()
	hotdogId: string;

	@column()
	name: string;

	@column({ select: false })
	location: number[];

	@column()
	address: string;

	@column()
	review: string;

	@column({ select: false })
	picture: string;

	@column()
	authorId: string;

	@manyToOne(type => AuthorEntity, key => 'authorId')
	author: AuthorEntity| string ;
}
