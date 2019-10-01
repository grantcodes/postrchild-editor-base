import React from 'react'
import PropTypes from 'prop-types'
import { components as defaultComponents } from '../../default-components'

const BasicField = ({
  label,
  value,
  onChange,
  type,
  inputComponent: Input,
  propertyComponent: Property,
  ...props
}) => (
  <Property label={label} {...props}>
    <Input
      id={`mf2_${props.property}`}
      value={value[0]}
      onChange={e => onChange([e.target.value])}
      type={type}
    />
  </Property>
)

BasicField.defaultProps = {
  type: 'text',
  ...defaultComponents,
}

BasicField.propTypes = {
  property: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default BasicField
