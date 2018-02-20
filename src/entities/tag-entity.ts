import { entity, objectIdColumn, column } from 'fulton-server';


@entity('tags')
export class TagEntity {
	@objectIdColumn()
	id: string;

	@column()
	name: string;

	@column()
	type: string;
}
