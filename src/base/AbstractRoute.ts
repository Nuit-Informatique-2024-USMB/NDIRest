import {FastifyReply, FastifyRequest} from "fastify";


export abstract class AbstractRoute {

    abstract run(req: FastifyRequest, reply: FastifyReply): Promise<void>;


}
