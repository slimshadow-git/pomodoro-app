import React, { useState } from 'react';
import Timer from './components/Timer';
import Button from './components/Button';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Pomodoro Timer</h1>
      <Timer minutes={25} onTimerEnd={() => alert('Session Complete!')} />
      <div className="mt-4">
        <Button label={isRunning ? 'Pause' : 'Start'} onClick={() => setIsRunning(!isRunning)} />
        <Button label="Reset" onClick={() => window.location.reload()} />
      </div>
    </div>
  );
};

export default App;