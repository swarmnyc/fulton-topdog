import { entity, objectIdColumn, column, manyToOne, manyToMany, relatedTo } from 'fulton-server';
import { TagEntity } from './tag-entity';


@entity('authors')
export class AuthorEntity {
	@objectIdColumn({ type: String })
	id: string;

	@column()
	name: string;

	@column()
	imageUrl: string;

	@relatedTo(TagEntity)
	tags: TagEntity[];
}