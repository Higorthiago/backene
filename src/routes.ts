import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createCustomenCotroller } from "./controllers/createCustomenCotroller";
import { ListCustomersController } from "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { request } from "http";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions ){

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok:true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createCustomenCotroller().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController ().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController  ().handle(request, reply)
    })
}