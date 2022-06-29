import { DoubleInput } from '../doubleInput';
import './style.css';

export const DoubleInputQuestionaire = (props) => {
  return (
    <div className='login-box'>
      <div className='login-header'>
        <p className='font-header'>{props.title}</p>
      </div>
      <DoubleInput label1={props.label1} label2={props.label2} onSubmit={props.onSubmit} />
    </div>
  );
};
