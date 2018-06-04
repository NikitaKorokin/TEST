export default class extends React.Component {
    state = {
      "counter": 0,
      "numbers": [1,3,5,7],
    }
  
    handleOnClick = () => {
      this.setState({ "counter": this.state.counter + 1 })
    }
  
    render() {
      let listOfHellos = this.state.numbers
        .filter((number) => number < 6)
        .map((number) => <li>Привет {number}</li>)
      let numberOfHellos = this.state.counter
      if (numberOfHellos > 10){
          numberOfHellos = 10
      }
      return (
        <>
          <button onClick={this.handleOnClick}>Нажми</button>
          <p>{this.state.counter}</p>
          <ul>{listOfHellos}</ul>
        </>
      )
    }
  }
