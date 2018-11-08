import React from 'react'
import jobsDataNewBrowser from '../../data'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'


class App extends React.Component {

  const jobsData

  constructor(props) {
    super(props)
    // save the jobsData to local storage
    // check if local jobs in local storage
    jobsData = JSON.parse((window.localStorage.getItem('jobs'))) || window.localStorage.setItem('jobs', JSON.stringify(jobsDataNewBrowser))
    console.log("jobs data from local", jobsData)
  }
  render() {
    
    // console.log(jobsData)
  return (
    <div>
      <Nav />
      <Header />
      <h1>Jobs!</h1>
      <Jobs component={jobsData} />
      <Footer />
    </div>
  )
}
}

export default App

