import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import WeightUnitToggle from './WeightUnitToggle';

export default function Exercise({ exercise }) {
    return (
        <Paper elevation={3} sx={{ p: 2}}>
            <Stack spacing={2}>
                <Typography variant="h5" color="primary">{exercise.exercise.name}</Typography>
                <TextField
                    id="notes"
                    label="Notes"
                    multiline
                    maxRows={4}
                    variant="standard"
                    value={exercise.notes}
                />
                <Grid container spacing={2} >
                    <Grid item size={2} alignSelf="center">
                        <Typography variant="body1" fontWeight={500} >Set</Typography>
                    </Grid >
                    <Grid item size={3}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="body1" fontWeight={500}>
                                Weight
                            </Typography>
                            <WeightUnitToggle weightUnit={exercise.weightUnit} />
                        </Stack>
                    </Grid >
                    <Grid item size={3} alignSelf="center">
                        <Typography variant="body1" fontWeight={500} >Reps</Typography>
                    </Grid >
                    <Grid item size={3} alignSelf="center">
                        <Typography variant="body1" fontWeight={500}>RPE</Typography>
                    </Grid >
                    <Grid item size={1}>

                    </Grid>
                </Grid>  
                {exercise.sets.map((set, key) => {
                return (
                    <Grid container spacing={2} key={key} >
                        <Grid item size={2}>
                            {key + 1}
                        </Grid>
                        <Grid item size={3}>
                            <TextField
                                id="weight"
                                size="small"
                                value={set.weight.toString()}
                                sx={{ height: "1rem", width: "4rem" }}
                            />
                        </Grid>
                        <Grid item size={3}>
                            <TextField
                                id="reps"
                                defaultValue="Small"
                                size="small"
                                value={set.reps.toString()}
                            />
                        </Grid>
                        <Grid item size={3}>
                            <TextField
                                id="rpe"
                                defaultValue="Small"
                                size="small"
                                value={set.rpe.toString()}
                            />    
                        </Grid>
                        <Grid item size={1}>
                            <IconButton aria-label="delete" color="error" size="small">
                                <DeleteIcon fontSize="small"/>
                            </IconButton>
                        </Grid>                           
                    </Grid>
                    );
                })}
            </Stack>  
        </Paper>
    );
}