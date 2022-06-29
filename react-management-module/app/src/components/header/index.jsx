import './style.css';

export const Header = (props) => {
  return (
    <div className='site-header'>
      <a href={props.url} className='site-header-url'>{props.label}</a>
    </div>
  );
};
