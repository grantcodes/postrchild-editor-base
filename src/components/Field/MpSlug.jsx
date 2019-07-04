import React from 'react'
import BasicField from './_Basic'

const MpSlug = props => <BasicField {...props} />

MpSlug.defaultProps = { property: 'mp-slug', label: 'Slug' }

export default MpSlug
