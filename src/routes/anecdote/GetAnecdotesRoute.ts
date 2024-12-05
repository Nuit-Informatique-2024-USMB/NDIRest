import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Anecdote from "../../models/Anecdote";
import { log } from "console";


export default class CreateAnecdoteRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        const anecdotes = await Anecdote.find();

        return reply.code(200).send({message : "All anecdotes", data : anecdotes})
    }
}