import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term
        },
        headers: {
          Authorization:
            "Client-ID 8697a5426eff67bdbbdff778e5224d83ef7aec385b25f5c284ef2ca2d27ca290"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;
