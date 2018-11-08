import React from 'react'


class Nav extends React.Component {
    constructor(props) {
        super(props)
        }
    

    render() {
    return (
    <nav class="navbar">
        <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item"><a class="navbar-link" href="index.html">Jobs</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#blogs">Add Job</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#about">about</a></li>            
            </ul>
        </div>
    </nav>
  )
}
}


export default Nav
