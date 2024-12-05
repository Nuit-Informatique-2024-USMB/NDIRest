import {Controller, GET, POST} from "fastify-decorators";
import {FastifyReply, FastifyRequest} from "fastify";

import S from "fluent-json-schema";
import OceanCreateRoute from "../routes/oceans/OceanCreateRoute";
import OceanListRoute from "../routes/oceans/OceanListRoute";
import OceanGetRoute from "../routes/oceans/OceanGetRoute";

@Controller("oceans")
export default class OceanController {

    @POST("/", {
        schema: {
            body: S.object()
                .prop('name', S.string().required())
                .prop('position', S.object()
                    .prop('latitude', S.number().required())
                    .prop('longitude', S.number().required())
                )
                .prop('info', S.string().required())
                .prop('QCM', S.array()
                    .items(S.object()
                        .prop('title', S.string().required())
                        .prop('questions', S.array().items(S.string()).required())
                        .prop('answers', S.array().items(S.string()).required())
                        .prop('correctAnswerIndex', S.number().required())
                    )
                )
                .prop('anecdotes', S.array()
                    .items(S.object()
                        .prop('title', S.string().required())
                        .prop('subtitle', S.string())
                        .prop('description', S.string().required())
                        .prop('sources', S.array().items(S.string()).required())
                    )
                )
        }
    })
    public handlerPostOcean = async (request: FastifyRequest, reply: FastifyReply) => await new OceanCreateRoute().run(request, reply);

    @GET("/")
    public handlerGetOceans = async (request: FastifyRequest, reply: FastifyReply) => await new OceanListRoute().run(request, reply);

    @GET("/:id", {
        schema: {
            params: S.object()
                .prop('id', S.string().required())
        }
    })
    public handlerGetOcean = async (request: FastifyRequest, reply: FastifyReply) => await new OceanGetRoute().run(request, reply);


}