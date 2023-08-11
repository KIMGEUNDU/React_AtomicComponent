import ReactDOM from 'react-dom/client';
import './index.css';
import ResolutionButton from './ResolutionButton';
import ResultButton from './ResultButton';

function handleClick() {
  return ReactDOM.createRoot(document.getElementById('root')).render(
    <ResultButton />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>리액트 들어가기전 마음상태!</h1>
    <ResolutionButton />
    <button type="button" onClick={handleClick}>
      결과는?
    </button>
  </>
);
