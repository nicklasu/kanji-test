import React from 'react';
import CustomButton from "../components/CustomButton";

const KanjiTest = ({ currentKanji, onKnowAnswer, onDontKnowAnswer, indexNumber, currentIndex, totalKanji }) => (
  <div>
    <h1>JLPT N{indexNumber} Kanji Test</h1>
    <p>{currentIndex + 1}/{totalKanji}</p>
    <h2>{currentKanji ? currentKanji.kanji : 'No Kanji Available'}</h2>
    <div> 
      <CustomButton title="Understand" onClick={onKnowAnswer} />
      <CustomButton color="red" title="Don't know" onClick={onDontKnowAnswer} />         
    </div>
  </div>
);

export default KanjiTest;
