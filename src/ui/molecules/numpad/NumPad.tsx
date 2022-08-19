import { Box } from '@mui/material';
import React from 'react';
import { Key } from '../../atoms';

const numpadValues = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: 'DEL', value: 'del' },
  { label: 'AC', value: 'ac' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: 'x', value: '*' },
  { label: '/', value: '/' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '+', value: '+' },
  { label: '-', value: '-' },
  { label: '0', value: '0' },
  { label: '.', value: '.' },
  { label: '=', value: '1' },
];

const NumPad = () => {
  return (
    <Box className='calculator-keyboard__keys-container'>
      <Key label={'1'} onClick={onValueChange} value='1' />
      {numpadValues.map((item) => (
        <Key label={item.label} value={item.value} key={item.label} />
      ))}

      {/* <button
        className='calculator-keyboard__key'
        value={2}
        onClick={onValueChange}>
        2
      </button>
      <button
        className='calculator-keyboard__key'
        value={3}
        onClick={onValueChange}>
        3
      </button>
      <button
        className='calculator-keyboard__key clear-btn'
        value={'DEL'}
        onClick={onDelete}>
        DEL
      </button>
      <button
        className='calculator-keyboard__key clear-btn'
        value={'AC'}
        onClick={onClear}>
        AC
      </button>
      <button
        className='calculator-keyboard__key'
        value={4}
        onClick={onValueChange}>
        4
      </button>
      <button
        className='calculator-keyboard__key'
        value={5}
        onClick={onValueChange}>
        5
      </button>
      <button
        className='calculator-keyboard__key'
        value={6}
        onClick={onValueChange}>
        6
      </button>
      <button
        className='calculator-keyboard__key'
        value={'*'}
        onClick={onValueChange}>
        x
      </button>
      <button
        className='calculator-keyboard__key'
        value={'/'}
        onClick={onValueChange}>
        /
      </button>
      <button
        className='calculator-keyboard__key'
        value={7}
        onClick={onValueChange}>
        7
      </button>
      <button
        className='calculator-keyboard__key'
        value={8}
        onClick={onValueChange}>
        8
      </button>
      <button
        className='calculator-keyboard__key'
        value={9}
        onClick={onValueChange}>
        9
      </button>
      <button
        className='calculator-keyboard__key'
        value={'+'}
        onClick={onValueChange}>
        +
      </button>
      <button
        className='calculator-keyboard__key'
        value={'-'}
        onClick={onValueChange}>
        -
      </button>
      <button
        className='calculator-keyboard__key'
        value={0}
        onClick={onValueChange}>
        0
      </button>
      <button
        className='calculator-keyboard__key'
        value={'.'}
        onClick={onValueChange}>
        .
      </button> */}
      {/* <button
      className='calculator-keyboard__key'
      value={'exp'}
      onClick={onValueChange}>
      EXP
    </button>
    <button
      className='calculator-keyboard__key'
      value={'ans'}
      onClick={onValueChange}>
      Ans
    </button> */}
      {/* <button
        className='calculator-keyboard__key'
        value={'='}
        onClick={onReturn}>
        =
      </button> */}
    </Box>
  );
};

export default NumPad;
function onValueChange() {
  throw new Error('Function not implemented.');
}
function onDelete(): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
function onClear(): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
function onReturn(): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
