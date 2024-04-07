'use client'

import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {PageHeader} from "@/components/PageHeader/PageHeader";

export default function Home() {
  const [accessToken, setAccessToken] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== 'undefined') setAccessToken(localStorage.getItem('accessToken'));
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(localStorage.getItem('accessToken'));
  }

  return (
    <main>
      <PageHeader accessToken={accessToken} onLogOut={handleLogOut} />
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>Home page</Typography>
    </main>
  );
}
