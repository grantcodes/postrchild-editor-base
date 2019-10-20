import React from 'react'
import PropTypes from 'prop-types'
import RichContent from './RichContent'
import { components as defaultComponents } from '../../../default-components'

const Content = ({
  value,
  onChange,
  richContent,
  textareaComponent: Textarea,
  propertyComponent: Property,
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

  return (
    <Property label="Content" {...props}>
      {richContent && typeof window !== 'undefined' ? (
        <RichContent
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
