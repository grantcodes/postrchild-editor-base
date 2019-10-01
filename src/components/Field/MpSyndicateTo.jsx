import React from 'react'
import PropTypes from 'prop-types'
import { components as defaultComponents } from '../../default-components'

const MpSyndicateTo = ({
  value,
  onChange,
  syndication,
  inputComponent: Input,
  checkboxComponent: Checkbox,
  propertyComponent: Property,
  ...props
}) => {
  const Label = props.labelComponent
  if (!syndication || !syndication.length) {
    return null
  }

  return (
    <Property label="Syndication" {...props}>
      {syndication.map(service => {
        let checked = false
        let { name, uid } = service
        if (service.service && service.service.name) {
          name = service.service.name
        }
        if (value && value.indexOf(uid) > -1) {
          checked = true
        }

        return (
          <Label key={uid}>
            <Checkbox
              checked={checked}
              onChange={e => {
                let selectedServices = value || []
                const existingIndex = selectedServices.indexOf(uid)
                if (existingIndex > -1) {
                  selectedServices.splice(existingIndex, 1)
                } else {
                  selectedServices.push(uid)
                }
                onChange([...selectedServices])
              }}
            />
            {name}
          </Label>
        )
      })}
    </Property>
  )
}

MpSyndicateTo.defaultProps = {
  property: 'mp-syndicate-to',
  ...defaultComponents,
}

MpSyndicateTo.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  syndication: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

export default MpSyndicateTo
