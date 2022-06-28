import { DoubleInputQuestionaire } from '../components/doubleInputQuestionaire';
import '../App.css';

export default function Login() {
  return (
    <div className='body-container'>
      <DoubleInputQuestionaire title='Login' label1='Email' label2='Password' />
    </div>
  );
};