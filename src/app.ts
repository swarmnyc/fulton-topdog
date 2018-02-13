import { FultonApp, FultonAppOptions } from "fulton-server"
import { AuthorEntity } from './entities/author-entity';
import { HotdogPostEntity } from './entities/hotdog-post-entity';
import { HotdogEntityService } from './entity-services/hotdog-entity-service';
import { topdogAuthMiddleware } from './middleware/auth-middleware';
import { HotdogEntityRouter } from './routers/hotdog-entity-router';

export class TopDogApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void | Promise<void> {
        options.index.message = "Hello World!\n"
		options.entities = [HotdogPostEntity, AuthorEntity];
		options.routers  = [HotdogEntityRouter];
		options.middlewares = [topdogAuthMiddleware];
        options.services = [HotdogEntityService];
        options.docs.enabled = true;

		options.databases.set('default', {
			type: 'mongodb',
			url: 'mongodb://localhost:27017/topdogs'
        });
    }
}

let app = new TopDogApp();

app.start();