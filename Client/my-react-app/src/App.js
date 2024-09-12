import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Home from './components/Home';
import About from './components/About';
import TaskList from './components/TaskList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
              
                    <Route path="/" element={
                        <>
                            <Home />
                            <Greeting name="World" />
                            <Counter />
                            <Timer />
                            <TaskList/>
                        </>
                    } />

                    <Route path="/about" element={<About />} />

                    <Route path="/counter" element={<Counter />} />

                  
                </Routes>
            </div>
        </Router>
    );
}

export default App;
