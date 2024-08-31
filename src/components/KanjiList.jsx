import React, { useState } from 'react';
import CustomButton from './CustomButton';
import ListButton from './ListButton';

const KanjiList = ({ kanjiArray }) => {
  const [filter, setFilter] = useState('Unknown'); // 'known', 'unknown'

  // Filter the kanjiArray based on the current filter
  const filteredKanji = kanjiArray.filter(item => {
    if (filter === 'Known') return item.correct === true;
    if (filter === 'Unknown') return item.correct === false;
    return true;
  });

  const openInNewTab = (kanji) => {
    const url = `https://jisho.org/search/${encodeURIComponent(kanji)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <CustomButton onClick={() => setFilter('Known')} title="Show Known Kanji" />
      <CustomButton onClick={() => setFilter('Unknown')} title="Show Unknown Kanji" />
      <h3>{filter} Kanji</h3> 
      <ul>
        {filteredKanji.map((item, index) => (
          <li key={index}>
            <span> {item.kanji}  </span>
            <span>　　　　</span>
            <span>
            <ListButton
              onClick={() => openInNewTab(item.kanji)} title={"Look up on Jisho"}
            />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KanjiList;