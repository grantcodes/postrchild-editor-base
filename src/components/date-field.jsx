import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

const dateToDateString = date => {
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return year + '-' + month + '-' + day
}

const dateToTimeString = date => {
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  // const seconds = ('0' + date.getSeconds()).slice(-2)
  return hours + ':' + minutes
}

class DateField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: props.date || new Date(),
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleDateChange(e) {
    const val = e.target.valueAsDate
    const { date } = this.state
    const dateString = dateToDateString(val)
    const timeString = dateToTimeString(date)
    const newDate = new Date(dateString + 'T' + timeString + ':00')
    this.setState({ date: newDate })
    this.props.onChange(newDate)
  }

  handleTimeChange(e) {
    const val = e.target.valueAsDate
    const { date } = this.state
    const dateString = dateToDateString(date)
    const timeString = dateToTimeString(val)
    const newDate = new Date(dateString + 'T' + timeString + ':00')
    this.setState({ date: newDate })
    this.props.onChange(newDate)
  }

  render() {
    const { date } = this.state
    const { inputComponent: Input } = this.props
    const dateValue = dateToDateString(date)
    const timeValue = dateToTimeString(date)
    console.log('timeValue', timeValue)
    return (
      <Fragment>
        <Input
          className="micropub-client-editor__datetime__date"
          type="date"
          value={dateValue}
          onChange={this.handleDateChange}
        />
        <Input
          className="micropub-client-editor__datetime__time"
          type="time"
          value={timeValue}
          onChange={this.handleTimeChange}
        />
      </Fragment>
    )
  }
}

DateField.PropTypes = {
  inputComponent: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf('Date'),
}

export default DateField
