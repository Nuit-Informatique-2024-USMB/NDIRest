import AbstractRoute from "../../AbstractRoute";
import {FastifyReply, FastifyRequest} from "fastify";
import Anecdote from "../../models/Anecdote";
import { log } from "console";
import AnecdoteController from "../../controllers/AnecdoteController";


import { model, Schema, Types } from 'mongoose';
import Ocean, {IOcean} from "../../models/Ocean";

export default class OceanCreateRoute extends AbstractRoute {

    run = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {

        const ocean = req.body as IOcean;

        const newOcean = new Ocean(ocean);
        try {
            await newOcean.save();
            return reply.code(201).send(newOcean);
        } catch (error) {
            log(error);
            return reply.code(500).send({error: "An error occured"});
        }

    }
}