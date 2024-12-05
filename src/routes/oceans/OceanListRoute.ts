import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Anecdote from "../../models/Anecdote";
import { log } from "console";
import AnecdoteController from "../../controllers/AnecdoteController";
import {HydratedDocument} from "mongoose";
import Ocean, {IOcean} from "../../models/Ocean";


export default class OceanListRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        const oceans: HydratedDocument<IOcean>[] = await Ocean.find();

        return reply.code(200).send(oceans);

    }
}