import React from 'react'

import jobs from '../../data.js'


function Jobs(props) {
    const jobList = props.jobs
    console.log(jobList)
    return (
        <ul>
            {props.jobList.map((item, i) => {
                return <li key = {`job-number-$(i)`}>{item}</li>
            })}
        </ul>
    )
}

// const Jobs = (props) => {
//     console.log('props ' + props)
//     const jobList = {jobs}
//     return (
//       <div>
//         <ul>
//           {jobList.map(jobby => {
//               return <li key={jobby}>{jobby}</li>
//           })}
//         </ul>
     

//       </div>
//     )
//   }

// class Jobs extends React.Components {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//     return (
//         <h1>React development has begun!</h1>
//   )
// }
// }

export default Jobs