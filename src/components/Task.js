// not use yet
import React, { Component } from "react";

export default class Task extends Component {
  state = {
    tasks: [
      { Id: "1", title: "Go to the groceries store", status: "Done" },
      { Id: "2", title: "Re-order music playlist", status: "Pending"},
      { Id: "3", title: "Call the bike shop", status: "Pending"},
      { Id: "4", title: "Buy flowers", status: "Done"},
      { Id: "5", title: "Clean the kitchen", status: "Done"}
    ]
  }
}

<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> {this.state.errors[0]}.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> : null