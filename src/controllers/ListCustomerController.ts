import { FastifyRequest, FastifyReply } from "fastify";
import { ListCutomersService, } from "../services/ListCutomersService";


class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCutomersService = new ListCutomersService();

        const customers = await listCutomersService.execute();

        reply.send(customers)
    }
}

export { ListCustomersController}