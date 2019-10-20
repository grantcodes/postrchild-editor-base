import React, { useState, useEffect } from 'react'
import 'react-quill/dist/quill.snow.css'

let ReactQuill = null

const RichContent = props => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    import('react-quill').then(module => {
      ReactQuill = module.default
      setLoaded(true)
    })
  }, [])

  return loaded && ReactQuill ? <ReactQuill {...props} /> : null
}

export default RichContent
