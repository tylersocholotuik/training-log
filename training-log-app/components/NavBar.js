import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


export default function NavBar() {
    const pages = [
        { path: '/workout', label: 'Workout' },
        { path: '/history', label: 'History' },
        { path: '/exercises', label: 'Exercises' },
        { path: '/templates', label: 'Templates' }
    ];

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // below code is for toggling light/dark mode
    const [checked, setChecked] = useState(true);

    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    // if switch is checked, set dark mode, unchecked, set light mode
    const handleThemeToggle = (event) => {
        setMode(event.target.checked ? 'dark' : 'light');
        setChecked(event.target.checked);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Training Log
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                // using the NavLink component for page navigation
                                <Router>
                                    <MenuItem
                                        key={page.label}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={page.path}
                                        sx={{
                                            '&.active': {
                                                color: 'primary.main'
                                            }
                                        }}
                                    >
                                        <Typography sx={{ textAlign: 'center' }}>
                                            {page.label}
                                        </Typography>
                                    </MenuItem>
                                </Router>
                            ))}
                        </Menu>
                    </Box>
                    <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Training Log
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            return (
                                // these buttons need to be wrapped in a router
                                // component when using NavLink
                                // using NavLink because it automatically applies
                                // the active class, allowing me to style the button's
                                // active state
                                <Router>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={page.path}
                                        sx={{
                                            my: 2,
                                            display: 'block',
                                            color: '#bdbdbd',
                                            '&:hover': {
                                                color: 'white',
                                                backgroundColor: 'transparent'
                                            },
                                            '&.active': {
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        {page.label}
                                    </Button>
                                </Router>
                            )
                        })}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <LightModeIcon />
                        <Tooltip title="Toggle light/dark mode">
                            <Switch
                                checked={checked}
                                onChange={handleThemeToggle}
                                inputProps={{ 'aria-label': 'theme switch' }}
                            />
                        </Tooltip>
                        <DarkModeIcon />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}