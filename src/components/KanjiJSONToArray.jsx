import kanjiData from '../data/kanji-jouyou.json'; 

// Organize the kanji by JLPT level
const kanjiByJLPTLevel = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
};

Object.entries(kanjiData).forEach(([kanji, data]) => {
    const jlptLevel = data.jlpt_new ?? data.jlpt_old;
    if (jlptLevel !== null && kanjiByJLPTLevel[jlptLevel]) {
        kanjiByJLPTLevel[jlptLevel].push({ kanji, jlptLevel, correct: null });
    }
});

export default kanjiByJLPTLevel;