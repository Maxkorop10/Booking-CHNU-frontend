import { FC, ComponentType } from 'react';
import {
  Button,
  ButtonProps,
  styled,
  SvgIconProps,
  Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';

interface Props {
  to: string;
  icon: ComponentType<SvgIconProps>;
  text: string;
}

const NavBarLinkButton: FC<Props> = ({ to, icon: Icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#000'),
    borderColor: isActive ? '#fff' : 'transparent',
    outline: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: 'none',
    },
  }));

  return (
    <Link to={to}>
      <Stack direction="row" gap={2}>
        <CustomButton variant="outlined" startIcon={<Icon />}>
          <Typography variant="body1">{text}</Typography>
        </CustomButton>
      </Stack>
    </Link>
  );
};

export default NavBarLinkButton;
