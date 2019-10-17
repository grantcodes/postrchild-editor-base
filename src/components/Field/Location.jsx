import React from 'react'
import PropTypes from 'prop-types'
import { components as defaultComponents } from '../../default-components'

const Location = ({
  value,
  onChange,
  buttonComponent: Button,
  propertyComponent: Property,
  ...props
}) => {
  if (
    typeof window === 'undefined' ||
    !window.navigator ||
    !window.navigator.geolocation
  ) {
    return null
  }

  return (
    <Property label="Location" {...props}>
      <Button
        onClick={e => {
          e.preventDefault()
          if (value && value[0]) {
            onChange([])
          } else {
            window.navigator.geolocation.getCurrentPosition(pos => {
              if (pos && pos.coords) {
                const location = `geo:${pos.coords.latitude},${pos.coords.longitude}`
                onChange([location])
              }
            })
          }
        }}
      >
        {value && value[0] ? 'Remove Location' : 'Get Location'}
      </Button>
    </Property>
  )
}

Location.defaultProps = {
  property: 'location',
  ...defaultComponents,
}

Location.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default Location

// {window && window.navigator && window.navigator.geolocation && (
//   <Property name="location" label="Location">
//   </Property>
// )}
