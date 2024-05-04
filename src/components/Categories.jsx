import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Hemmesi",
        },
        {
          key: "phones",
          name: "Telefon",
        },
        {
          key: "watches",
          name: "Akylly sagat",
        },
        {
          key: "fitness-watches",
          name: "Fitnes sagat",
        },
        {
          key: "earbuds",
          name: "Gulaklyk",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Categories;
