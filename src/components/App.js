import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.scss';

import { 
  getExperts, 
  getModuleList,
  getModuleDetails 
} from '../actions'
const HomePage = React.lazy(() => import('./Home/Home'));

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount = ()=>{
    this.props.getExperts();
    this.props.getModuleList();
  }

  render() {
   return (
    <div className="wrapper">
      <div className="container-fluid">
      <Router>
        <Route path="/" exact  render={()=> (
          <Suspense fallback={<div>Loading.....</div>}>
            <HomePage/>
          </Suspense>
        )} />
        <Route path="/Home"  render={()=> (
          <Suspense fallback={<div>Loading.....</div>}>
            <HomePage/>
          </Suspense>
        )} />
      </Router>
        
      </div>
    </div>
   );
  }
 }

 const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  getExperts: () => dispatch(getExperts()),
  getModuleList: () => dispatch(getModuleList()),
  getModuleDetails: () => dispatch(getModuleDetails())
 });

 export default connect(mapStateToProps, mapDispatchToProps)(App);
