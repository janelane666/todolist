import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTask from "./AddTask.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

export default class ToDoList extends Component {
  state = {
    tasks: [
      { id: "1", title: "Go to the groceries store", status: "Done" },
      { id: "2", title: "Re-order music playlist", status: "Pending"},
      { id: "3", title: "Call the bike shop", status: "Pending"},
      { id: "4", title: "Buy flowers", status: "Done"},
      { id: "5", title: "Clean the kitchen", status: "Done"}
    ]
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  deleteTask = (task) => {
    const filteredItems = this.state.tasks.filter(x => x.id !== task.id)

    this.setState({tasks: filteredItems})
  }

  editTask = (x) => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        if (task.id === x.id) {
          return {
            ...task,
            status: task.status === "Done" ? "Pending" : "Done"
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
                  <tr key={x.id}>
                    <td>{x.title}</td>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </input>
                      </div>
                    </td>
                    <td style={{ color: x.status === "Done" ? "green" : "red"}}>
                      {x.status}
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