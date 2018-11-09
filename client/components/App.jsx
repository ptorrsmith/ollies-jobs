import React from 'react'
import jobsDataNewBrowser from '../../data'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Jobs from './Jobs'
import Header from './Header'
import Footer from './Footer'
import Job from './Job'
class App extends React.Component {

  constructor(props) {
    super(props)
    // save the jobsData to local storage
    // check if local jobs in local storage
    let jobsData = JSON.parse((window.localStorage.getItem('jobs'))) || window.localStorage.setItem('jobs', JSON.stringify(jobsDataNewBrowser))
    this.state = {jobsData: jobsData}
    
  }
  
  componentDidMount() {
    // let jobsData = JSON.parse((window.localStorage.getItem('jobs'))) || window.localStorage.setItem('jobs', JSON.stringify(jobsDataNewBrowser))
    // console.log("jobs data from local", jobsData)
    // this.setState({jobsData: jobsData})
  }

  render(props) {
    
    
    return (
    <Router>
    <div>
    <Header AppState={this.state} {...props}  />
    
  <Route exact path="/" render={() => (<Redirect to="/jobs"/>)} />
    <Route exact path='/jobs' render={(props) => {
          return <Jobs AppState={this.state} {...props} />      
    }} />
    <Route exact path = '/jobs/:id' render={(props) => {
          return <Job AppState={this.state} {...props} />      
    }}/>

  <Footer />
  </div>
  </Router>
  )
}
}

export default App

