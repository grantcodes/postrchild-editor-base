import React from 'react'
import FileField from './_File'

const Featured = props => <FileField {...props} accept="image/*" />

Featured.defaultProps = { property: 'featured', label: 'Audio Files' }

export default Featured
