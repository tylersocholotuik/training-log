import { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getAllExercises } from '@/db-services/exerciseServices';

export default function Exercises() {

  const [exerciseData, setExerciseData] = useState(null);
  const [exerciseValue, setExerciseValue] = useState(null);
  const [exerciseSelection, setExceriseSelection] = useState('');

  const fetchExercises = async () => {
    const response = await fetch('/api/exercises/getExercises');
    const exercises = await response.json();
    setExerciseData(exercises);
  };

  // Fetch exercises when the component mounts
  useEffect(() => {
    fetchExercises();
  }, []);

  if (!exerciseData) {
    return <div>...Loading</div>
  }

  const options = exerciseData.map((exercise) => {
    const firstLetter = exercise.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...exercise,
    };
  });

  return (
    <>
      <main>
        <Autocomplete
          value={exerciseValue}
          onChange={(event, newValue) => {
            setExerciseValue(newValue);
          }}
          inputValue={exerciseSelection}
          onInputChange={(event, newInputValue) => {
            setExceriseSelection(newInputValue);
          }} 
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(exercise) => exercise.firstLetter}
          getOptionLabel={(exercise) => exercise.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Select Exercise" />}
        />
        <div>{`exerciseValue: ${exerciseValue !== null ? `${exerciseValue.name}` : 'null'}`}</div>
        <div>{`Selected: ${exerciseSelection}`}</div>
      </main>
    </>
  );
}