import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Anecdote from "../../models/Anecdote";
import { log } from "console";
import AnecdoteController from "../../controllers/AnecdoteController";


export default class CreateAnecdoteRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        let {content, title} = <{content : string, title : string}> req.body;
        log(content, title);

        if (typeof content !== "string" || typeof title !== "string") {
            return reply.code(400).send({message: "Invalid parameters"});
        }

        const anecdote = new Anecdote({
            content,
            title
        });

        try {
            await anecdote.save();
            return reply.code(201).send({message: "Anecdote created"});
        } catch (e) {
            return reply.code(500).send({message: "Internal server error"});
        }
  
    }
}