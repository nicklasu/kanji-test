import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import KanjiJSONToArray from "../components/KanjiJSONToArray";
import GetFirstNumberFromString from "../components/GetFirstNumberFromString";
import KanjiList from "../components/KanjiList";
import TestResults from "../components/TestResults";
import KanjiTest from "../components/KanjiTest";
import CustomButton from "../components/CustomButton"; 
import "../css/JLPTKanji.css"

const JLPTKanji = () => {
  // Load Kanji 
  let AllJLPTKanji = KanjiJSONToArray;
  
  // Get pathname (used for determining JLPT level)
  const location = useLocation();
  const currentPath = location.pathname;

  // Get the number of the page and use that to determine the correct dataset
  const indexNumber = GetFirstNumberFromString(currentPath);

  // Get only the data corresponding to the indexNumber
  const jlptKanjiByLevel = AllJLPTKanji[indexNumber];

  // State to keep track of the current kanji index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testEnded, setTestEnded] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Ensure there is data to display
  const currentKanji = jlptKanjiByLevel.length > 0 ? jlptKanjiByLevel[currentIndex] : null;

  const checkIfTestOver = () => {
    if ((currentIndex + 1) === jlptKanjiByLevel.length) {
      setTestEnded(true);
      return true;
    }
    return false;
  };

  const knowAnswer = () => {
    jlptKanjiByLevel[currentIndex].correct = true;
    setCurrentIndex(prevIndex => (prevIndex + 1) % jlptKanjiByLevel.length);
    if (checkIfTestOver()) return;
  };

  const dontKnowAnswer = () => {
    jlptKanjiByLevel[currentIndex].correct = false;
    setCurrentIndex(prevIndex => (prevIndex + 1) % jlptKanjiByLevel.length);
    if (checkIfTestOver()) return;
  };

  const handleReturn = () => {
    const userConfirmed = window.confirm("Warning: If you return to the home page, your test results will be lost. Are you sure you want to leave?");
    if (userConfirmed) {
      navigate("/");
    }
  };

  return (
    <div id="JLPTKanji">
      <CustomButton title="Return to Home" color={"red"} onClick={handleReturn} />
      {!testEnded ? (
        <>
          <KanjiTest
            currentKanji={currentKanji}
            onKnowAnswer={knowAnswer}
            onDontKnowAnswer={dontKnowAnswer}
            indexNumber={indexNumber}
            currentIndex={currentIndex}
            totalKanji={jlptKanjiByLevel.length}
          />
        </>
      ) : (
        <div>
          <TestResults kanjiArray={jlptKanjiByLevel} />
          <KanjiList kanjiArray={jlptKanjiByLevel} />
        </div>
      )}
    </div>
  );
};

export default JLPTKanji;