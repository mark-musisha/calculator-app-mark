import React, { useRef, useState } from 'react';
import { Stack } from './global/utils/utils';

const Stacked = new Stack();

export const App = () => {
  const [value, setValue] = useState<string>('');
  const [ans, setAns] = useState(0);
  const [prevAnswer, setPreviousAnswer] = useState(0);
  //constants

  const onValueChange = (e: any) => {
    e.preventDefault();
    setValue(value + e.target.value);
    Stacked.push(e.target.value);
  };

  const onReturn = (e: any) => {
    if (!value) setAns(0);
    if (value.length < 1) setAns(parseInt(value));
    Stacked.push(e.target.value);
    const evaluated = Stacked.evaluate();
    setAns(evaluated);
    Stacked.clear();
  };

  const onClear = () => {
    setValue('');
    setAns(0);
    Stacked.clear();
  };

  const onDelete = () => {
    if (value === '') setValue('');
    setValue(value.slice(0, -1));
  };

  return (
    <div className='calculator'>
      <p className='description'>
        Calculate <br />
      </p>
      <div className='calculator-screen'>
        <input
          type='text'
          className='calculator-screen__input'
          value={value}
          autoFocus
        />
        <input
          type='text'
          className='calculator-screen__input answer-value'
          value={ans}
        />
      </div>
      <div className='calculator-keyboard'>
        <div className='calculator-keyboard__function-container'>
          <button className='calculator-keyboard__key function-btn'>
            &#x1D4B3; <sup>-1</sup>
          </button>
          <button className='calculator-keyboard__key function-btn'>
            &radic;
          </button>
          <button className='calculator-keyboard__key function-btn'>
            &#x1D4B3;<sup>2</sup>
          </button>
          <button className='calculator-keyboard__key function-btn'>^</button>
          <button className='calculator-keyboard__key function-btn'>log</button>
          <button className='calculator-keyboard__key function-btn'>ln</button>
          <button className='calculator-keyboard__key function-btn'>
            (&minus;)
          </button>
          <button className='calculator-keyboard__key function-btn'>
            &#x1D4B3; <sup>3</sup>
          </button>
          <button className='calculator-keyboard__key function-btn'>hyp</button>
          <button className='calculator-keyboard__key function-btn'>sin</button>
          <button className='calculator-keyboard__key function-btn'>cos</button>
          <button className='calculator-keyboard__key function-btn'>tan</button>
          <button className='calculator-keyboard__key function-btn'>RCL</button>
          <button className='calculator-keyboard__key function-btn'>ENG</button>
          <button
            className='calculator-keyboard__key function-btn'
            value='('
            onClick={onValueChange}
          >
            (
          </button>
          <button
            className='calculator-keyboard__key function-btn'
            value=')'
            onClick={onValueChange}
          >
            )
          </button>
          <button className='calculator-keyboard__key function-btn'>,</button>
          <button className='calculator-keyboard__key function-btn'>M+</button>
        </div>
        <div className='calculator-keyboard__keys-container'>
          <button
            className='calculator-keyboard__key'
            value={1}
            onClick={onValueChange}
          >
            1
          </button>
          <button
            className='calculator-keyboard__key'
            value={2}
            onClick={onValueChange}
          >
            2
          </button>
          <button
            className='calculator-keyboard__key'
            value={3}
            onClick={onValueChange}
          >
            3
          </button>
          <button
            className='calculator-keyboard__key clear-btn'
            value={'DEL'}
            onClick={onDelete}
          >
            DEL
          </button>
          <button
            className='calculator-keyboard__key clear-btn'
            value={'AC'}
            onClick={onClear}
          >
            AC
          </button>
          <button
            className='calculator-keyboard__key'
            value={4}
            onClick={onValueChange}
          >
            4
          </button>
          <button
            className='calculator-keyboard__key'
            value={5}
            onClick={onValueChange}
          >
            5
          </button>
          <button
            className='calculator-keyboard__key'
            value={6}
            onClick={onValueChange}
          >
            6
          </button>
          <button
            className='calculator-keyboard__key'
            value={'*'}
            onClick={onValueChange}
          >
            x
          </button>
          <button
            className='calculator-keyboard__key'
            value={'/'}
            onClick={onValueChange}
          >
            /
          </button>
          <button
            className='calculator-keyboard__key'
            value={7}
            onClick={onValueChange}
          >
            7
          </button>
          <button
            className='calculator-keyboard__key'
            value={8}
            onClick={onValueChange}
          >
            8
          </button>
          <button
            className='calculator-keyboard__key'
            value={9}
            onClick={onValueChange}
          >
            9
          </button>
          <button
            className='calculator-keyboard__key'
            value={'+'}
            onClick={onValueChange}
          >
            +
          </button>
          <button
            className='calculator-keyboard__key'
            value={'-'}
            onClick={onValueChange}
          >
            -
          </button>
          <button
            className='calculator-keyboard__key'
            value={0}
            onClick={onValueChange}
          >
            0
          </button>
          <button
            className='calculator-keyboard__key'
            value={'.'}
            onClick={onValueChange}
          >
            .
          </button>
          <button
            className='calculator-keyboard__key'
            value={'exp'}
            onClick={onValueChange}
          >
            EXP
          </button>
          <button
            className='calculator-keyboard__key'
            value={'ans'}
            onClick={onValueChange}
          >
            Ans
          </button>
          <button
            className='calculator-keyboard__key'
            value={'='}
            onClick={onReturn}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
