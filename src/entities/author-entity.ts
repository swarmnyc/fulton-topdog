import { entity, objectIdColumn, column } from 'fulton-server';


@entity('authors')
export class AuthorEntity {
	@objectIdColumn()
	id: string;

	@column()
	name: string;

	@column({ select: false })
	imageUrl: string;

	@column()
	tagIds: string[];

}
