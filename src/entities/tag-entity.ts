import { entity, objectIdColumn, column } from 'fulton-server';


@entity('tags')
export class TagEntity {
	@objectIdColumn({ type: String })
	id: string;

	@column()
	name: string;

	@column()
	type: string;
}
