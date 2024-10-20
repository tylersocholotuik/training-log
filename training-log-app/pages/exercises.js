import { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Exercises() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the public folder
    fetch('/data/exercises.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const options = data.exercises.map((exercise) => {
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
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(exercise) => exercise.firstLetter}
          getOptionLabel={(exercise) => exercise.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Select Exercise" />}
        />
      </main>
    </>
  );
}