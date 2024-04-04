'use client'

import Button from "@mui/material/Button";
import {Alert, Box, CircularProgress, Container, Typography} from "@mui/material";
import { useForm } from "react-hook-form";
import {FORM_FIELDS, validationSchema} from "@/app/signIn/form";
import {TextInput} from "@/components/TextInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSignInMutation} from "@/lib/services/auth";
import {useRouter} from "next/navigation";

export default function SignIn() {
  const [signUp, { isLoading, isError }] = useSignInMutation();

  const { handleSubmit, control, formState: { isValid }} = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    signUp(data).then((res: any) => { if (res.data?.accessToken) router.push('/'); });
  });

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
        { isLoading ? <CircularProgress /> : null }
        { isError ? <Alert severity="error">Error occurred</Alert> : null }
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>Sign In</Typography>

        <TextInput name={FORM_FIELDS.email} label="Email" control={control} />
        <TextInput name={FORM_FIELDS.password} label="Password" control={control} isPassword />

        <Button variant="contained" onClick={onSubmit} disabled={!isValid}>Sign In</Button>
      </Box>
    </Container>
  );
}
