import React, { Component } from "react"

/*
this.props = {
  sendLogs: function() {}
}
*/

export default class AddTask extends Component {
  state = {
    title: "",
    errors: []
  }

  handleChange = (event) => {
    const newState = {
      title: event.target.value
    }

    this.setState(newState)
  }

  isValidForm = () => {
    // return this.state.title.trim().length !== 0

    if (this.state.title.trim().length === 0) {
      return false
    } else {
      return true
    }
  }

  handleMaxDrinkingTea = (event) => {
    event.preventDefault()

    if(this.isValidForm()) {
      this.props.sendLogs({
        title: this.state.title,
      })
    } else {
      const newState = {
        errors: this.state.errors.concat("Please fill a new task")
      }

      this.setState(newState)
    }
  }


  render() {
    return (
      <div>
        {this.state.errors.length > 0 ?
          <p>{this.state.errors[0]}</p> : null
        }
        <form className="add-task" onSubmit={this.handleMaxDrinkingTea}>
          <div className="form-group">
            <input
              value={this.state.title}
              className="form-control"
              placeholder="Enter Title"
              onChange={this.handleChange}
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