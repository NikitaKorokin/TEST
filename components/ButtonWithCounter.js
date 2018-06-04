export default class ButtonWithCounter extends React.Component {
    /*state = {
      "counter": 0,
    }*/
  
    render() {
      return <>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onChange}>
          +
        </button>
        <span>{this.props.counter}</span>
      </>
    }
  }