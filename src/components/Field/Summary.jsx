import React from 'react'
import PropTypes from 'prop-types'
import Property from '../Property'
import { components as defaultComponents } from '../../default-components'

const Summary = ({ value, onChange, textareaComponent: Input, ...props }) => (
  <Property label="Summary" {...props}>
    <Input id={`mf2_${props.property}`} value={value} onChange={onChange} />
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
