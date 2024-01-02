import {useMoveBack} from '../../../hooks/useMoveBack';
import './index.css';

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <>
      <div className='container page-not-found'>
        <h2>Page not found</h2>
        <button
          onClick={moveBack}
          size='large'>
          &larr; Go back
        </button>
      </div>
    </>
  );
};

export default NotFound;
