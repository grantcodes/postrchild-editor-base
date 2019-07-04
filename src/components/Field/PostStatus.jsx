import React from 'react'
import PropTypes from 'prop-types'
import Property from '../Property'

const PostStatus = ({ value, onChange, selectComponent: Select, ...props }) => (
  <Property label="Post Status" {...props}>
    <Select
      id={`mf2_${props.property}`}
      value={value[0]}
      onChange={e => onChange([e.target.value])}
    >
      <option value="">Published</option>
      <option value="draft">Draft</option>
    </Select>
  </Property>
)

PostStatus.defaultProps = {
  property: 'post-status',
}

PostStatus.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default PostStatus
