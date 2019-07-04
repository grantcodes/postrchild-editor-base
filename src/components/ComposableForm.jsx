import React from 'react'
import PropTypes from 'prop-types'
import {
  components as defaultComponents,
  propTypes as componentPropTypes,
} from '../default-components'
import '../css/style.css'

const ComposableForm = ({ children, properties, onChange, ...props }) => {
  const handleChange = name => value => {
    // Map the new properties
    const newProperties = { ...properties, [name]: value }

    // Cleans up properties and removes any empty values
    let cleanProperties = {}
    for (const key in newProperties) {
      if (newProperties.hasOwnProperty(key)) {
        let value = newProperties[key]
        if (value !== null && value !== false && value !== '') {
          if (!Array.isArray(value)) {
            value = [value]
          }
          if (value[0]) {
            cleanProperties[key] = value
          }
        }
      }
    }

    onChange(cleanProperties)
  }

  const Div = props.divComponent

  return (
    <Div className="micropub-client-editor">
      {React.Children.map(children, (child, i) => {
        // Doesn't have a property value already set so just return normal component
        if (!child.props.property) {
          return child
        }

        // Otherwise pass value and change handler to the child component
        const name = child.props.property
        const value = properties[name] || []

        return React.cloneElement(child, {
          ...props,
          value,
          onChange: handleChange(name),
        })
      })}
    </Div>
  )
}

ComposableForm.propTypes = {
  properties: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  ...componentPropTypes,
}

ComposableForm.defaultProps = {
  properties: {},
  onChange: () => {},
  ...defaultComponents,
}

export default ComposableForm
