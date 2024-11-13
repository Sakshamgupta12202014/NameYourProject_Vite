import React from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./../Header/Header.jsx";
import SearchBox from "./../SearchBox/SearchBox.jsx";
import ResultsContainer from "./../ResultsContainer/ResultsContainer.jsx";
import name from "@rstacruz/startup-name-generator";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "../NameCart/Cart.jsx";
import Lenis from '@studio-freight/lenis';

class App extends React.Component {

  useEffect = (() => {
    const lenis = new Lenis({
      duration: 2.5, // Higher duration for extra smooth, slow scrolling
      easing: (t) => 1 - Math.pow(1 - t, 4), // Easing with a gentle, gradual finish
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  state = {
    headerText: "Search Name for your projects!",
    headerImageExpanded: true,
    headerTextExpanded: true,
    suggestedNames: [],
    result: false,
    selectedNames: [],
  };

  handleInputChange = (data) => {
    this.setState({
      headerImageExpanded: data.length > 0 ? false : true,
      headerTextExpanded: data.length > 0 ? false : true,
      suggestedNames: data.length > 0 ? name(data) : [],
      result: data.length > 0 ? true : false,
    });
  };

  handleAddToCart = (name) => {
    this.setState((prevState) => ({
      selectedNames: [...prevState.selectedNames, name], // Add selected name to cart
    }));
    console.log(this.state.selectedNames)
  };

  render() {
    return (
      <div className="mainApp">
        <Header
          headerImageExpanded={this.state.headerImageExpanded}
          headerTextExpanded={this.state.headerTextExpanded}
          headTitle={this.state.headerText}
        />

        {/* Button to redirect to Cart
        <Link to="/cart">
          <button className="cart-button">Go to Cart</button>
        </Link> */}

        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer
          suggestedNames={this.state.suggestedNames}
          showHeading={this.state.result}
          onAddToCart={this.handleAddToCart}
        />

        <Cart selectedNames={this.state.selectedNames} /> {/* Display Cart */}
      </div>
    );
  }
}

export default App;

{
  /* <h3>{this.state.headerText}</h3> */
}
{
  /* <button onClick={() => {
            this.setState({
                headerText: "Tada!!"
            });
        }}>Click Me!</button> */
}
