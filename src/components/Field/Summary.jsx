import React from 'react'
import PropTypes from 'prop-types'
import { components as defaultComponents } from '../../default-components'

const Summary = ({
  value,
  onChange,
  textareaComponent: Input,
  propertyComponent: Property,
  ...props
}) => (
  <Property label="Summary" {...props}>
    <Input
      id={`mf2_${props.property}`}
      value={value}
      onChange={e => onChange([e.target.value])}
    />
  </Property>
)

Summary.defaultProps = {
  property: 'summary',
  ...defaultComponents,
}

Summary.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default Summary
