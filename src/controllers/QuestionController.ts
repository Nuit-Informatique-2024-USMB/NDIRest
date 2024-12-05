import {Controller, DELETE, GET, POST} from "fastify-decorators";
import {FastifyReply, FastifyRequest} from "fastify";
import CreateQuestionRoute from "../routes/question/CreateQuestionRoute";
import GetQuestionsRoute from "../routes/question/GetQuestionsRoute";

@Controller("/question")
export default class QuestionController {


    @POST("/")
    public handlerCreateQuestion = async(req: FastifyRequest, reply: FastifyReply) => await new CreateQuestionRoute().run(req, reply);

    @GET("/")
    public handlerGetQuestions = async(req: FastifyRequest, reply: FastifyReply) => await new GetQuestionsRoute().run(req, reply);

}