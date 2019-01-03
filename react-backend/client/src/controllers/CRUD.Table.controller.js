// model
import { decrypt } from "../models/crypt.model";
import { database } from "../models/axios.model";
import {
  CrudTableColumns,
  CrudTableDeleteColumns,
  CrudTableModeColumns
} from "../models/CRUD.Table.model";

// controller
import axios from "axios";

// table nav add
export const handleAddItem = (bind, row) => {
  postCrudTableAdd(bind, row);
};

// table select
export const addSelect = (bind, row) => {
  bind.select = [...bind.select, ...row];
};

export const deleteSelect = (bind, row) => {
  bind.select = bind.select.filter((x, i) => x !== row);
};

// table nav select
export const handleGetSelect = bind => {
  bind.setState({});
};

// table nav delete
export const handleDeleteItem = (bind, row, isBottom, info) => {
  if (isBottom) {
    let newData = bind.state.data;
    let newSelect = bind.select;
    row.filter((x, i) => {
      newData = newData.filter((xx, i) => x !== xx);
      newSelect = newSelect.filter((xx, i) => x !== xx);
      return false;
    });
    bind.select = newSelect;
    bind.setState({ data: newData });
  } else {
    info += "成功刪除ID:" + row.ID + "<br />";
    postCrudTableDelete(bind, row, info);
  }
};

// table edit or delete
export const getItem = (bind, row) => {
  bind.setState({ itemData: [row] });
};

export const deleteItem = (bind, row) => {
  postCrudTableDelete(bind, row, "成功刪除ID:" + row.ID);
  bind.setState({ data: bind.state.data.filter((x, i) => x !== row) });
};

// table edit
export const editItem = (bind, row) => {
  postCrudTableEdit(bind, row, "成功編輯ID:" + row.ID);
  bind.state.data.filter((x, i) => {
    if (x === bind.state.itemData[0]) {
      const data = bind.state.data;
      data[i] = row;
      bind.setState({ data: data });
      return true;
    }
    return false;
  });
};

// handle info
export const handleInfo = (bind, info) => {
  bind.setState({ info: [info] });
  document.getElementById("info").click();
};

export const handleEditable = bind => {
  new Promise((resolve, reject) => {
    bind.setState({
      info: [
        {
          title: "警告",
          content:
            "確定要" + (bind.state.editable ? "關閉" : "開啟") + "快速編輯",
          cancel: true
        }
      ]
    });
    document.getElementById("info").click();
    document.getElementById("infoTrue").addEventListener("click", () => {
      resolve(true);
    });
    document.getElementById("infoFalse").addEventListener("click", () => {
      resolve(false);
    });
  }).then(res => {
    if (res) {
      bind.setState({ editable: !bind.state.editable });
      const newColumns = bind.state.columns;
      for (let i = 0; i < newColumns.length; i++) {
        newColumns[i].editable = bind.state.editable;
      }
      bind.setState({ columns: newColumns });
    }
  });
};

export const editForm = bind => {
  const newColumns = JSON.parse(
    JSON.stringify(
      bind.state.columns.map((x, i) => {
        return {
          COLUMN_NAME: x.dataField,
          COLUMN_COMMENT: x.text
        };
      })
    )
  );
  let row = { ID: bind.state.itemData[0].ID };
  for (let i = 1; i < newColumns.length - 1; i++) {
    if (
      document.getElementById(newColumns[i].COLUMN_NAME + "Edit").value !== ""
    ) {
      row[newColumns[i].COLUMN_NAME] = document.getElementById(
        newColumns[i].COLUMN_NAME + "Edit"
      ).value;
    }
  }
  editItem(bind, row);
};

export const postCrudTableColumns = bind => {
  axios
    .post(database + "ColumnList", { table: bind.state.table })
    .then(res => {
      let columns = [];
      let deleteColumns = [];
      let formColumns = [];
      decrypt(res.data).forEach(elm => {
        columns.push(CrudTableColumns(bind, elm));
        deleteColumns.push(CrudTableDeleteColumns(elm));
        formColumns.push(elm);
      });
      columns.push(CrudTableModeColumns(bind));
      bind.setState({
        columns: columns,
        deleteColumns: deleteColumns,
        formColumns: formColumns
      });
    })
    .catch();
};

export const postCrudTableData = bind => {
  axios
    .post(database + "List", {
      table: bind.state.table
    })
    .then(res => {
      bind.setState({
        data: decrypt(res.data).filter((x, i) => {
          if (x.date !== undefined) {
            x.date = x.date.split(".")[0];
          }
          return x;
        })
      });
    })
    .catch();
};

export const postCrudTableEdit = (bind, row, info = "") => {
  axios
    .post(database + "update", { table: bind.state.table, row: row })
    .then(res => {})
    .catch();
  if (info !== "")
    handleInfo(bind, {
      title: "警告",
      content: info,
      cancel: false
    });
};

export const postCrudTableDelete = (bind, row, info) => {
  axios
    .post(database + "delete", {
      table: bind.state.table,
      id: row.ID
    })
    .catch();
  handleInfo(bind, {
    title: "警告",
    content: info,
    cancel: false
  });
};

export const postCrudTableAdd = (bind, row) => {
  axios
    .post(database + "add", { table: bind.state.table, row: row })
    .then(res => {
      row["ID"] = decrypt(res.data).insertId;
      bind.setState({ data: [...bind.state.data, row] });
    })
    .catch();
  handleInfo(bind, {
    title: "警告",
    content: "新增成功",
    cancel: false
  });
};

export const postCrudSearch = async (bind, search, id, callback) => {
  await axios
    .post(database + "searchColumnID", {
      table: bind.state.table,
      search: search,
      id: id
    })
    .then(res => {
      callback(decrypt(res.data));
    })
    .catch();
};
