import Fastify, {FastifyInstance} from "fastify";
import {bootstrap} from "fastify-decorators";
import {resolve} from "path";
import Main from "../Main";

interface IWebserver {
    middlewares?: IMiddleware[];
}

interface IMiddleware<T = {}> {
    import: any;
    config?: T;
}

export default class Webserver {

    private readonly server: FastifyInstance;
    private readonly middlewares: IMiddleware[];

    constructor(option?: IWebserver) {
        this.server = Fastify({logger: true, disableRequestLogging: true});

        this.middlewares = [
            {
                import: import("@fastify/cors"),
                config: {
                    origin: "*",
                },
            }, {
                import: import("@fastify/jwt"),
                config: {
                    secret: "ssZQy6xL4QA6k492L3cw7SxgsRP2H6"
                }
            },
            {
                import: import("fastify-bcrypt"),
                config: {
                    saltWorkFactor: 12
                }
            },
            {
                import: import("@fastify/routes")
            },
            ...option?.middlewares ?? []
        ];
    }

    public async start() {

        this.middlewares.forEach((middleware: any) => {
            this.server.register(middleware.import, middleware.config);
        });


        this.server.register(bootstrap, {
            // Specify directory with our controllers
            directory: resolve(__dirname, "../", `controllers`),
            // Specify mask to match only our controllers
            mask: /Controller\./,
        });

        this.server.listen({port: Number(process.env.PORT ?? 80), host: process.env.HOST ?? "0.0.0.0"}, (err, address) => {
            if (err) throw err;
            Main.log().info("The server was successfully started on : " + address);
        });
    }

    public addMiddleware<T = {}>(middleware: IMiddleware): this {
        this.middlewares.push(middleware);
        return this;
    }

    public getServer(): FastifyInstance {
        return this.server;
    }

    public getSocket(): any {
        //@ts-ignore
        return this.server.io;
    }

}
