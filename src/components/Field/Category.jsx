import React from 'react'
import PropTypes from 'prop-types'
import Property from '../Property'
import { components as defaultComponents } from '../../default-components'

const Category = ({ value, onChange, inputComponent: Input, ...props }) => (
  <Property label="Tags (comma serparated)" {...props}>
    <Input
      id={`mf2_${props.property}`}
      value={value.join(',')}
      onChange={e =>
        onChange(
          e.target.value.split(',').map(cat => cat.trim())
          // .filter(cat => cat)
        )
      }
    />
  </Property>
)

Category.defaultProps = {
  property: 'category',
  ...defaultComponents,
}

Category.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default Category
