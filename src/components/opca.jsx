import React, { Component } from "react";
import "./opca.css";

class HomeScreen extends Component {
  state = {};

  render() {
    return [
      <div class="home-page">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            OPCA - Online Product Credibility Analysis
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Product Search and Analysis{" "}
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  How to Use OPCA
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Provide Feedback
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        ,
        <div class="search">
          <h1>What can we analyze for you?</h1>
          <input
            class="form-control"
            id="user-search"
            type="text"
            placeholder="Enter product URL or product..."
            aria-label="Search"
          />

          <div
            id="carouselExampleIndicators"
            class="carousel-slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p>
                  Begin by finding a product that you want OPCA to analyze. This
                  can be a link to a product on Amazon.com or a general name of
                  a product, like "sports sunglasses". OPCA will analyze product
                  reviews, critic reviews, and more to generate an overall
                  sentiment score for the user.
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  OPCA will analyze reviews of a product and identify fake
                  reviews that would fabricate the Amazon product customer
                  rating displayed on their website. We also analyze consumer
                  ratings by established organizations like ConsumerReports.org.
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  Fake reviews have grown rampant recently due to the increase
                  in popularity of online shopping. Shoppers who are not wary of
                  this may end up purchasing a product that ends up faulty and
                  possibly dangerous. OPCA works to eliminate this problem by
                  determining the "true grade" of an online product so the user
                  can make a well-informed decision when shopping online.
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  OPCA was developed by a group of computer engineering students
                  as a senior design project. We are a team of four, consisting
                  of Brent Ufkes, Alex Glahn, Samuel Livingston, and Matthew
                  Staudigel.
                </p>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    ];
  }
}

export default HomeScreen;
