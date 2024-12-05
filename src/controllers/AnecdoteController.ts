import {Controller, DELETE, GET, POST} from "fastify-decorators";
import {FastifyReply, FastifyRequest} from "fastify";
import CreateAnecdoteRoute from "../routes/anecdote/CreateAnecdoteRoute";
import GetAnecdoteRoute from "../routes/anecdote/GetAnecdotesRoute";

@Controller("/anecdote")
export default class AnecdoteController {


    @POST("/")
    public handlerCreateAnecdote = async(req: FastifyRequest, reply: FastifyReply) => await new CreateAnecdoteRoute().run(req, reply);

    @GET("/")
    public handlerGetAnecdotes = async(req: FastifyRequest, reply: FastifyReply) => await new GetAnecdoteRoute().run(req, reply);

}