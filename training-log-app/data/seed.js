const exerciseData = require('./exerciseData');
const workoutData = require('./workoutData');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDatabase(exerciseData, workoutData) {

    const { title, notes, date, exercises } = workoutData;

    for (const exercise of exerciseData) {
        await prisma.exercise.create({
            data: {
                name: exercise.name, 
                deleted: false
            }
        });
    }

    await prisma.workout.create({
        data: {
            title,
            notes,
            date,
            deleted: false,
            exercises: {
                create: exercises.map((exercise) => ({
                    exercise: {
                        connect: { id: exercise.exerciseId }, // Connect an existing exercise by ID
                    },
                    notes: exercise.notes,
                    weightUnit: exercise.weightUnit,
                    sets: {
                        create: exercise.sets.map((set) => ({
                            weight: set.weight,
                            reps: set.reps,
                            rpe: set.rpe,
                        })),
                    },
                })),
            },
        },
        include: {
            exercises: {
                include: {
                    exercise: true,
                    sets: true,
                },
            },
        },
    });
}

seedDatabase(exerciseData, workoutData)
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })