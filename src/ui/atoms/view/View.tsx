import { Box, styled } from '@mui/material';
import React, { FC } from 'react';
import { IviewProps } from './viewTypes';

const Div = styled('div')((styles) => ({
  width: 'min-content',
  margin: '0 auto',
  marginTop: '10rem',
  padding: '2.1rem',
  borderRadius: '1rem',
  background: '#4b5568',
  ...styles,
}));

export const View: FC<IviewProps> = ({ children }) => {
  return <Div style={{ backgroundColor: 'red' }}>{children}</Div>;
};
