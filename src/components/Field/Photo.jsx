import React from 'react'
import FileField from './_File'

const Photo = props => <FileField {...props} accept="image/*" multiple />

Photo.defaultProps = { property: 'photo', label: 'Photo(s)' }

export default Photo
