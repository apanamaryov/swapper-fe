import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

type Props = {
  name: string,
  label: string,
  control: any,
  isPassword?: boolean,
}

export const TextInput = ({ name, label, control, isPassword = false }: Props) => (
  <Controller
    name={name}
    control={control}
    render={({
               field: { onChange },
               fieldState: { error },
             }) => (
      <TextField
        label={label}
        sx={{ mb: 2 }}
        helperText={error ? error.message : null}
        size="small"
        error={!!error}
        onChange={onChange}
        variant="outlined"
        type={isPassword ? 'password' : 'text'}
      />
    )}
  />
);