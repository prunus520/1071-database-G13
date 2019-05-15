import React, { Component } from "react";

import { Main } from "../router";

import logo from "../logo.svg";

import "./App.css"

// model
import {
  CustomClickLink,
  CustomActiveClickLink,
  CustomActiveDropdownClickLink
} from "../models/custom.model";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  componentDidMount() {
    this.setState({ title: document.title });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== document.title) {
      this.setState({ title: document.title });
    }
  }

  render() {
    return (
      <div>
        <Navbar title={this.state.title} />
        <Main />
      </div>
    );
  }
}

const Navbar = ({ title }) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-white topbar mb-4 static-top shadow">
    <div className="container">
      {/* <img className="navbar-brand" src={logo} width="55em" height="55em" alt={"logo"} /> */}
      <button
        id="navbarBtn"
        className="navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarNav"
        style={{ borderWidth: "0" }}>
        <span className="navbar-toggler-icon" />
      </button>
      <h1 className="navbar-toggler">{title}</h1>
      <button
        id="navbarUserBtn"
        className="navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navUserCell"
        style={{ borderWidth: "0" }}>
        <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" width="35em" height="35em" alt={"Sticker"} />
      </button>
      <button
        className="navbar-toggler collapsed display-none"
        data-toggle="collapse"
        style={{ borderWidth: "0" }}>
        <CustomActiveClickLink
          active={title}
          activeOptions={["登入", "登出"]}
          to="/user/login"
          content={<i className="fas"> 登入</i>}
        />
      </button>
      <NavItem title={title} />
      <NavUserCell title={title} />
      <NavUserPC title={title} />
    </div>
  </nav>
);

const NavItem = ({ title }) => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <CustomActiveClickLink
          active={title}
          activeOptions={["ResNetCMMS"]}
          to="/"
          content={<i className="fas"> 首頁</i>}
        />
      </li>
      <li className="nav-item dropdown no-arrow">
        <CustomActiveDropdownClickLink
          active={title}
          activeOptions={["資料庫"]}
          to="/database"
          dataToggle="dropdown"
          content={<i className="fas"> 資料庫 </i>}
        />
        <div className="dropdown-menu shadow animated--grow-in" style={{ borderRadius: "1em" }}>
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/database/analysis/repair"
            content={<i className="fas"> 分析表</i>}
          />
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/database/crud"
            content={<i className="fas"> 表格編輯</i>}
          />
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/database/csv"
            content={<i className="fas"> 匯出csv</i>}
          />
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/database/control"
            content={<i className="fas"> 欄位控制</i>}
          />
        </div>
      </li>
      <li className="nav-item">
        <CustomActiveClickLink
          active={title}
          activeOptions={["報修單"]}
          to="/repair/malfunction"
          content={<i className="fas"> 報修單</i>}
        />
      </li>
      <li className="nav-item">
        <CustomActiveClickLink
          active={title}
          activeOptions={["維修單"]}
          to="/repair/processing"
          content={<i className="fas"> 維修單</i>}
        />
      </li>
    </ul>
  </div>
);

const NavUserPC = ({ title }) => (
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown no-arrow">
        <CustomActiveDropdownClickLink
          active={title}
          activeOptions={["個人資料", "設定"]}
          to="/user"
          dataToggle="dropdown"
          content={
            <div>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" width="25em" height="25em" alt={"Sticker"} />
              &nbsp;&nbsp;
              <i className="fas"> 郭英杰 </i>
            </div>
          }
        />
        <div className="dropdown-menu shadow animated--grow-in" style={{ borderRadius: "1em" }}>
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/user/profile"
            content={<div><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">個人資料</span></div>}
          />
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/user/settings"
            content={<div><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">設定</span></div>}
          />
          <div className="dropdown-divider"></div>
          <CustomClickLink
            className="dropdown-item"
            style={{ borderRadius: "0.5em" }}
            to="/"
            content={<div><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">登出</span></div>}
          />
        </div>
      </li>
      <li className="nav-item display-none">
        <CustomActiveClickLink
          active={title}
          activeOptions={["登入", "登出"]}
          to="/user/login"
          content={<i className="fas"> 登入</i>}
        />
      </li>
    </ul>
  </div>
);

const NavUserCell = ({ title }) => (
  <div id="navUserCell" className="collapse navbar-collapse">
    <ul className="navbar-nav display-none">
      <li className="nav-item">
        <CustomClickLink
          className="dropdown-item"
          style={{ borderRadius: "0.5em" }}
          to="/user/profile"
          content={<div><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">個人資料</span></div>}
        />
      </li>
      <li className="nav-item">
        <CustomClickLink
          className="dropdown-item"
          style={{ borderRadius: "0.5em" }}
          to="/user/settings"
          content={<div><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">設定</span></div>}
        />
      </li>
      <div className="dropdown-divider"></div>
      <li className="nav-item">
        <CustomClickLink
          className="dropdown-item"
          style={{ borderRadius: "0.5em" }}
          to="/"
          content={<div><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i><span className="fas">登出</span></div>}
        />
      </li>
    </ul>
  </div>
);
