import { DoubleInputQuestionaire } from '../components/doubleInputQuestionaire';
import '../App.css';

export default function Post() {
  return (
    <div className='body-container'>
      <DoubleInputQuestionaire title='Post' label1='Title' label2='Body' onSubmit={() => {return;}} />
    </div>
  );
}