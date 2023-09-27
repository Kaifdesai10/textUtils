import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleLowClick = () => {
    let newLowText = text.toLowerCase();
    setText(newLowText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleUpClick = () => {
    let newUpText = text.toUpperCase();
    setText(newUpText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Clear Text', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied Text', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed extra spaces', 'success');
  };

  const handleReverse = () => {
    let reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert('Reversed Text', 'success');
  };

  const handleTitleCase = () => {
    let titleCaseText = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(titleCaseText);
    props.showAlert('Converted to Title Case', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 className="mb-4">{props.heading}</h2>
        <div className="my-4">
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>
          Reverse Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>
          Title Case
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>Your Text Words: {text.split(/\s+/).filter((element) => element.length !== 0).length}, Character: {text.length}</p>
        <p>{0.008 * text.split(' ').filter((element) => element.length !== 0).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing To Preview!!'}</p>
      </div>
    </>
  );
}
