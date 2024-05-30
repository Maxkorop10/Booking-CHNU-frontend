import { useCallback, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import {
  RegistrationSchema,
  registrationSchema,
} from './schema/registrationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DropDownSelector from '@ui/DropDownSelector';
import { GENDER } from '@modules/RegistrationForm/_data.ts';

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    mode: 'all',
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
      gender: '',
      birthdate: '',
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const onSubmit = useCallback((data: RegistrationSchema) => {
    console.log('Form submitted:', data);
  }, []);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        justifyItems="center"
        alignItems="center"
        maxWidth={650}
        minWidth={350}
        width={isSmScreen ? 600 : 300}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Form submit button clicked');
            console.log('Form errors:', errors);
            handleSubmit(onSubmit)();
          }}
        >
          <Stack justifyItems="center" alignItems="center" gap={2}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 'bold', my: '5px' }}
            >
              Реєстрація
            </Typography>
            <CustomInput
              name="email"
              control={control}
              type="email"
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message || ''}
            />
            <Box
              display="grid"
              gridTemplateColumns={isSmScreen ? '1fr 1fr' : '1fr'}
              gap={2}
            >
              <CustomInput
                name="firstName"
                control={control}
                label="Ім'я"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message || ''}
              />
              <CustomInput
                name="surname"
                control={control}
                label="Прізвище"
                variant="outlined"
                error={!!errors.surname}
                helperText={errors.surname?.message || ''}
              />
              <CustomInput
                name="password"
                control={control}
                type={isPasswordVisible ? 'text' : 'password'}
                label="Пароль"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message || ''}
                icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
                handleIconClick={togglePasswordVisibility}
              />
              <CustomInput
                name="passwordConfirmation"
                control={control}
                type={isPasswordVisible ? 'text' : 'password'}
                label="Підтвердіть пароль"
                variant="outlined"
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation?.message || ''}
                icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
                handleIconClick={togglePasswordVisibility}
              />
            </Box>
            <CustomInput
              name="phone"
              control={control}
              type="tel"
              label="Номер телефону"
              variant="outlined"
              error={!!errors.phone}
              helperText={errors.phone?.message || ''}
            />
            <DropDownSelector
              name="gender"
              control={control}
              label="Оберіть гендер"
              valuesArray={GENDER}
              error={!!errors.gender}
              helperText={errors.gender?.message || ''}
            />

            {/*<SingleDatePicker
              name="birthdate"
              control={control}
              label="Дата народження"
              error={!!errors.birthdate}
              helperText={errors.birthdate?.message || ''}
            />*/}
          </Stack>
        </form>
      </Stack>
    </LocalizationProvider>
  );
};

export default RegistrationForm;
