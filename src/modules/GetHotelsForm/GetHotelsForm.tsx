import { useSearchCityQuery } from '@modules/GetHotelsForm/api/mapBox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getHotelsSchema } from '@modules/GetHotelsForm/schema';
import { useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CustomButton from '@ui/CustomButton';
import SearchCity from '@ui/SearchCityAutocomplete';
import { useDebounce } from '@shared/hooks';
import { IFeature } from '@modules/GetHotelsForm/api/mapBox/types.ts';
import { Alert } from '@mui/material';

const GetHotelsForm = () => {
  const [search, setSearch] = useState<string>('');
  const debounced: string = useDebounce(search, 500);
  const {
    data: cities,
    isLoading,
    isError,
  } = useSearchCityQuery(debounced, {
    skip: debounced.length < 2,
  });
  const [options, setOptions] = useState<string[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(getHotelsSchema),
    defaultValues: {
      city: '',
    },
  });

  useEffect(() => {
    if (debounced.length > 2 && cities) {
      const results: string[] = [];
      cities.map((city: IFeature) => results.push(city.text));
      setOptions(results);
    }
  }, [debounced, cities]);

  const onSubmit = useCallback(() => {}, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Alert severity="info">Дані завантажуються...</Alert>}

      {isError && (
        <Alert severity="error" variant="filled">
          Помилка завантаження даних...
        </Alert>
      )}

      <Stack
        direction="row"
        gap={2}
        sx={{ p: 1, bgcolor: 'lightgoldenrodyellow' }}
      >
        <SearchCity
          name="city"
          control={control}
          label="Знайти місто"
          options={options}
          error={!!errors.city}
          helperText={errors.city?.message || ''}
          handleChange={(e) => setSearch(e.target.value)}
        />
        <CustomButton
          type="submit"
          text="Пошук"
          variant="contained"
          color="primary"
          size="medium"
        />
      </Stack>
    </form>
  );
};

export default GetHotelsForm;
