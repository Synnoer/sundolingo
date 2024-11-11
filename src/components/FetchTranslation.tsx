import React, { useState } from 'react';

const TranslateComponent = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = async () => {
    const response = await fetch(`/api/translate?text=${text}&src_lang=id&tgt_lang=su`);
    const data = await response.json();
    setTranslation(data.translation);
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text to translate" 
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>{translation}</p>
    </div>
  );
};

export default TranslateComponent;
