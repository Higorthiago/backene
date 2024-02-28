import { FastifyRequest, FastifyReply } from "fastify";
import { CraeteCustomerServices } from "../services/craeteCustomerServices";

class createCustomenCotroller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, email } = request.body as { name: string, email: string}

        const customerService = new CraeteCustomerServices()
        const customer = await customerService.execute({ name, email })

        reply.send(customer)
    }
}


export { createCustomenCotroller }