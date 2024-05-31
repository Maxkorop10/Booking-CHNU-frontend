import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, loginFormSchema } from '@modules/LoginForm/schema';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomButton from '@ui/CustomButton';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const onSubmit = useCallback((data: LoginFormSchema) => {
    console.log('submit', data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        gap={2}
        minWidth={300}
        maxWidth={400}
        sx={{ textWrap: 'wrap' }}
        alignItems="center"
        justifyItems="center"
      >
        <Typography variant="h3" fontWeight="bold" component="h1">
          Вхід
        </Typography>
        <CustomInput
          name="email"
          control={control}
          label="Email"
          type="email"
          variant="outlined"
          icon={EmailOutlinedIcon}
          error={!!errors.email}
          helperText={errors.email?.message || ''}
        />
        <CustomInput
          name="password"
          control={control}
          label="Пароль"
          type={isPasswordVisible ? 'text' : 'password'}
          variant="outlined"
          icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
          error={!!errors.password}
          helperText={errors.password?.message || ''}
          handleIconClick={togglePasswordVisibility}
        />
        <CustomButton
          type="submit"
          text="Увійти"
          size="medium"
          color="primary"
          variant="contained"
        />
      </Stack>
    </form>
  );
};

export default LoginForm;