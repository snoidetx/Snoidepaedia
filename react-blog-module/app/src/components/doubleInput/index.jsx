import { useState } from 'react';

import './style.css';

export const DoubleInput = (props) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <form className='input' onSubmit={() => props.onSubmit(input1, input2)}>
      <label>
        <p className='input-label'>{props.label1}</p>
        <input className='input-box' type="text" value={input1} onChange={(e) => setInput1(e.target.value)}/>
      </label>
      <label>
        <p className='input-label'>{props.label2}</p>
        <input className='input-box' type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
      </label>
      <input className='submit-button' type='submit' value='Submit' />
    </form>
  );
};
