import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

export default function Exercises() {

  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseValue, setExerciseValue] = useState(null);
  const [exerciseSelection, setExceriseSelection] = useState('');
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

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

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 90 
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    }
  ];

  return (
    <>
      <main>
        <Container spacing={4} sx={{ p: 4 }}>
          <Box sx={{ height: '100vh', width: '100%' }}>
            <DataGrid
              rows={exerciseData}
              columns={columns}
              // initialState={{
              //   pagination: {
              //     paginationModel: {
              //       pageSize: 20,
              //     },
              //   },
              // }}
              // pageSizeOptions={[20]}
              disableMultipleRowSelection={true}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
              }}
              rowSelectionModel={rowSelectionModel}
            />
          </Box>
        </Container>

      </main>
    </>
  );
}