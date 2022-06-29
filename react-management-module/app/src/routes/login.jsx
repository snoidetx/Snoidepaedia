import { DoubleInputQuestionaire } from '../components/doubleInputQuestionaire';
import { store } from '../redux/store';
import '../App.css';

export default function Login() {
  const mockAuthenticate = (email, password) => {
    console.log('RUNNING');
    if (email === 'snoide' && password === '1') {
      store.dispatch({ type: 'SUCCESS' });
      console.log('SUCCESS');
    } else {
      store.dispatch({ type: 'FAILURE' });
      console.log('FAILURE');
    }
  }

  return (
    <div className='body-container'>
      <DoubleInputQuestionaire title='Login' label1='Email' label2='Password' onSubmit={mockAuthenticate} />
    </div>
  );
}
