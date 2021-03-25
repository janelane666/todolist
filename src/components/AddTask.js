import React, { Component } from "react"

/*
this.props = {
  sendLogs: function() {}
}
*/

export default class AddTask extends Component {
  state = {
    title: "",
    errors: ""
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  }

  isValidForm = () => {
    return this.state.title.trim().length !== 0

    /* if (this.state.title.trim().length === 0) {
      return false
     } else {
      return true
    } */
  }

  handleSaveTitle = (event) => {
    event.preventDefault()

    if(this.isValidForm()) {
      this.props.sendNewTask({
        title: this.state.title,
      })
      this.setState({title: "", errors: ""})
    } else {
      this.setState({errors: this.state.errors.concat("Please fill a new task")})
    }
  }

  render() {
    return (
      <div className="add-task">
        {this.state.errors.length > 0 ?
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> {this.state.errors}.
          </div> : null
        }
        <form onSubmit={this.handleSaveTitle}>
          <div className="form-group">
            <input
              value={this.state.title}
              className="form-control"
              placeholder="Enter Title"
              onChange={this.handleTitleChange}
            />
          </div>
          <button type="submit" className="form-control btn btn-primary">
            Add New Task
          </button>
        </form>
      </div>
    )
  }
}