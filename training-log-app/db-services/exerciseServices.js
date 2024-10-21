import prisma from "./prismaClient";

const getAllExercises = async () => {
    try {
        const exercises = await prisma.exercise.findMany({
             orderBy: {
                name: 'asc'
             }
        });
        return exercises;
    } catch (error) {
        console.log(error);
    }
    finally {
        prisma.$disconnect();
    }
}

export { getAllExercises };