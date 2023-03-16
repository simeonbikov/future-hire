import { useState, useEffect } from "react";

function AutotypeText({ text, delay = 100, shouldRepeat = false, onRepeat }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [repeatCount, setRepeatCount] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (isTyping) {
      timeoutId = setTimeout(() => {
        const nextChar = text[displayedText.length];
        setDisplayedText(displayedText + nextChar);

        if (displayedText.length === text.length - 1) {
          setIsTyping(false);
          if (shouldRepeat && repeatCount < 2) {
            setTimeout(() => {
              setDisplayedText("");
              setIsTyping(true);
              setRepeatCount(repeatCount + 1);
              if (onRepeat) {
                onRepeat();
              }
            }, 2000);
          }
        }
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, delay, isTyping, repeatCount, shouldRepeat, text, onRepeat]);

  return <span>{displayedText}</span>;
}

export default AutotypeText;