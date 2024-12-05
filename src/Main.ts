import 'reflect-metadata';
import { ILogObj, Logger } from "tslog";
import MongoManager from "./base/MongoManager";
import Webserver from "./base/Webserver";

class Main {

    private readonly webserver: Webserver;
    private readonly mongoManager: MongoManager;
    private readonly logger: Logger<ILogObj>;


    constructor() {
        this.webserver = new Webserver({
            middlewares: [
                {
                    import: import("@fastify/multipart"),
                    config: {
                        attachFieldsToBody: true,
                        throwFileSizeLimit: true,
                        limits: {
                            files: 1,
                            fileSize: 1000000,
                        },
                    }
                }
            ]
        });
        this.mongoManager = new MongoManager()

        type LogObj = {
            // vos propriétés de log personnalisées si nécessaire
        };

        // Utilisez le type générique
        this.logger = new Logger();
    }

    public async start() {
        await this.webserver.start();
        await this.mongoManager.connect();
    }

    public getWebServer(): Webserver {
        return this.webserver;
    }

    public mongo(): MongoManager {
        return this.mongoManager;
    }

    public log(): Logger<ILogObj> {
        return this.logger;
    }

}

export default new Main();
