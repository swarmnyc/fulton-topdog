import { entity, objectIdColumn, column, manyToOne, manyToMany, relatedTo } from 'fulton-server';
import { TagEntity } from './tag-entity';


@entity('authors')
export class AuthorEntity {
	//TODO: change to @objectIdColumn({ type: "string" }) after fulton-server 0.0.7
	@objectIdColumn()
	id: string;

	@column()
	name: string;

	@column()
	imageUrl: string;

	@relatedTo(TagEntity)
	tags: TagEntity[];
}