import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTask from "./AddTask.js";
import data from "../data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

export default class ToDoList extends Component {
  state = {
    tasks: data
  }

  sendLogs = (fornData) => {
    /*
    fornData = {
      title: string
    }
    {
      title: this.state.title,
    }
     */
    console.log("Dada fron the forn")
    console.log(fornData)

    const newTask = {
      title: fornData.title,
      completed: false
    }

    const newState = {
      tasks: this.state.tasks.concat(newTask)
    }

    this.setState(newState)
  }

  checkTask = (x) => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        if (task.id === x.id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    }))
  }

  deleteTask = (task) => {
    const filteredItems = this.state.tasks.filter(x => x.id !== task.id)

    this.setState({tasks: filteredItems})
  }

  render() {
    return (
      <div>
        <h1>TO DO LIST</h1>
        <div className="tasks-list">
          <table className="table">
            <tbody>
              {this.state.tasks.map(x => {
                return (
                  <tr key={x.id}>
                    <td>
                      <div className="form-check">
                        <input className="form-check-input" onClick={() => this.checkTask(x)} type="checkbox" value="" id="flexCheckDefault">
                        </input>
                      </div>
                    </td>
                    <td className={x.completed ? "strike" : ""}>{x.title}</td>
                    <td>
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
        <AddTask sendLogs={this.sendLogs}></AddTask>
      </div>
    )
  }
}