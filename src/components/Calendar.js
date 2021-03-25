import React, { Component } from "react"

export default class Calendar extends Component {
  currentDayOfWeek = () => {
    const weekDay = [
      {
        number: 0,
        letter: "Mon"
      }, {
        number: 1,
        letter: "Tue"
      }, {
        number: 2,
        letter: "Wed"
      }, {
        number: 3,
        letter: "Thu"
      }, {
        number: 4,
        letter: "Fri"
      }, {
        number: 5,
        letter: "Sat"
      }, {
        number: 6,
        letter: "Sun"
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
        <div className="calendar">
          {this.currentDayOfWeek().map(day => {
              return (
                <div className="col-sm">
                  <p>{day.letter}</p>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}
