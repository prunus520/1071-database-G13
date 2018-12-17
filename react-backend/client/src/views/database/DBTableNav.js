import React, { Component } from "react";

// controller
import {
  TableNavAdd,
  TableNavDelete
} from "../../controllers/modal.controller";
import {
  setTableNavColumns,
  setTableNavModeColumns
} from "../../controllers/state.controller";

export default class extends Component {
  constructor(props) {
    super(props);
    let columns = [];
    this.setNavColumns(props, columns);
    this.state = {
      navColumns: props.navColumns,
      columns: columns,
      deleteList: props.deleteList
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navColumns !== this.props.navColumns) {
      let columns = [];
      this.setNavColumns(nextProps, columns);
      this.setState({
        navColumns: nextProps.navColumns,
        columns: columns
      });
    }
    if (nextProps.deleteList !== this.props.deleteList) {
      this.setState({ deleteList: nextProps.deleteList });
    }
  }

  render() {
    return (
      <div>
        <section className="bg-light py-1">
          <div className="row">
            {this.add()}
            {this.delete()}
          </div>
        </section>
      </div>
    );
  }

  setNavColumns(props, columns) {
    const navColumns = JSON.parse(props.navColumns);
    navColumns.forEach((element, i) => {
      if (i !== navColumns.length - 1) {
        columns.push(setTableNavColumns(element)[0]);
      }
    });

    columns.push(setTableNavModeColumns(this)[0]);
  }

  addOK() {
    const navColumns = JSON.parse(this.state.navColumns);
    let row = {};
    let count = true;
    for (let i = 1; i < navColumns.length - 1; i++) {
      if (document.getElementById(navColumns[i].COLUMN_NAME).value === "")
        count = false;
      row[navColumns[i].COLUMN_NAME] = document.getElementById(
        navColumns[i].COLUMN_NAME
      ).value;
    }
    if (count) this.props.handleAdd(row);
  }

  addColumn() {
    let column = [];
    const navColumns = JSON.parse(this.state.navColumns);
    for (let i = 0; i < navColumns.length - 1; i++) {
      column.push(
        <div key={i} className="form-group row">
          <label
            htmlFor={navColumns[i].COLUMN_NAME}
            className="col-sm-2 col-form-label"
          >
            {navColumns[i].COLUMN_COMMENT}
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly={navColumns[i].COLUMN_NAME === "ID" ? "readonly" : ""}
              className="form-control"
              id={navColumns[i].COLUMN_NAME}
            />
          </div>
        </div>
      );
    }
    return column;
  }

  add() {
    return (
      <div className="col-4 col-md-2">
        <button
          className="btn btn-warning btn-block"
          data-toggle="modal"
          data-target="#addModal"
        >
          <i className="fas fa-plus" /> 新增
        </button>
        {TableNavAdd(this)}
      </div>
    );
  }

  delete() {
    return (
      <div className="col-4 col-md-2">
        <button
          className="btn btn-warning btn-block"
          data-toggle="modal"
          data-target="#deleteListModal"
        >
          <i className="fas fa-plus" /> 刪除
        </button>
        {TableNavDelete(this)}
      </div>
    );
  }
}
