import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  handleClick = () => {
    this.setState({ spinningTheChamber: true })
    this.timeout = setTimeout(() => {
      const randomNumber = Math.ceil(Math.random() * 8)
      this.setState({ chamber: randomNumber, spinningTheChamber: false })
    }, 2000);
  } 

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }  

  renderContent() {
    if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    }

    else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!!'
    }

    else {
      return "you're safe!"
    }
  }
  
  render() {
    return (
      <div>
        <p>{this.renderContent()}</p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;