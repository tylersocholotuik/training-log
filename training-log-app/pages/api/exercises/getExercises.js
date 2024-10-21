import { getAllExercises } from '@/db-services/exerciseServices';

export default async function handler(req, res) {
  try {
    const exercises = await getAllExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load exercises' });
  }
}
