import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
      lastName: prevState.lastName,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      firstName: prevState.firstName,
      lastName: !prevState.lastName,
    }))
  }

  renderFirstName = () => {
    const {firstName} = this.state
    return firstName ? <p className="name">Joe</p> : null
  }

  renderLastName = () => {
    const {lastName} = this.state
    return lastName ? <p className="name">Jonas</p> : null
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="column">
            <button className="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {this.renderFirstName()}
          </div>
          <div className="column">
            <button className="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
