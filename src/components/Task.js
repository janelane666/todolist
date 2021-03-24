import React, { Component } from "react";

export default class Task extends Component {
  state = {
    tasks: [
      { Id: "1", Title: "Go to the groceries store", Status: "Done" },
      { Id: "2", Title: "Re-order music playlist", Status: "Pending"},
      { Id: "3", Title: "Call the bike shop", Status: "Pending"},
      { Id: "4", Title: "Buy flowers", Status: "Done"},
      { Id: "5", Title: "Clean the kitchen", Status: "Done"}
    ]
  }
}