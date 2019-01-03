import React, { PureComponent } from "react";

// chart
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class extends PureComponent {
  constructor(props) {
    super(props);
    document.title = "資料庫";
  }

  render() {
    return (
      <div>
        <Pie data={data} />
      </div>
    );
  }
}
