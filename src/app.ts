import { FultonApp, FultonAppOptions } from "fulton-server"

export class TopDogApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void | Promise<void> {
        options.index.message = "Hello World!\n"
    }
}

let app = new TopDogApp();

app.start();