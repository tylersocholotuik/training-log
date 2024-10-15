import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function WeightUnitToggle({ weightUnit }) {
    return (
        <Stack direction="row" spacing={4}>
            <ToggleButtonGroup
            color="primary"
            size="small"
            value={weightUnit}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ height: "1.5rem" }}
        >
            <ToggleButton value="lb" aria-label="lb">
                lb
            </ToggleButton>
            <ToggleButton value="kg" aria-label="kg">
                kg
            </ToggleButton>
        </ToggleButtonGroup>
        </Stack>
    );
}