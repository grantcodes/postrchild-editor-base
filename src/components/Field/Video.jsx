import React from 'react'
import FileField from './_File'

const Video = props => <FileField {...props} accept="video/*" multiple />

Video.defaultProps = { property: 'video', label: 'Video(s)' }

export default Video
