import React from 'react'
import jobsDataNewBrowser from '../../data'
import { HashRouter as Router, Route } from 'react-router-dom'
import Jobs from './Jobs'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

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

  render() {
    
    
    return (
    <Router>
    <div>
    <Header />
    <Nav />
    <h1>Welcome to Ollies Jobs</h1>
    <p>Now will show Jobs List</p>
    {console.log("Jobs from state ",this.state)}
    <Jobs AppState={this.state} />

  <Footer />
  </div>
  </Router>
  )
}
}

export default App

