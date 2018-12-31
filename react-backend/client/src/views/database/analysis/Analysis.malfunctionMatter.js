import React, { PureComponent } from "react";
import { Polar } from "react-chartjs-2";
import { postAnalysisMalfunctionData } from "../../../controllers/axios.controller";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [
          {
            data: [],
            backgroundColor: [
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "indigo",
              "purple"
            ]
          }
        ],
        labels: []
      }
    };
    document.title = "資料庫";
  }

  componentDidMount() {
    postAnalysisMalfunctionData(this);
  }

  render() {
    return (
      <div>
        <Polar data={this.state.data} />
      </div>
    );
  }
}
