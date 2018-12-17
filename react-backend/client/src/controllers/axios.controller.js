import axios from "axios";

// model
import { decrypt } from "../models/crypt.model";

// controller
import {
  setTableData,
  setTableColumns,
  setTableModeColumns,
  setTableDeleteColumns
} from "./state.controller";

const ip = true ? "192.168.42.212" : "localhost";

export function setTableList(bind) {
  axios.post("http://" + ip + ":3000/dbCtrl/TableList").then(res => {
    let data = [];
    decrypt(res.data).forEach(element => {
      data.push(setTableData(element)[0]);
    });
    bind.setState({ data: data });
  });
}

export function setColumnList(bind) {
  axios
    .post("http://" + ip + ":3000/dbCtrl/ColumnList?table=" + bind.state.table)
    .then(res => {
      let columns = [];
      let deleteColumns = [];
      decrypt(res.data).forEach(element => {
        columns.push(setTableColumns(element)[0]);
        deleteColumns.push(setTableDeleteColumns(element)[0]);
      });
      columns.push(setTableModeColumns(bind)[0]);
      bind.setState({ columns: columns, deleteColumns: deleteColumns });
    });
}

export function setList(bind) {
  axios
    .post("http://" + ip + ":3000/dbCtrl/List?table=" + bind.state.table)
    .then(res => {
      bind.setState({ data: decrypt(res.data) });
    });
}
