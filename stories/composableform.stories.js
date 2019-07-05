import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  ComposableForm,
  Name,
  Content,
  Featured,
  Photo,
  InReplyTo,
  Visibility,
  MpSlug,
  PostStatus,
} from '../src'

// Demo Component
const ComposableFormDemo = ({ initialProperties = {}, ...props }) => {
  const [properties, setProperties] = useState(initialProperties)

  return (
    <ComposableForm
      {...props}
      properties={properties}
      onChange={newProperties => {
        setProperties(newProperties)
        action('onChange')(newProperties)
      }}
    />
  )
}

const composableForm = storiesOf('Components|ComposableForm', module)

composableForm.add(
  'Basic Reply',
  () => (
    <ComposableFormDemo
      initialProperties={{
        'in-reply-to': ['https://example.com'],
        content: ['Reply content'],
      }}
    >
      <InReplyTo />
      <Content />
    </ComposableFormDemo>
  ),
  {
    notes: {
      markdown: `
      \`ComposableForm\` is a container component that you can use to create advanced forms using child field components,
      the child components are passed the values from the \`properties\` prop.

      The returned properties are automatically cleaned up, there will not be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { ComposableForm , InReplyTo, Content } from '@postrchild/editor-base'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          'in-reply-to': ['https://example.com'],
          content: ['Reply content'],
        })

        return (
          <ComposableForm
            properties={properties}
            onChange={setProperties}
          >
            <InReplyTo />
            <Content />
          </ComposableForm>
        )
      }
      ~~~
    `,
    },
  }
)

composableForm.add(
  'Blog Post',
  () => (
    <ComposableFormDemo
      initialProperties={{
        'mp-slug': [],
        name: ['Post title'],
        featured: [],
        content: [{ html: '<h3>Rich Content</h3><p>Article content</p>' }],
        'post-status': [],
        visibility: [],
      }}
    >
      <MpSlug />
      <Name />
      <Featured />
      <Content richContent />
      <PostStatus />
      <Visibility />
    </ComposableFormDemo>
  ),
  {
    notes: {
      markdown: `
      \`ComposableForm\` is a container component that you can use to create advanced forms using child field components,
      the child components are passed the values from the \`properties\` prop.

      The \`richContentautomatically cleaned up, there will not be empty properties      The returned properties are not cleaned up, there may be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { ComposableForm, MpSlug, Name, Featured, Content, PostStatus, Visibility } from '@postrchild/editor-base'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          'mp-slug': [],
          name: ['Post title'],
          featured: [],
          content: [{ html: '<h3>Rich Content</h3><p>Article content</p>' }],
          'post-status': [],
          visibility: [],
        })

        return(
          <ComposableForm
            properties={properties}
            onChange={setProperties}
          >
            <MpSlug />
            <Name />
            <Featured />
            <Content richContent />
            <PostStatus />
            <Visibility />
          </ComposableForm>
        )
      }
      ~~~
    `,
    },
  }
)

composableForm.add(
  'Photo Post',
  () => (
    <ComposableFormDemo
      initialProperties={{
        name: ['Photo Title'],
        photo: [],
      }}
    >
      <Name />
      <Photo />
    </ComposableFormDemo>
  ),
  {
    notes: {
      markdown: `
      \`ComposableForm\` is a container component that you can use to create advanced forms using child field components,
      the child components are passed the values from the \`properties\` prop.

      The returned properties are automatically cleaned up, there will not be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { ComposableForm, Name, Photo } from '@postrchild/editor-base'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          name: ['Photo Title'],
          photo: [],
        })

        return (
          <ComposableForm
            properties={properties}
            onChange={setProperties}
          >
            <Name />
            <Photo />
          </ComposableForm>
        )
      }
      ~~~
    `,
    },
  }
)
