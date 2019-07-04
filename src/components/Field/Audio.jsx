import React from 'react'
import FileField from './_File'

const Audio = props => <FileField {...props} accept="audio/*" multiple />

Audio.defaultProps = { property: 'audio', label: 'Audio(s)' }

export default Audio
