import React from 'react'
import BasicField from './_Basic'

const RepostOf = props => <BasicField {...props} type="url" />

RepostOf.defaultProps = { property: 'repost-of', label: 'Repost Of' }

export default RepostOf
