import React, { Component } from "react"

export default class AddTask extends Component {
  state = {
    title: "",
    status: "Pending"
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  }

  handleStatusChange = (event) => {
    this.setState({status: event.target.value})
  }

  handleToDoSubmit = (event) => {
    event.preventDefault()
    this.props.onAdd({
      title: this.state.title,
      status: this.state.status
    })
    this.setState({
      title: "",
      status: "Pending"
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleToDoSubmit}>
          <div className="form-group">
            <input value={this.state.title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title" />
          </div>
          <button type="submit" className="form-control btn btn-primary" >Add New Task</button>
        </form>
      </div>
    )
  }
}