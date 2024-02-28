import prismaClient from "../prisma";

interface CreateCustomerprops{
    name: string;
    email: string;
}

class CraeteCustomerServices{
    async execute({ name, email}:CreateCustomerprops ){
        
        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CraeteCustomerServices}