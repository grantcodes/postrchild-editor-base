import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import Property from '../Property'
import { components as defaultComponents } from '../../default-components'
import 'react-quill/dist/quill.snow.css'

const Content = ({
  value,
  onChange,
  richContent,
  textareaComponent: Textarea,
  ...props
}) => {
  // Get the appropriate content value from nested object
  let contentValue = ''
  if (value && value[0] && richContent && value[0].html) {
    contentValue = value[0].html
  }
  if (value && value[0] && !richContent) {
    contentValue = value[0].value || value[0]
  }

  console.log({ contentValue, richContent, ReactQuill })

  return (
    <Property label="Content" {...props}>
      {richContent ? (
        <ReactQuill
          id="mf2_content"
          value={contentValue}
          onChange={value => onChange([{ html: value }])}
        />
      ) : (
        <Textarea
          id={`mf2_${props.property}`}
          value={contentValue}
          onChange={e => onChange([e.target.value])}
        />
      )}
    </Property>
  )
}

Content.defaultProps = {
  property: 'content',
  richContent: false,
  ...defaultComponents,
}

Content.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  richContent: PropTypes.bool.isRequired,
}

export default Content
