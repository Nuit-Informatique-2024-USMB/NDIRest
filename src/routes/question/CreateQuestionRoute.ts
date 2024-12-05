import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Question from "../../models/Question";
import { log } from "console";


export default class CreateQuestionRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        let {title, answers, goodAnswer}= <{title : string, answers : string[], goodAnswer : number}> req.body;
        log(title, answers, goodAnswer);

        if (typeof title !== "string" || !Array.isArray(answers) || typeof goodAnswer !== "number") {
            return reply.code(400).send({message: "Invalid parameters"});
        }

        if (answers.length < 2) {
            return reply.code(400).send({message: "You need at least 2 answers"});
        }

        if (goodAnswer < 0 || goodAnswer >= answers.length) {
            return reply.code(400).send({message: "The good answer must be between 0 and the number of answers - 1"});
        }

        const question = new Question({
            title,
            answers,
            goodAnswer
        });

        try {
            await question.save();
            return reply.code(201).send({message: "Question created"});
        } catch (e) {
            return reply.code(500).send({message: "Internal server error"});
        }
  
    }
}