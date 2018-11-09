import React from 'react'

class Footer extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() {
    return (
        <div className='footer'>
        <p>&copy; 2018</p>
        <p>Pete, Ollie and Taz</p>
        </div>
    )
}
}

export default Footer;