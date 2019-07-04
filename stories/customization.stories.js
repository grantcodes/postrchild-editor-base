import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { components as defaultComponents } from '../src/default-components'
import { ComposableForm, AutoForm, Name } from '../src'

// Custom base component example
const CustomDiv = ({ children, ...props }) => (
  <div
    {...props}
    style={{ border: '2px solid red', padding: 10, position: 'relative' }}
  >
    {children}
    <span
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: 'red',
        fontSize: 10,
      }}
    >
      Custom Div Component
    </span>
  </div>
)

// Custom property field example
const MyProperty = ({ value, onChange, ...props }) => {
  const handleChange = e => onChange(e.target.value)

  return (
    <div>
      <label htmlFor="my-property">Custom Property</label>
      <input
        id="my-property"
        type="range"
        onChange={handleChange}
        min={1}
        max={10}
        value={value[0]}
        {...props}
      />
    </div>
  )
}

MyProperty.defaultProps = {
  property: 'my-property',
}

// Demo using the custom property field
const CustomPropertyDemo = () => {
  const [properties, setProperties] = useState({})

  return (
    <ComposableForm
      properties={properties}
      onChange={newProperties => {
        setProperties(newProperties)
        action('onChange')(newProperties)
      }}
    >
      <Name />
      <MyProperty />
    </ComposableForm>
  )
}

const customization = storiesOf('Customization', module)

customization.add(
  'Base Components',
  () => (
    <AutoForm
      properties={{
        'in-reply-to': ['https://example.com'],
        content: ['Reply content'],
      }}
      divComponent={CustomDiv}
    />
  ),
  {
    notes: {
      markdown: `
      All of the base components that are used to make up the forms can be overridden with custom components.

      This is super useful if you are using a UI framework or your own component library. It may even work with react native (totally untested).

      These base components are must follow the same patterns as the base html components. E.g. \`onChange\` events, \`checked\` prop for checkboxes etc...

      The components can be overridden by passing the replacement components as props. Available components are:

      ${Object.keys(defaultComponents).map(key => '\n- `' + key + '`')}

      ~~~jsx
      import React, { useState } from 'react'
      import { AutoForm } from '@postrchild/editor'
      import { Box, Label, Input, Button } from 'some-framework'

      const MyForm = () => {
        const [properties, setProperties] = useState({
          'in-reply-to': ['https://example.com'],
          content: ['Reply content'],
        })

        return (
          <AutoForm
            properties={properties}
            onChange={newProperties => setProperties(newProperties)}
            divComponent={Box}
            labelComponent={Label}
            inputComponent={Input}
            buttonComponent={Button}
          />
        )
      }
      ~~~
    `,
    },
  }
)

customization.add('Custom Property Fields', () => <CustomPropertyDemo />, {
  notes: {
    markdown: `
      Using the \`ComposableForm\` you can also add more property fields and your own components to edit them.

      A good usecase may be to use a different html editor for the \`content\` property.

      There are a few requirements to custom property fields:

      1. They must accept a \`value\` prop as an array.
      2. They must accept a \`onChange\` prop and use it to update the property value. Pass the updated array of values to the \`onChange\` method.
      3. They must have a default \`property\` prop set, that will be the key for the property.


      ~~~jsx
      import React, { useState } from 'react'
      import { ComposableForm, Name } from '@postrchild/editor'

      // Custom property field
      const MyProperty = ({ value, onChange, ...props }) => {
        const handleChange = e => onChange(e.target.value)

        return (
          <div>
            <label htmlFor="my-property">Custom Property</label>
            <input
              id="my-property"
              type="range"
              onChange={handleChange}
              min={1}
              max={10}
              value={value[0]}
              {...props}
            />
          </div>
        )
      }

      MyProperty.defaultProps = {
        property: 'my-property',
      }

      // Using it in a form
      const MyForm = () => {
        const [properties, setProperties] = useState({})

        return(
          <ComposableForm
            properties={properties}
            onChange={setProperties}
          >
            <Name />
            <MyProperty />
          </ComposableForm>
        )
      }
      ~~~
    `,
  },
})
