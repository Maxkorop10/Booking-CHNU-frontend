import Box from '@mui/material/Box';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import KeyIcon from '@mui/icons-material/Key';
import CustomButton from '@ui/CustomButton';
import { FC } from 'react';
import { CarRentalProps } from '@components/CarRental/types.ts';

const CarRental: FC<CarRentalProps> = ({
  icon,
  carModel,
  seats,
  transmissionType,
  manufactureYear,
  isPrepared,
  description,
  price,
}) => {
  const formatedPrice = price.toLocaleString();

  const handleClick = () => {
    console.log('The car is yours now!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        //alignItems: 'center',
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 380,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 380, md: 290 },
        }}
        alt="The house from the offer."
        src={icon}
      />
      <Box
        sx={{
          p: 1,
          minWidth: { md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '340px',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            px: 2,
            minWidth: { md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
            gap: 0.4,
          }}
        >
          <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
            <Box
              component="span"
              sx={{
                fontSize: '0.875rem',
                color: 'white',
                fontWeight: 'medium',
                backgroundColor: 'rgba(0, 58, 150, 0.8)',
                borderRadius: 1,
                px: 0.5,
                py: 0.1,
              }}
            >
              Найкращий вибір
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                fontSize: '1.25rem',
                fontWeight: 'bold',
              }}
            >
              {carModel}
            </Box>
            <Box
              component="span"
              sx={{ fontSize: '0.875rem', color: 'text.primary' }}
            >
              або схожий середній автомобіль
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                ggap: 0.5,
              }}
            >
              <PermIdentityIcon />
              <Box component="span" sx={{ fontSize: '0.875rem' }}>
                Сидінь: {seats}
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <CarRepairIcon />
              <Box component="span" sx={{ fontSize: '0.875rem' }}>
                {transmissionType}
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <ManageHistoryIcon />
              <Box component="span" sx={{ fontSize: '0.875rem' }}>
                Випуск: {manufactureYear}
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <KeyIcon />
              <Box component="span" sx={{ fontSize: '0.875rem' }}>
                {isPrepared}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', mt: 0.5, gap: 1 }}>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.primary',
                fontWeight: 'medium',
              }}
            >
              Деталі:
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              {description}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          minWidth: { md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '140px',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
          justifyItems: 'end',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: '0.9rem', color: 'text.primary', textAlign: 'right' }}
        >
          ціна за 3 дні
        </Box>
        <Box
          component="span"
          sx={{
            color: 'text.primary',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textAlign: 'right',
          }}
        >
          UAH {formatedPrice}
        </Box>
        <CustomButton
          text={'Переглянути пропозицію'}
          variant={'contained'}
          size={'small'}
          color={'primary'}
          disabled={false}
          handleClick={handleClick}
        />
      </Box>
    </Box>
  );
};

export default CarRental;