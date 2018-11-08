import React from 'react'
import jobsData from '../../data'
import Nav from './Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div>
      <Nav />
      <Header />
      <h1>Jobs!</h1>
      {/* <Jobs /> */}
      <Footer />
    </div>
  )
}
}

export default App

