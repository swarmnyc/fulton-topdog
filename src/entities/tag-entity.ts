import { entity, objectIdColumn, column } from 'fulton-server';


@entity('tags')
export class TagEntity {
	//TODO: change to @objectIdColumn({ type: "string" }) after fulton-server 0.0.7
	@objectIdColumn()
	id: string;

	@column()
	name: string;

	@column()
	type: string;
}
