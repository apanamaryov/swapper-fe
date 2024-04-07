'use client'

import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from "react";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";

type Props = {
  accessToken?: string | null,
  onLogOut: () => void,
};

export const PageHeader = ({ accessToken, onLogOut }: Props) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignUp = () => {
    router.push('/signUp')
  }

  const handleSignIn = () => {
    router.push('/signIn')
  }

  const handleLogout = () => {
    onLogOut();
  }

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Swapper
        </Typography>

        {!accessToken ? (
          <div>
            <Button variant="contained" sx={{ mr: 2, color: '#000', background: '#fff' }} onClick={handleSignUp}>
              Sign up
            </Button>
            <Button variant="contained" sx={{ mr: 2, color: '#000', background: '#fff' }} onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        ) : (
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonOutlineOutlinedIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Log out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}