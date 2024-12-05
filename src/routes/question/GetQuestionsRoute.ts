import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Question from "../../models/Question";
import { log } from "console";


export default class GetQuestionsRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {
        
        const questions = await Question.find();

        return reply.code(200).send({message : "All questions", data : questions})

    }
}