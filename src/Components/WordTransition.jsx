import  { useEffect, useRef, useState } from 'react'

export const WordTransition = ({wordsArray}) => {

    
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const maxWordIndex = wordsArray.length - 1;
  const wordRefs = useRef([]);
  useEffect(() => {
    const changeText = () => {
      const currentWordBox = wordRefs.current[currentWordIndex];
      const nextWordBox = currentWordIndex === maxWordIndex ? wordRefs.current[0] : wordRefs.current[currentWordIndex + 1];
      Array.from(currentWordBox.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      nextWordBox.style.opacity = "1";
      Array.from(nextWordBox.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      setTimeout(() => {
        currentWordBox.style.opacity = "0";
        setCurrentWordIndex(prevIndex => prevIndex === maxWordIndex ? 0 : prevIndex + 1);
      }, 2000); // Delay to allow the transition to complete
    };
    changeText();
    const interval = setInterval(changeText, 12000);
    return () => clearInterval(interval);
  }, [currentWordIndex, maxWordIndex]);
  return (
    <>
    <h1 className="myName">Hii, I'm Tapas</h1>
      <div className="change-text">
        <h2 style={{color:"whitesmoke",marginLeft:"50px"}}>And I'm</h2>
        <h3>
          {wordsArray.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="word"
              ref={el => wordRefs.current[wordIndex] = el}
              style={{ opacity: wordIndex === currentWordIndex ? 1 : 0}}
            >
              {word.split("").map((letter, letterIndex) => (
                <span key={letterIndex} className="letter">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h3>
      </div>
    </>
  )
}
