import React from "react";

class DateDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;

    return (
      <div className="date-day-container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ">
          <span className="date">{currentDate.getDate()}</span>
          <div className="month-year d-flex flex-column">
            <div className="fw-bolder">
              {currentDate
                .toLocaleString("default", { month: "short" })
                .toUpperCase()}
            </div>
            <div className="fw-bold">{currentDate.getFullYear()}</div>
          </div>
        </div>
        <div className="fw-bolder">
          {currentDate
            .toLocaleString("default", { weekday: "long" })
            .toUpperCase()}
        </div>
      </div>
    );
  }
}

export default DateDay;
