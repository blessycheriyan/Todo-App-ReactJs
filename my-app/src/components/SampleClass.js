import React from "react";

class SampleClass extends React.Component {
  showMyName() {
    let name = "Web Diary";
    return name;
  }

  render() {
    let text = "This is test";

    return (
      <div>
        <h3> {text} </h3>
        <h4>{this.props.copyRight}</h4>
        <h5>{this.showMyName()}</h5>
      </div>
    );
  }
}

export default SampleClass;
