import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoForm } from '../src'

// Demo Component
const AutoFormDemo = ({ initialProperties = {}, ...props }) => {
  const [properties, setProperties] = useState(initialProperties)

  return (
    <AutoForm
      {...props}
      properties={properties}
      onChange={newProperties => {
        setProperties(newProperties)
        action('onChange')(newProperties)
      }}
    />
  )
}

const autoForm = storiesOf('Components|AutoForm', module)

autoForm.add(
  'Basic Reply',
  () => (
    <AutoFormDemo
      initialProperties={{
        'in-reply-to': ['https://example.com'],
        content: ['Reply content'],
      }}
    />
  ),
  {
    notes: {
      markdown: `
      The \`AutoForm\` component automatically creates a form based on the properties that are included in the \`properties\` prop.

      The returned properties are not cleaned up, there may be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { AutoForm } from '@postrchild/editor'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          'in-reply-to': ['https://example.com'],
          content: ['Reply content'],
        })

        return (
          <AutoForm
            properties={properties}
            onChange={setProperties}
          />
        )
      }
      ~~~
    `,
    },
  }
)

autoForm.add(
  'Blog Post',
  () => (
    <AutoFormDemo
      richContent
      initialProperties={{
        'mp-slug': [],
        name: ['Post title'],
        featured: [],
        content: [{ html: '<h3>Rich Content</h3><p>Article content</p>' }],
        'post-status': [],
        visibility: [],
      }}
    />
  ),
  {
    notes: {
      markdown: `
      The \`AutoForm\` component automatically creates a form based on the properties that are included in the \`properties\` prop.

      The \`richContent\` prop enables the html editor.

      The returned properties are not cleaned up, there may be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { AutoForm } from '@postrchild/editor'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          'mp-slug': [],
          name: ['Post title'],
          featured: [],
          content: [{ html: '<h3>Rich Content</h3><p>Article content</p>' }],
          'post-status': [],
          visibility: [],
        })

        return (
          <AutoForm
            properties={properties}
            onChange={setProperties}
            richContent
          />
        )
      }
      ~~~
    `,
    },
  }
)

autoForm.add(
  'Photo Post',
  () => (
    <AutoFormDemo
      initialProperties={{
        name: ['Photo Title'],
        photo: [],
      }}
    />
  ),
  {
    notes: {
      markdown: `
      The \`AutoForm\` component automatically creates a form based on the properties that are included in the \`properties\` prop.

      The returned properties are not cleaned up, there may be empty properties.

      ~~~jsx
      import React, { useState } from 'react'
      import { AutoForm } from '@postrchild/editor'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          name: ['Photo Title'],
          photo: [],
        })

        return (
          <AutoForm
            properties={properties}
            onChange={setProperties}
          />
        )
      }
      ~~~
    `,
    },
  }
)
