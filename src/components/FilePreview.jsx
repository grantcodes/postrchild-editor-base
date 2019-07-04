import React from 'react'
import PropTypes from 'prop-types'

const Property = ({
  files,
  divComponent: Div,
  imgComponent: Img,
  videoComponent: Video,
  audioComponent: Audio,
}) => (
  <Div className="micropub-client-editor__file-previews">
    {files.map((file, index) => {
      if (file && file.type && file.type.startsWith('image/')) {
        const src = URL.createObjectURL(file)
        return (
          <Img
            key={`file-preview-${index}`}
            className="micropub-client-editor__file-preview micropub-client-editor__file-preview--image"
            src={src}
          />
        )
      }
      if (file && file.type && file.type.startsWith('video/')) {
        const src = URL.createObjectURL(file)
        return (
          <Video
            key={`file-preview-${index}`}
            className="micropub-client-editor__file-preview micropub-client-editor__file-preview--video"
            src={src}
            controls
          />
        )
      }
      if (file && file.type && file.type.startsWith('audio/')) {
        const src = URL.createObjectURL(file)
        return (
          <Audio
            key={`file-preview-${index}`}
            className="micropub-client-editor__file-preview micropub-client-editor__file-preview--audio"
            src={src}
            controls
          />
        )
      }
      return null
    })}
  </Div>
)

Property.propTypes = {
  divComponent: PropTypes.func.isRequired,
  imgComponent: PropTypes.func.isRequired,
  videoComponent: PropTypes.func.isRequired,
  audioComponent: PropTypes.func.isRequired,
}

Property.defaultProps = {}

export default Property
