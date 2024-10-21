const workoutData = {
    title: 'Full Body Workout A',
    notes: 'Felt good, performance increased.',
    date: new Date('2024-10-15'),
    exercises: [
        {
            exerciseId: 93, // (Leg Press)
            notes: '3 sets of 8-12 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 385, reps: 12, rpe: 7.5 },
                { weight: 385, reps: 11, rpe: 8.5 },
                { weight: 385, reps: 10, rpe: 9 },
            ],
        },
        {
            exerciseId: 71, // (Hamstring Curl (Lying))
            notes: '3 sets of 8-15 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 115, reps: 15, rpe: 8 },
                { weight: 115, reps: 11, rpe: 8 },
                { weight: 115, reps: 10, rpe: 10 },
            ],
        },
        {
            exerciseId: 111, // (Overhead Press (Dumbell, Seated))
            notes: '3 sets of 6-10 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 60, reps: 10, rpe: 9 },
                { weight: 60, reps: 7, rpe: 10 },
                { weight: 60, reps: 6, rpe: 9.5 },
            ],
        },
        {
            exerciseId: 83, // (Lat Pulldown (Narrow Grip))
            notes: '3 sets of 8-12 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 165, reps: 11, rpe: 9 },
                { weight: 165, reps: 9, rpe: 9.5 },
                { weight: 165, reps: 9, rpe: 10 },
            ],
        },
        {
            exerciseId: 17, // (Biceps Curl (Bayesian))
            notes: '3 sets of 8-15 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 30, reps: 14, rpe: 9 },
                { weight: 30, reps: 12, rpe: 10 },
                { weight: 30, reps: 10, rpe: 10 },
            ],
        },
        {
            exerciseId: 88, // (Lateral Raise (Cable))
            notes: '3 sets of 10-15 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 15, reps: 15, rpe: 8 },
                { weight: 15, reps: 14, rpe: 9 },
                { weight: 15, reps: 12, rpe: 10 },
            ],
        },
        {
            exerciseId: 178, // (Triceps Extension (Cable, Overhead))
            notes: '3 sets of 8-15 reps',
            weightUnit: 'lbs',
            sets: [
                { weight: 65, reps: 15, rpe: 7.5 },
                { weight: 65, reps: 11, rpe: 10 },
                { weight: 65, reps: 9, rpe: 10 },
            ],
        },
    ],
};

module.exports = workoutData;