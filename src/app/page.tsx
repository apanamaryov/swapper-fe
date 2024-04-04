'use client'

import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function Home() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== 'undefined') setAccessToken(localStorage.getItem('accessToken'));
  }, [])

  const handleAuth = () => {
    if (!accessToken) {
      router.push('/signIn')
    }
    else {
      localStorage.removeItem('accessToken');
      setAccessToken(localStorage.getItem('accessToken'));
    }
  }

  const handleSignUp = () => {
    router.push('/signUp')
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>Swapper</Typography>
        <Button variant="contained" sx={{ mb: 2 }} onClick={handleAuth}>
          {!accessToken ? 'Sign In' : 'Log Out'}
        </Button>
        {!accessToken ? <Button variant="contained" sx={{ mb: 2 }} onClick={handleSignUp}>Sing Up</Button> : null}
      </Box>
    </Container>
  );
}
