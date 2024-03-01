<<<<<<< HEAD
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
=======
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e
    })