import React from 'react'
import PropTypes from 'prop-types'

export const components = {
  divComponent: props => <div {...props} />,
  labelComponent: props => <label {...props} />,
  inputComponent: props => <input {...props} />,
  buttonComponent: props => <button {...props} />,
  textareaComponent: props => <textarea {...props} />,
  selectComponent: props => <select {...props} />,
  checkboxComponent: props => <input type="checkbox" {...props} />,
  imgComponent: props => <img {...props} />,
  videoComponent: props => <video {...props} />,
  audioComponent: props => <audio {...props} />,
}

export const propTypes = {
  divComponent: PropTypes.func.isRequired,
  labelComponent: PropTypes.func.isRequired,
  inputComponent: PropTypes.func.isRequired,
  buttonComponent: PropTypes.func.isRequired,
  textareaComponent: PropTypes.func.isRequired,
  selectComponent: PropTypes.func.isRequired,
  checkboxComponent: PropTypes.func.isRequired,
  imgComponent: PropTypes.func.isRequired,
  videoComponent: PropTypes.func.isRequired,
  audioComponent: PropTypes.func.isRequired,
}
