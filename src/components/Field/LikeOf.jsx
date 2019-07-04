import React from 'react'
import BasicField from './_Basic'

const LikeOf = props => <BasicField {...props} type="url" />

LikeOf.defaultProps = { property: 'like-of', label: 'Like of' }

export default LikeOf
