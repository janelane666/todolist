import React, { Component } from "react"

export default class Calendar extends Component {
  currentDayOfWeek = () => {
    const weekDay = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday"
    }

    const dayNumber = new Date().getDay()

    const x = weekDay[dayNumber]

    return x
  }

  currentDay = () => {
    const currentDay = new Date().getDate()

    return currentDay
  }

  currentMonth = () => {
    const currentMonth = new Date().getMonth()

    return currentMonth
  }

  render() {
    return (
      <div>
        <div class="container" className="calendar">
          <div class="col-sm" className="day">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
          <div className="col-sm">
            <p>{this.currentDayOfWeek()}</p>
            <p>{this.currentDay()}</p>
          </div>
        </div>
      </div>
    )
  }
}
