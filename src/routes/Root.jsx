
import ListButton from '../components/ListButton';
import '../css/Root.css';
import { useNavigate } from 'react-router-dom';


export default function Root() {
  const navigate = useNavigate();

  const handleClick = (string) => {
    navigate('/JLPTKanji/' + string);
  };

  return (
    <>
      <div>
        <h1>JLPT Kanji Test</h1>
          <nav>
          <ul>
            <li>
              <ListButton onClick={() => handleClick('N5')} title={"JLPT N5 Kanji Test"} />
            </li>
            <li>
              <ListButton onClick={() => handleClick('N4')} title={"JLPT N4 Kanji Test"} />
            </li>
            <li>
              <ListButton onClick={() => handleClick('N3')} title={"JLPT N3 Kanji Test"} />
            </li>
            <li>
              <ListButton onClick={() => handleClick('N2')} title={"JLPT N2 Kanji Test"} />
            </li>
            <li>
              <ListButton onClick={() => handleClick('N1')} title={"JLPT N1 Kanji Test"} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}