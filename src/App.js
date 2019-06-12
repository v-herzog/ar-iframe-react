import React from 'react';
import './App.css';
import IframeAR from './components/IframeAR'

function App() {

  return (
    <div>
      <IframeAR onMarkersChange={markers => console.log(markers)}></IframeAR>
    </div>
  )
}

export default App;