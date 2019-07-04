import React from 'react'
import BasicField from './_Basic'

const InReplyTo = props => <BasicField {...props} type="url" />

InReplyTo.defaultProps = { property: 'in-reply-to', label: 'In Reply To' }

export default InReplyTo
