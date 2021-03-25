import React, { Component } from "react"

export default class Calendar extends Component {
  currentDayOfWeek = () => {
    const weekDay = [
      {
        number: 0,
        letter: "Mon",
        date : this.currentDay()-3
      }, {
        number: 1,
        letter: "Tue",
        date : this.currentDay()-2
      }, {
        number: 2,
        letter: "Wed",
        date : this.currentDay()-1
      }, {
        number: 3,
        letter: "Thu",
        date : this.currentDay()
      }, {
        number: 4,
        letter: "Fri",
        date : this.currentDay()+1
      }, {
        number: 5,
        letter: "Sat",
        date : this.currentDay()+2
      }, {
        number: 6,
        letter: "Sun",
        date : this.currentDay()+3
      }
    ]

    let day = weekDay.map(day => day.letter)


    const dayNumber = new Date().getDay() - 1

    const x = weekDay[0].letter

    return weekDay
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
        <div className="month">March 2021</div>
        <div className="calendar">
          <div className="date-calendar">
            {this.currentDayOfWeek().map(day => {
                return (
                  <div className="col-sm">
                    <p>{day.letter}</p>
                  </div>
                )
              }
            )}
          </div>
          <div className="date-calendar">
            {this.currentDayOfWeek().map(day => {
                return (
                  <div className="col-sm">
                    <p>{day.date}</p>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    )
  }
}
