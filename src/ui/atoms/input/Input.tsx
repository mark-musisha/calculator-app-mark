import { styled, TextField } from '@mui/material';
import React, { FC } from 'react';
import { IinputProps } from './inputTypes';

const Input = styled('input')({
  border: 'none',
});

export const DisplayField: FC<IinputProps> = ({ ...rest }) => {
  return <Input {...rest} />;
};
