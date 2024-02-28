import prismaClient from "../prisma";

class ListCutomersService{
    async execute(){

        const customers = await prismaClient.customer.findMany()

        return customers

    }
}

export { ListCutomersService }