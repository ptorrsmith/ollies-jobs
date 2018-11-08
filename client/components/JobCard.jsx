import React from 'react'

class JobCard extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() {
    return (
        <div className='footer'>
        <div>&copy; 2018</div>
        <div>Pete, Ollie and Taz</div>
        </div>
    )
}
}

export default JobCard;