import prisma from "./prismaClient";

const getWorkoutById = async (workoutId) => {
    try {
        const workouts = await prisma.workout.findUnique({
            where : {
                id : workoutId
            },
            include : {
                exercises : {
                    include : {
                        sets : true,
                        exercise : true
                    }
                }
            }   
        });
        return workouts;
    } catch (error) {
        console.log(error);
    }
    finally {
        prisma.$disconnect();
    }
}

export { getWorkoutById };