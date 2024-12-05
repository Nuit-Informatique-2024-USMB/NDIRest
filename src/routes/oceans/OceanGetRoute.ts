import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Anecdote from "../../models/Anecdote";
import { log } from "console";
import AnecdoteController from "../../controllers/AnecdoteController";
import {HydratedDocument} from "mongoose";
import Ocean, {IOcean} from "../../models/Ocean";


export default class OceanGetRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        const {id} = <{id: string}>req.params;

        const ocean: HydratedDocument<IOcean> | null = await Ocean.findById(id);
        if(!ocean) {
            return reply.code(404).send({error: "Ocean not found"});
        }

        return reply.code(200).send(ocean);


    }
}