import React from 'react'
import PropTypes from 'prop-types'
import Property from '../Property'
import FilePreview from '../FilePreview'
import { components as defaultComponents } from '../../default-components'

const BasicField = ({
  label,
  value,
  multiple,
  accept,
  onChange,
  type,
  inputComponent: Input,
  ...props
}) => {
  return (
    <Property label={label} {...props}>
      <Input
        type="file"
        accept={accept}
        // value={value[0]}
        id={`mf2_${props.property}`}
        multiple={multiple}
        onChange={e => onChange([...e.target.files])}
      />
      <FilePreview files={value} {...props} />
    </Property>
  )
}

BasicField.defaultProps = {
  accept: null,
  multiple: false,
  ...defaultComponents,
}

BasicField.propTypes = {
  property: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired,
  accept: PropTypes.string,
}

export default BasicField
