import { Alert } from '@mui/material';
import CustomButton from '@ui/CustomButton';
import Stack from '@mui/material/Stack';
import { useGetUserCarsHistoryQuery } from './api';
import CarsHistory from '@components/CarsHistory';
import { UserCarsHistoryResponse } from './api/types.ts';
import { LOADING_TEXT } from '@shared/constants';
import { useActions } from '@shared/hooks';

const UserCarsHistory = () => {
  const {
    data: cars_history,
    isLoading,
    isError,
  } = useGetUserCarsHistoryQuery('');
  const { switchHistories } = useActions();

  return (
    <>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Інформація відсутня, спробуйте пізніше...
        </Alert>
      )}

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: 'column', gap: 3 }}
      >
        {cars_history?.data.map((cars_history: UserCarsHistoryResponse) => (
          <CarsHistory
            key={cars_history.id}
            id={cars_history.id}
            car_id={cars_history.car_id}
            start_date={cars_history.start_date}
            end_date={cars_history.end_date}
          />
        ))}
      </Stack>

      <Stack mt={1.2} alignItems="center" justifyContent="center">
        <CustomButton
          text="Перейти до історії бронювання апартаментів"
          variant="outlined"
          size="small"
          type="button"
          handleClick={() => switchHistories()}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default UserCarsHistory;
