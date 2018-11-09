import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        }
    

    render() {
    return (
    <nav className="navbar">
        <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item"><Link to={`/jobs`}>Jobs</Link></li>
              <li className="navbar-item"><Link to={`/jobs/addJob`}>Add Jobs</Link></li>     
            </ul>
        </div>
    </nav>
  )
}
}


export default Nav
