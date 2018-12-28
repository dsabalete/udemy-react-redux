import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
