import './App.css';
import React, { useState } from 'react'
import Navbar from './Comps/Navbar';
import News from './Comps/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar' //using from npmjs



const App = ()=>{
  const pageSize = 9;
  // env.local (envirenment variable) variable
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Switch>
            <Route exact path="/">
              < News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" title="Top Headlines" category="general"/>
            </Route>
            <Route exact path="/business">
              < News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" title="Top Headlines - Business" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              < News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" title="Top Headlines - Entertainment" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              < News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" title="Top Headlines - General" category="general"/>
            </Route>
            <Route exact path="/health">
              < News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" title="Top Headlines - Health" category="health"/>
            </Route>
            <Route exact path="/science">
              < News setProgress={setProgress} apiKey={apiKey} key="science"pageSize={pageSize} country="in" title="Top Headlines - Science" category="science"/>
            </Route>
            <Route exact path="/sports">
              < News setProgress={setProgress} apiKey={apiKey} key="sports"pageSize={pageSize} country="in" title="Top Headlines - Sports" category="sports"/>
            </Route>
            <Route exact path="/technology">
              < News setProgress={setProgress} apiKey={apiKey} key="technology"pageSize={pageSize} country="in" title="Top Headlines - Technology" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
    )
  }
  
export default App
