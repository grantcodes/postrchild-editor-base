import React from 'react'
import PropTypes from 'prop-types'

const Property = ({
  labelComponent: Label,
  divComponent: Div,
  children,
  name,
  label,
}) => (
  <Div className={'micropub-client-editor__property micropub-client-editor__property--' + name}>
    <Label className="micropub-client-editor__label" htmlFor={'mf2_' + name}>
      {label}
    </Label>
    {children}
  </Div>
)

Property.propTypes = {
  labelComponent: PropTypes.func.isRequired,
  divComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Property
