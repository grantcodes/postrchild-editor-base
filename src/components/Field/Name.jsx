import React from 'react'
import BasicField from './_Basic'

const Name = props => <BasicField {...props} />

Name.defaultProps = { property: 'name', label: 'Name' }

export default Name
