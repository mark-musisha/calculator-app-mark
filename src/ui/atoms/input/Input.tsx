import { FC } from 'react';
import { DisplayLog, Input } from '.';
import { IinputProps } from './inputTypes';

export const DisplayField: FC<IinputProps> = ({
  type = 'outlined',
  inputType,
  ...rest
}) => {
  return inputType == 'log' ? <DisplayLog {...rest} /> : <Input {...rest} />;
};
