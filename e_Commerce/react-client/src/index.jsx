import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Login from "./Login.jsx";
import AllProduct from "./AllProduct.jsx";
import OneProduct from "./OneProduct.jsx";
import axios from "axios";
import Admin from "./Admin.jsx";
import Addproduct from "./Addproduct.jsx";
import ListCommande from "./ListCommande.jsx";
import Confirmed from "./Confirmed.jsx";
import Update from "./Update.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "all",
      data: [],
      productDetails: [],
      admin: false,
      upData: [],
    };
    this.handleclickForUpdate = this.handleclickForUpdate.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleClikForAdmin = this.handleClikForAdmin.bind(this);
    this.funcreturn = this.funcreturn.bind(this);
  }
  handleClikForAdmin() {
    this.setState({
      view: "admin",
      admin: true,
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    axios.get("/api/product").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }
  funcreturn() {
    this.setState({ view: "all" });
  }
  handleclickForUpdate(para) {
    this.setState({ view: "update", upData: para });
  }
  handleDetails(p) {
    this.setState({ productDetails: p });
    this.setState({ view: "productDetails" });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === "all") {
      return (
        <AllProduct
          func={this.handleDetails}
          items={this.state.data}
          handleClick={() => this.changeView("anypostview")}
        />
      );
    } else if (view === "productDetails") {
      return (
        <OneProduct func={this.funcreturn} item={this.state.productDetails} />
      );
    } else if (view === "login") {
      return <Login func={this.handleClikForAdmin} />;
    } else if (view === "admin") {
      return (
        <Admin func1={this.handleclickForUpdate} items={this.state.data} />
      );
    } else if (view === "add") {
      return <Addproduct />;
    } else if (view === "listcmd") {
      return <ListCommande />;
    } else if (view === "confirmed") {
      return <Confirmed />;
    } else if (view === "update") {
      return <Update upItem={this.state.upData} />;
    }
  }
  render() {
    return (
      <center>
        <div>
          <div className="nav">
            <span className="loggo" onClick={() => this.changeView("all")}>
              PROMO_SHOP
            </span>
            {!this.state.admin && (
              <span
                className={
                  this.state.view === "all" ? "nav-selected" : "nav-unselected"
                }
                onClick={() => this.changeView("all")}
              >
                Products
              </span>
            )}
            {this.state.admin === true && (
              <div>
                <span onClick={() => this.changeView("admin")}>Home</span>
                <span onClick={() => this.changeView("add")}>
                  {"    "}
                  Add_product{"    "}
                </span>
                <span onClick={() => this.changeView("listcmd")}>
                  {"    "} Commands
                </span>
                <span onClick={() => this.changeView("confirmed")}>
                  {" "}
                  Confirmed
                </span>
              </div>
            )}
            {!this.state.admin && (
              <span
                className="nav-unselected"
                onClick={() => this.changeView("login")}
              >
                Login
              </span>
            )}
          </div>

          <div className="main">{this.renderView()}</div>
        </div>
      </center>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
