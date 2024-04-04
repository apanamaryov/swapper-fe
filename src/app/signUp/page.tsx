'use client'

import {useSignUpMutation} from "@/lib/services/auth";
import Button from "@mui/material/Button";
import {Alert, Box, CircularProgress, Container, Typography} from "@mui/material";
import { useForm } from "react-hook-form";
import {FORM_FIELDS, validationSchema} from "@/app/signUp/form";
import {TextInput} from "@/components/TextInput";
import {yupResolver} from "@hookform/resolvers/yup";

export default function SignUp() {
  const [signUp, { isLoading, isError }] = useSignUpMutation();

  const { handleSubmit, control, formState: { isValid }} = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    const {password2, ...rest} = data;
    signUp(rest);
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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>Sign Up</Typography>

        <TextInput name={FORM_FIELDS.email} label="Email" control={control} />
        <TextInput name={FORM_FIELDS.password} label="Password" control={control} isPassword />
        <TextInput name={FORM_FIELDS.password2} label="Re-enter Password" control={control} isPassword />

        <Button variant="contained" onClick={onSubmit} disabled={!isValid}>Sign Up</Button>
      </Box>
    </Container>
  );
}
