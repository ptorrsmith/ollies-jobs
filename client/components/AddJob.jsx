import React from 'react'
// import {Link} from 'react-router-dom'
// import jobs from '../../data.js'


// const jobList = props.jobList


class AddJob extends React.Component {
    constructor(props) {
        super(props)
        // console.log("Props in Jobs constructor: ", props)
        this.state = {
            title: "",
            description: "",
            employer: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(evt) {
        evt.preventDefault()
        this.props.saveItem(this.state)
        this.setState({
            title: "",
            description: "",
            employer: ""
        })
    }
    handleChange(evt) {
        console.log(evt.target.value)
        console.log(evt.target.name)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


render() {
    // get data from state


    return (

        <form onSubmit={this.handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' title='title'
                name="title"
                className='u-full-width'
                value={this.state.title}
                onChange={this.handleChange}
            />
            <label htmlFor='description'>Description</label>
        <textarea name='description'
            className='u-full-width'
            value={this.state.description}
            onChange={this.handleChange}
        />
        <label htmlFor='employer'>Employer</label>
        <textarea name='employer'
            className='u-full-width'
            value={this.state.employer}
            onChange={this.handleChange}
            
        />
        <input type='submit' className='button-primary' value='Add' />
      </form>
        )

}
}

export default AddJob;