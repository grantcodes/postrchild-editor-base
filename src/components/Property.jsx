import React from 'react'
import PropTypes from 'prop-types'
import { components as defaultComponents } from '../default-components'

const Property = ({
  labelComponent: Label,
  divComponent: Div,
  children,
  property,
  label,
}) => (
  <Div
    className={
      'micropub-client-editor__property micropub-client-editor__property--' +
      property
    }
  >
    <Label
      className="micropub-client-editor__label"
      htmlFor={'mf2_' + property}
    >
      {label}
    </Label>
    {children}
  </Div>
)

Property.defaultProps = {
  ...defaultComponents,
}

Property.propTypes = {
  labelComponent: PropTypes.func.isRequired,
  divComponent: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Property
