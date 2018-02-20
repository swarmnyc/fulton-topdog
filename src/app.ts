import { FultonApp, FultonAppOptions } from "fulton-server"
import { AuthorEntity } from './entities/author-entity';
import { HotdogPostEntity } from './entities/hotdog-post-entity';
import { HotdogEntityService } from './entity-services/hotdog-entity-service';
import { topdogAuthMiddleware } from './middleware/auth-middleware';
import { HotdogEntityRouter } from './routers/hotdog-entity-router';
import { AuthorEntityRouter } from "./routers/author-entity-router";
import { TagEntityRouter } from "./routers/tag-entity-router";
import { TagEntity } from "./entities/tag-entity";

export class TopDogApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void | Promise<void> {
        options.index.message = "<h1>Topdog API Server</h1><p>You're a founder of hotdogr, a mobile app for the best hot dogs on the planet. Users post photos and tag locations of their favorite dogs.Here you can see the latest dogs posted by your users.</p>"
		options.entities = [HotdogPostEntity, AuthorEntity, TagEntity];
		options.routers  = [HotdogEntityRouter, AuthorEntityRouter, TagEntityRouter];
		options.middlewares = [topdogAuthMiddleware];
        options.services = [HotdogEntityService];
        options.formatter.jsonApi = true;
        options.cors.enabled = true;
        options.docs.enabled = true;

		options.databases.set('default', {
			type: 'mongodb',
			url: 'mongodb://localhost:27017/topdogs'
        });
    }
}

let app = new TopDogApp();

app.start();