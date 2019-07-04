import React from 'react'
import PropTypes from 'prop-types'
import Property from '../Property'
import { components as defaultComponents } from '../../default-components'

const Visibility = ({ value, onChange, selectComponent: Select, ...props }) => (
  <Property label="Visibility" {...props}>
    <Select
      id={`mf2_${props.property}`}
      value={value[0]}
      onChange={e => onChange([e.target.value])}
    >
      <option value="visible">Visible</option>
      <option value="private">Private</option>
      <option value="unlisted">Unlisted</option>
    </Select>
  </Property>
)

Visibility.defaultProps = {
  property: 'visibility',
  ...defaultComponents,
}

Visibility.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default Visibility
