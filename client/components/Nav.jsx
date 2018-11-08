import React from 'react'


class Nav extends React.Component {
    constructor(props) {
        super(props)
        }
    

    render() {
    return (
    <nav className="navbar">
        <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item">Jobs</li>
              <li className="navbar-item">Add Job</li>
              <li className="navbar-item">About</li>            
            </ul>
        </div>
    </nav>
  )
}
}


export default Nav
