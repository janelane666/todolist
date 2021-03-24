import React, { Component } from "react"

export default class AddTask extends Component {
  state = {
    Title: "",
    Status: "Pending"
  }

  handleTitleChange = (event) => {
    this.setState({Title: event.target.value})
  }

  handleStatusChange = (event) => {
    this.setState({Status: event.target.value})
  }

  handleToDoSubmit = (event) => {
    event.preventDefault()
    this.props.onAdd({
      Title: this.state.Title,
      Status: this.state.Status
    })
    this.setState({
      Title: "",
      Status: "Pending"
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleToDoSubmit}>
          <div className="form-group">
            <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title" />
          </div>
          <button type="submit" className="form-control btn btn-primary" >Add New Task</button>
        </form>
      </div>
    )
  }
}