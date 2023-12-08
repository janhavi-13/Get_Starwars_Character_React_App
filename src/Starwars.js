import React from "react";


class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldBeDisplayed: false,
      name: null,
      gender: null,
      imgPath: null,
      affiliations: [],
    };
  }
  getNewCharacter() {
    const url =
      "https://akabab.github.io/starwars-api/api/id/" +
      String(Math.round(Math.random() * 88)) +
      ".json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          shouldBeDisplayed: true,
          name: data.name,
          gender: data.gender,
          imgPath: data.image,
          affiliations: data.affiliations,
        });
      });
  }
  render() {
    const affiliations = this.state.affiliations.map((affiliation) => {
        return <li>{affiliation}</li>
    })
    return (
      <div>
        {this.state.shouldBeDisplayed && (
          <div>
            <h1>{this.state.name}</h1>
            <p>Gender : {this.state.gender}</p>
            <img src={this.state.imgPath} alt="not found" height="400px" />
            <ul>
              Affiliations : {affiliations}
            </ul>
          </div>
        )}
        <button className="btn" onClick={() => this.getNewCharacter()}>
          Get new character
        </button>
      </div>
    );
  }
}

export default Starwars;
