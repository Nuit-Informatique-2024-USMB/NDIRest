import {Controller, DELETE, GET, POST} from "fastify-decorators";
import {FastifyReply, FastifyRequest} from "fastify";
import CreateQuestionRoute from "../routes/question/CreateQuestionRoute";

@Controller("/question")
export default class QuestionController {


    @POST("/")
    public handlerGetRoutes = async(req: FastifyRequest, reply: FastifyReply) => await new CreateQuestionRoute().run(req, reply);

}