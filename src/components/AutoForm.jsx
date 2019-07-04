import React from 'react'
import PropTypes from 'prop-types'
import {
  components as defaultComponents,
  propTypes as componentPropTypes,
} from '../default-components'
import * as Fields from './Field'
import '../css/style.css'

const AutoForm = ({ properties, onChange, ...props }) => {
  const handleChange = name => value => {
    // Map the new properties
    const newProperties = { ...properties, [name]: value }
    // Don't clean properties on AutoForm as it will remove the fields
    onChange(newProperties)
  }

  const Div = props.divComponent

  return (
    <Div className="micropub-client-editor">
      {Object.keys(properties).map((property, i) => {
        const Field = Object.values(Fields).find(
          field => field.defaultProps.property === property
        )
        if (!Field) {
          return null
        }
        return (
          <Field
            key={`property-${i}`}
            value={properties[property]}
            onChange={handleChange(property)}
            {...props}
          />
        )
      })}
    </Div>
  )
}

AutoForm.propTypes = {
  properties: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  ...componentPropTypes,
}

AutoForm.defaultProps = {
  properties: {},
  onChange: () => {},
  ...defaultComponents,
}

export default AutoForm
