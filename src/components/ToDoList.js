import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTask from "./AddTask.js";
import data from "../data.json";
import Calendar from "./Calendar.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

export default class ToDoList extends Component {
  state = {
    tasks: data
  }

  sendNewTask = (formData) => {
    /*
    formData = {
      title: string
    }
    {
      title: this.state.title,
    }
     */
    const newTask = {
      id: this.state.tasks.length,
      title: formData.title,
      completed: false
    }

    this.setState({tasks: this.state.tasks.concat(newTask)})
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
        <div>
          <Calendar></Calendar>
        </div>
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
        <AddTask sendNewTask={this.sendNewTask}></AddTask>
      </div>
    )
  }
}