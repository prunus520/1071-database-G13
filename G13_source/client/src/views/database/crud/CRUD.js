import React, { Component } from "react";

// view
import CrudTable from "./CRUD.Table";
import CrudTableMenu from "./CRUD.TableMenu";

// controller
import { handleChangeTable } from "../../../controllers/CRUD.controller";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: "apply",
      left: false
    };
    document.title = "資料庫";
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      document.title = "登入";
      document.getElementById("Login").click();
    } else {
      const navbarLogin = document.getElementById("navbarLogin");
      let navbarLoginR = navbarLogin.getAttribute("class").replace("display-block-none", "display-none-none");
      document.getElementById("navbarLogin").setAttribute("class", navbarLoginR);
      const navUserPC = document.getElementById("navUserPC");
      let navUserPCR = navUserPC.getAttribute("class").replace("display-none-none", "display-block-none");
      document.getElementById("navUserPC").setAttribute("class", navUserPCR);

      const navbarLoginBtn = document.getElementById("navbarLoginBtn");
      let navbarLoginBtnR = navbarLoginBtn.getAttribute("class").replace("display-none-block", "display-none-none");
      document.getElementById("navbarLoginBtn").setAttribute("class", navbarLoginBtnR);
      const navbarUserBtn = document.getElementById("navbarUserBtn");
      let navbarUserBtnR = navbarUserBtn.getAttribute("class").replace("display-none-none", "display-none-block");
      document.getElementById("navbarUserBtn").setAttribute("class", navbarUserBtnR);
    }
  }

  render() {
    return (
      <div className="height-full container-fluid opacity animation-one" style={{ backgroundColor: "white" }}>
        <div className="white"></div>
        <div className="row">
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              <CrudTableMenu
                table={this.state.table}
                handleChangeTable={table => handleChangeTable(this, table)}
              />
            </div>
          </SwipeableDrawer>
          <CrudTable table={this.state.table} toggleDrawer={() => this.toggleDrawer("left", true)} />
        </div>
      </div>
    );
  }
}
