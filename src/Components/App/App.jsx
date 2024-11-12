import React from "react";
import "./App.css";
import Header from "./../Header/Header.jsx";
import SearchBox from "./../SearchBox/SearchBox.jsx";
import ResultsContainer from "./../ResultsContainer/ResultsContainer.jsx";
import name from "@rstacruz/startup-name-generator";

class App extends React.Component {
  state = {
    headerText: "Search Name for your projects!",
    headerImageExpanded: true,
    headerTextExpanded: true,
    suggestedNames: [],
    result: false,
  };

  handleInputChange = (data) => {
    this.setState({
      headerImageExpanded: data.length > 0 ? false : true,
      headerTextExpanded: data.length > 0 ? false : true,
      suggestedNames: data.length > 0 ? name(data) : [],
      result: data.length > 0 ? true : false,
    });
  };

  render() {
    return (
      <div className="mainApp">
        <Header
          headerImageExpanded={this.state.headerImageExpanded}
          headerTextExpanded={this.state.headerTextExpanded}
          headTitle={this.state.headerText}
        />

        <SearchBox onInputChange={this.handleInputChange} />

        <ResultsContainer
          suggestedNames={this.state.suggestedNames}
          showHeading={this.state.result}
        />

        {/* <h3>{this.state.headerText}</h3> */}
        {/* <button onClick={() => {
                    this.setState({
                        headerText: "Tada!!"
                    });
                }}>Click Me!</button> */}
      </div>
    );
  }
}

export default App;

