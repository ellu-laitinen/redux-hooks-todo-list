import React, { useEffect } from 'react';
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import { initNotes } from './store/reducers/reducer';
import { useDispatch } from 'react-redux'

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes())
  }, [dispatch]);

  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;


