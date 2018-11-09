import React from 'react'
import Nav from './Nav'

class Header extends React.Component {
  render(props) {
    return (
      <header>
          <Nav AppState={this.state} {...props}  />

              <h1>Ollie's Jobs Internationale</h1>

      </header>
    )
  }
}

export default Header