import { Component } from "react";
import Header from "../components/header";
import "../static/styles/style.scss";


class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    fetch("/api/features")
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data.data })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div >
        <Header />

        <h1>
          Welcome to next and epxress world
          </h1>
        <ul>
          {
            data && data.map(index => <li>{index}</li>)
          }

        </ul>
      </div>
    )
  }
}

export default Index;
