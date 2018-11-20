import React, { Component } from "react";
import "./opca.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div class=".z-depth-1-half">
          <Navbar
            color="bg-primary"
            dark
            expand="md"
            scrolling
            style={{ marginBottom: "20px" }}
          >
            <NavbarBrand>
              <strong className="white-text">
                OPCA - Online Product Credibility Analysis
              </strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse1")} />
            <Collapse
              id="navbarCollapse1"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="/">Product Search and Analysis</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/HowToUseOPCA">How to Use OPCA</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Feedback">Provide Feedback</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/AboutUs">About Us</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          <Route path="/HowToUseOPCA" component={HowToUse} />
          <Route path="/Feedback" component={Feedback} />
          <Route path="/AboutUs" component={AboutUs} />
        </div>
      </Router>
    );
  }
}

class HowToUse extends Component {
  state = {
    howToModal: true
  };

  toggle() {
    this.setState({
      howToModal: !this.state.howToModal
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.howToModal}
          toggle={() => this.toggle()}
          centered
        >
          <ModalHeader toggle={() => this.toggle()}>
            How To Use OPCA
          </ModalHeader>
          <ModalBody>
            First, determine the Amazon product you want to search for. This can
            be either a link to an Amazon page or a product keyword, like
            'sunglasses'. Next, hit Enter. This will start the OPCA analysis.
            <b>
              'Note to Matt: elaborate more on this as the site progresses.'
            </b>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle()}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Feedback extends Component {
  render() {
    return (
      <div>
        <p>test1</p>
      </div>
    );
  }
}

class AboutUs extends Component {
  render() {
    return (
      <div>
        <p>test2</p>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log(this.props.searchText);
    }
  }

  render() {
    return (
      <div className="search">
        <h1>What can we analyze for you?</h1>

        <div className="input-group">
          <form id="searchField">
            <input
              className="form-control"
              id="user-search"
              type="text"
              placeholder="Enter product URL or product..."
              aria-label="Search"
              value={this.props.searchText}
              onChange={this.handleSearchTextChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

class InfoCarousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p>
              Begin by finding a product that you want OPCA to analyze. This can
              be a link to a product on Amazon.com or a general name of a
              product, like "sports sunglasses". OPCA will analyze product
              reviews, critic reviews, and more to generate an overall sentiment
              score for the user.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              OPCA will analyze reviews of a product and identify fake reviews
              that would fabricate the Amazon product customer rating displayed
              on their website. We also analyze consumer ratings by established
              organizations like ConsumerReports.org.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              Fake reviews have grown rampant recently due to the increase in
              popularity of online shopping. Shoppers who are not wary of this
              may end up purchasing a product that ends up faulty and possibly
              dangerous. OPCA works to eliminate this problem by determining the
              "true grade" of an online product so the user can make a
              well-informed decision when shopping online.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              OPCA was developed by a group of computer engineering students as
              a senior design project. We are a team of four, consisting of
              Brent Ufkes, Alex Glahn, Samuel Livingston, and Matthew Staudigel.
            </p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

class ProductSearchPage extends Component {}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <InfoCarousel />
      </div>
    );
  }
}

export default HomeScreen;
