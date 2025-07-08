import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../utils/color';

// 커스텀 스타일이 적용된 버튼
const StyledButton = styled(Button)(() => ({
  margin: '5px',
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 800,
  padding: '12px 36px',
  width: '260px',
  height: '40px',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
  transition: 'all 0.2s ease-in-out',
}));

// 커스텀 버튼 컴포넌트 인터페이스
interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

// 커스텀 버튼 컴포넌트
const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton
      variant="contained"
      sx={{ backgroundColor: colors.main }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton; 