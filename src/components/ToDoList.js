import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTask from "./AddTask.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

export default class ToDoList extends Component {
  state = {
    tasks: [
      { Id: "1", Title: "Go to the groceries store", Status: "Done" },
      { Id: "2", Title: "Re-order music playlist", Status: "Pending"},
      { Id: "3", Title: "Call the bike shop", Status: "Pending"},
      { Id: "4", Title: "Buy flowers", Status: "Done"},
      { Id: "5", Title: "Clean the kitchen", Status: "Done"}
    ]
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  deleteTask = (task) => {
    const filteredItems = this.state.tasks.filter(x => x.Id !== task.Id)

    this.setState({tasks: filteredItems})
  }

  editTask = (x) => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        if (task.Id === x.Id) {
          return {
            ...task,
            Status: task.Status === "Done" ? "Pending" : "Done"
          }
        } else {
            return task
          }
      })
    }))
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <AddTask onAdd={this.addTask}></AddTask>
        <div className="tasks-list">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Checkbox</th>
                <th>Status</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(x => {
                return (
                  <tr key={x.Id}>
                    <td>{x.Title}</td>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </input>
                      </div>
                    </td>
                    <td style={{ color: x.Status === "Done" ? "green" : "red"}}>
                      {x.Status}
                    </td>
                    <td>
                      <button className="btn" onClick={() => this.editTask(x)}>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </button>
                      <button className="btn" onClick={() => this.deleteTask(x)}>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}