import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Name,
  Summary,
  Content,
  Category,
  Featured,
  Photo,
  InReplyTo,
  LikeOf,
  RepostOf,
  BookmarkOf,
  Video,
  Audio,
  Location,
  Visibility,
  MpSlug,
  MpSyndicateTo,
} from '../src'

// Example component
const Example = ({ component: Field, initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue || [])

  return (
    <Field
      value={value}
      onChange={newValue => {
        setValue(newValue)
        action('onChange')(newValue)
      }}
      {...props}
    />
  )
}

// Basic field markdown
const basicNote = (component, name) => ({
  markdown: `
    A \`${name}\` field. Should be used as a child of the \`ComposableForm\` component.

    ~~~js
    import { ${component} } from '@postrchild/editor-base'
    ~~~

    ~~~jsx
    <${component} value={value} onChange={newValue => handleChange(newValue)} />
    ~~~
  `,
})

// File field note
const fileNote = (component, name) => ({
  markdown: `
    A \`${name}\` field with a preview of the media field. Should be used as a child of the \`ComposableForm\` component.

    Returns an array of \`File\` objects.

    ~~~js
    import { ${component} } from '@postrchild/editor-base'
    ~~~

    ~~~jsx
    <${component} value={value} onChange={newValue => handleChange(newValue)} />
    ~~~
  `,
})

const story = storiesOf('Components|Fields', module)

story.add('Name', () => <Example component={Name} initialValue={['Name']} />, {
  notes: basicNote('Name', 'name'),
})

story.add(
  'Summary',
  () => <Example component={Summary} initialValue={['Summary goes here']} />,
  {
    notes: basicNote('Summary', 'summary'),
  }
)

story.add(
  'Basic Content',
  () => (
    <Example
      component={Content}
      initialValue={['Basic text content in a textarea']}
    />
  ),
  {
    notes: basicNote('Content', 'content'),
  }
)

story.add(
  'Rich Content',
  () => (
    <Example
      component={Content}
      initialValue={[
        {
          html:
            '<h1>Rich Content</h1><p>Uses the <code>react-quill</code> editor</p>',
        },
      ]}
      richContent
    />
  ),
  {
    notes: {
      markdown: `
    A rich text \`content\` field. Should be used as a child of the \`ComposableForm\` component.

    Rich text mode is enabled via the \`richContent\` prop.

    ~~~js
    import { Content } from '@postrchild/editor-base'
    ~~~

    ~~~jsx
    <Content
      value={value}
      onChange={newValue => handleChange(newValue)}
      richContent
    />
    ~~~
  `,
    },
  }
)

story.add(
  'Category',
  () => (
    <Example
      component={Category}
      initialValue={['some', 'categories', 'here']}
    />
  ),
  {
    notes: basicNote('Category', 'category'),
  }
)

story.add('Featured', () => <Example component={Featured} />, {
  notes: fileNote('Featured', 'featured'),
})

story.add('Photo', () => <Example component={Photo} />, {
  notes: fileNote('Photo', 'photo'),
})

story.add(
  'InReplyTo',
  () => (
    <Example component={InReplyTo} initialValue={['https://example.com']} />
  ),
  {
    notes: basicNote('InReplyTo', 'in-reply-to'),
  }
)

story.add(
  'LikeOf',
  () => <Example component={LikeOf} initialValue={['https://example.com']} />,
  {
    notes: basicNote('LikeOf', 'like-of'),
  }
)

story.add(
  'RepostOf',
  () => <Example component={RepostOf} initialValue={['https://example.com']} />,
  {
    notes: basicNote('RepostOf', 'repost-of'),
  }
)

story.add(
  'BookmarkOf',
  () => (
    <Example component={BookmarkOf} initialValue={['https://example.com']} />
  ),
  {
    notes: basicNote('BookmarkOf', 'bookmark-of'),
  }
)

story.add('Video', () => <Example component={Video} />, {
  notes: fileNote('Video', 'video'),
})

story.add('Audio', () => <Example component={Audio} />, {
  notes: fileNote('Audio', 'audio'),
})

story.add('Location', () => <Example component={Location} />, {
  notes: basicNote('Location', 'location'),
})

story.add(
  'Visibility',
  () => <Example component={Visibility} initialValue={['visible']} />,
  {
    notes: basicNote('Visibility', 'visibility'),
  }
)

story.add(
  'MpSlug',
  () => <Example component={MpSlug} initialValue={['post-slug']} />,
  {
    notes: basicNote('MpSlug', 'mp-slug'),
  }
)

story.add(
  'MpSyndicateTo',
  () => (
    <Example
      component={MpSyndicateTo}
      syndication={[
        { uid: 'twitter', name: 'Twitter' },
        { uid: 'instagram', name: 'Instagram' },
      ]}
    />
  ),
  {
    notes: {
      markdown: `
    A \`mp-syndicate-to\` field. Should be used as a child of the \`ComposableForm\` component.

    Syndication providers are passed in using the \`syndication\` prop.

    ~~~js
    import { MpSyndicateTo } from '@postrchild/editor-base'
    ~~~

    ~~~jsx
    <MpSyndicateTo
      value={value}
      onChange={newValue => handleChange(newValue)}
      syndication={[
        { uid: 'twitter', name: 'Twitter' },
        { uid: 'instagram', name: 'Instagram' },
      ]}
    />
    ~~~
  `,
    },
  }
)
