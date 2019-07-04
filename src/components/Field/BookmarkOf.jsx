import React from 'react'
import BasicField from './_Basic'

const BookmarkOf = props => <BasicField {...props} type="url" />

BookmarkOf.defaultProps = { property: 'bookmark-of', label: 'Bookmark Of' }

export default BookmarkOf
