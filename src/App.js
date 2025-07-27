import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Studio from "./Pages/Studio";
import RecordList from "./Pages/RecordList";
import NewRecord from "./Pages/NewRecord";
import {Provider} from "react-redux";
import {store} from "./Redux/Store/Store";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/studio" element={<Studio/>}/>
                  <Route path="/recordlist" element={<RecordList/>}/>
                  <Route path="/newrecord" element={<NewRecord/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
