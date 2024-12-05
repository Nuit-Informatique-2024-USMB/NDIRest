import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Question from "../../models/Question";
import { log } from "console";


export default class CreateAnecdoteRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        let {content, title} = <{content : string, title : string}> req.body;

        if (typeof content !== "string" || typeof title !== "string") {
            return reply.code(400).send({message: "Invalid parameters"});
        }

        const question = new Question({
            content,
            title
        });

        try {
            await question.save();
            return reply.code(201).send({message: "Anecdote created"});
        } catch (e) {
            return reply.code(500).send({message: "Internal server error"});
        }
  
    }
}