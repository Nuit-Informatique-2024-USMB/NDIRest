import {Controller, DELETE, GET, POST} from "fastify-decorators";
import {FastifyReply, FastifyRequest} from "fastify";
import S from "fluent-json-schema";

@Controller("/")
export default class ServiceController {


    @GET("/")
    public handlerGetServices = async(req: FastifyRequest, reply: FastifyReply) => {
        return reply.send({message: "Hello World"});
    }

}