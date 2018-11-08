import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

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

