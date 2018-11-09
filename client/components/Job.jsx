import React from 'react'
// import {Link} from 'react-router-dom'
// import jobs from '../../data.js'

// const jobList = props.jobList

class Job extends React.Component {
    constructor(props) {
        super(props)
        // console.log("Props in Jobs constructor: ", props)
        this.state = props.AppState
        console.log("Jobs State Cons: ", this.state)
    }

    render() {
        // get data from state
        const jobsData = this.state.jobsData
        const jobId = this.props.match.params.id
        const job = jobsData.find((job) => {
            return job.id == jobId
        })
        
        return (
            <div className="panel">
                <h2>Job name: {job.title}</h2>
                <p>Job description: {job.description}</p>
                <p>Employer Name: {job.employer}</p>
                <p>Date Info: {job.dateInfo}</p>
                <p>Job claimer: {job.claimer || 'unclaimed'}</p>
                <p>{job.claimer ? job.claimer_comment : ''}</p>
            </div>
        )
    }
}

export default Job;