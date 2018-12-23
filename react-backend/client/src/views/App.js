import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Main } from "../router";

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
        <Navbar />
        <Header title={this.state.title} />
        <Main />
      </div>
    );
  }
}

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        首頁
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <NavItem />
    </div>
  </nav>
);

const NavItem = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/database/control">
          資料庫
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/malfunction">
          報修單
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/processing">
          維修單
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          產品
        </Link>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          to="/user"
        >
          <i className="fas fa-user" /> 歡迎 Brad
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/user/profile">
            <i className="fas fa-user-circle" /> 個人資料
          </Link>
          <Link className="dropdown-item" to="/user/settings">
            <i className="fas fa-cog" /> 設定
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user/login">
          <i className="fas fa-user-times" /> 登出
        </Link>
      </li>
    </ul>
  </div>
);

const Header = ({ title }) => (
  <header className="bg-primary text-light ">
    <div className="container">
      <div className="row">
        <h1 className="col-md-6">
          <i className="fas fa-cog" />
          {title}
        </h1>
      </div>
    </div>
  </header>
);
