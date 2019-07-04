import React, { Fragment, useState } from 'react'
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

const DateField = ({
  date: dateProp = new Date(),
  inputComponent: Input,
  onChange,
}) => {
  const [date, setDate] = useState(dateProp)

  const handleDateChange = e => {
    const val = e.target.valueAsDate
    const dateString = dateToDateString(val)
    const timeString = dateToTimeString(date)
    const newDate = new Date(dateString + 'T' + timeString + ':00')
    setDate(newDate)
    onChange(newDate)
  }

  const handleTimeChange = e => {
    const val = e.target.valueAsDate
    const { date } = this.state
    const dateString = dateToDateString(date)
    const timeString = dateToTimeString(val)
    const newDate = new Date(dateString + 'T' + timeString + ':00')
    setDate(newDate)
    onChange(newDate)
  }

  const dateValue = dateToDateString(date)
  const timeValue = dateToTimeString(date)

  return (
    <Fragment>
      <Input
        className="micropub-client-editor__datetime__date"
        type="date"
        value={dateValue}
        onChange={handleDateChange}
      />
      <Input
        className="micropub-client-editor__datetime__time"
        type="time"
        value={timeValue}
        onChange={handleTimeChange}
      />
    </Fragment>
  )
}

DateField.PropTypes = {
  inputComponent: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf('Date'),
}

export default DateField
