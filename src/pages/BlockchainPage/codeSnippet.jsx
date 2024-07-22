import React from "react";

const CodeSnippet = () => {
  return (
    <div style={{ left: 0, width: '100%', height: '600px', position: 'relative', }}>
      <iframe
        src="https://ethfiddle.com/services/iframesnippet/ozceJJl0e9"
        style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: '0' }}
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CodeSnippet;
