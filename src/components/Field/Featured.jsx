import React from 'react'
import FileField from './_File'

const Featured = props => <FileField {...props} accept="image/*" />

Featured.defaultProps = { property: 'featured', label: 'Featured Image' }

export default Featured
