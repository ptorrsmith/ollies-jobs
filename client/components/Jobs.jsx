import React from 'react'
// import {Link} from 'react-router-dom'
// import jobs from '../../data.js'


// const jobList = props.jobList
    

class Jobs extends React.Component {
    constructor(props) { 
        super(props)
        // console.log("Props in Jobs constructor: ", props)
        this.state = props.AppState
        console.log("Jobs State Cons: ", this.state)
    }

    render() {
    // get data from state
    const jobsData = this.state.jobsData
    console.log("Jobs Data Jobs Render: ", jobsData)
        
    return (
        <div>
        <h2>Jobs List Below</h2>
        <ul>
        {console.log("IN UL ", jobsData, jobsData[0])}
        {jobsData.map((job, i) =>  <li key={i}>Job Title: {job.title}. Description: {job.description}</li> )}
        </ul>
        <h2>Jobs List Above</h2>
        </div>
    )
}
}

export default Jobs;