import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "로딩중..." : "우리는 준비 됐어"}</div>;
  }
}

export default App;
