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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';


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

    const router = useRouter();

    const theme = useTheme();

    // checking the color scheme to determine hover/active states
    // for nav links
    let isDarkMode = theme.palette.mode === 'dark';

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
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
                            {pages.map((page) => {
                                // returns true if the page path matches the router path
                                // this mimics the 'active' class on navlinks
                                const isActive = router.pathname === page.path;

                                return (
                                    <MenuItem
                                    key={page.label}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    href={page.path}
                                    sx={{
                                        color: isActive ? 'primary.light' : 'inherit'                                        
                                    }}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                                ) 
                            })}
                        </Menu>
                    </Box>
                    <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
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
                            
                            const isActive = router.pathname === page.path

                            return (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    href={page.path}
                                    sx={{
                                        my: 2,
                                        display: 'block',
                                        // changing active link colors based on 
                                        // color scheme
                                        color: isDarkMode ? isActive ?
                                            'primary.light' : '#bdbdbd'
                                            : !isDarkMode ? isActive ?
                                            '#ff6f61' : '#e0e0e0' 
                                            : '#bdbdbd',           
                                        '&:hover': {
                                            color: isDarkMode ? 'primary.light' : '#ff6f61',
                                            backgroundColor: 'transparent'
                                        },
                                        scale: isActive ? 1.1 : 1
                                    }}
                                >
                                    {page.label}
                                </Button>


                            )
                        })}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <LightModeIcon fontSize="small" />
                        <Tooltip title="Toggle light/dark mode">
                            <Switch
                                checked={checked}
                                onChange={handleThemeToggle}
                                inputProps={{ 'aria-label': 'theme switch' }}
                            />
                        </Tooltip>
                        <DarkModeIcon fontSize="small" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}