import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import PropertyInput from './property'
import FilePreview from './file-preview'
import DateField from './date-field'
import '../css/style.css'
import 'react-quill/dist/quill.snow.css'

class MicropubClientEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props.properties }

    this.renderProperty = this.renderProperty.bind(this)
    this.renderFilePreview = this.renderFilePreview.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.changeMf2 = this.changeMf2.bind(this)
  }

  componentWillReceiveProps(newProps) {
    const properties = this.state
    if (newProps.properties) {
      let update = {}
      Object.keys(newProps.properties).forEach(key => {
        const newValue = newProps.properties[key]
        if (newValue && Array.isArray(newValue)) {
          if (!this.state[key] || this.state[key][0] != newValue[0]) {
            update[key] = newValue
          }
        }
      })
      if (Object.keys(update).length) {
        this.setState(update)
      }
    }
  }

  renderProperty(props) {
    if (this.props.shownProperties.indexOf(props.name) > -1) {
      return (
        <PropertyInput
          {...props}
          divComponent={this.props.divComponent}
          labelComponent={this.props.labelComponent}
        />
      )
    }
    return null
  }

  renderFilePreview(name) {
    if (!this.state[name]) {
      return null
    }
    return (
      <FilePreview
        files={this.state[name]}
        divComponent={this.props.divComponent}
        imgComponent={this.props.imgComponent}
        videoComponent={this.props.imgComponent}
        audioComponent={this.props.audioComponent}
      />
    )
  }

  handleChange(name) {
    return e => {
      this.setState({ [name]: [e.target.value] }, this.changeMf2)
    }
  }

  handleFileChange(name) {
    return e => {
      let files = [...e.target.files]
      if (files && files[0]) {
        this.setState({ [name]: files }, this.changeMf2)
      }
    }
  }

  changeMf2() {
    let mf2 = {
      type: ['h-entry'],
      properties: {},
    }
    Object.keys(this.state).forEach(key => {
      let value = this.state[key]
      if (value !== null && value !== false && value !== '') {
        if (!Array.isArray(value)) {
          value = [value]
        }
        if (value[0]) {
          mf2.properties[key] = value
        }
      }
    })
    this.props.onChange(mf2)
  }

  render() {
    const Property = this.renderProperty
    const {
      divComponent: Div,
      labelComponent: Label,
      inputComponent: Input,
      buttonComponent: Button,
      textareaComponent: Textarea,
      selectComponent: Select,
      checkboxComponent: Checkbox,
    } = this.props

    const propertyValue = name => (this.state[name] ? this.state[name][0] : '')

    let contentValue = ''
    if (this.state.content && this.state.content[0]) {
      contentValue = this.state.content[0]
      if (contentValue.html) {
        contentValue = contentValue.html
      }
      if (contentValue.value) {
        contentValue = contentValue.value
      }
      if (typeof contentValue != 'string') {
        contentValue = ''
      }
    }

    return (
      <Div>
        {/* <Property name="published" label="Published">
          <DateField
            inputComponent={Input}
            onChange={date => {
              console.log('Changed date', date)
            }}
          />
        </Property> */}

        <Property name="name" label="Name">
          <Input
            id="mf2_name"
            value={propertyValue('name')}
            onChange={this.handleChange('name')}
          />
        </Property>

        <Property name="mp-slug" label="Slug">
          <Input
            id="mf2_mp-slug"
            value={propertyValue('mp-slug')}
            onChange={this.handleChange('mp-slug')}
          />
        </Property>

        <Property name="summary" label="Summary">
          <Input
            id="mf2_summary"
            value={propertyValue('summary')}
            onChange={this.handleChange('summary')}
          />
        </Property>

        <Property name="content" label="Content">
          {this.props.richContent ? (
            <ReactQuill
              id="mf2_content"
              value={contentValue}
              onChange={value =>
                this.setState({ content: [value] }, this.changeMf2)
              }
            />
          ) : (
            <Textarea
              id="mf2_content"
              value={
                this.state.content &&
                this.state.content[0] &&
                this.state.content[0].value
                  ? this.state.content[0].value
                  : propertyValue('content')
              }
              onChange={this.handleChange('content')}
            />
          )}
        </Property>

        <Property name="category" label="Tags (comma separated)">
          <Input
            id="mf2_category"
            value={(this.state.category || []).join(',')}
            onChange={e => {
              this.setState(
                {
                  category: e.target.value.split(',').map(cat => cat.trim()),
                },
                this.changeMf2
              )
            }}
          />
        </Property>

        <Property name="in-reply-to" label="In Reply To">
          <Input
            type="url"
            id="mf2_in-reply-to"
            value={propertyValue('in-reply-to')}
            onChange={this.handleChange('in-reply-to')}
          />
        </Property>

        <Property name="repost-of" label="Repost Of">
          <Input
            type="url"
            id="mf2_repost-of"
            value={propertyValue('repost-of')}
            onChange={this.handleChange('repost-of')}
          />
        </Property>

        <Property name="like-of" label="Like Of">
          <Input
            type="url"
            id="mf2_like-of"
            value={propertyValue('like-of')}
            onChange={this.handleChange('like-of')}
          />
        </Property>

        <Property name="bookmark-of" label="Bookmark Of">
          <Input
            type="url"
            id="mf2_bookmark-of"
            value={propertyValue('bookmark-of')}
            onChange={this.handleChange('bookmark-of')}
          />
        </Property>

        <Property name="featured" label="Featured">
          <Input
            id="mf2_featured"
            type="file"
            accept="image/*"
            onChange={this.handleFileChange('featured')}
          />
          {this.renderFilePreview('featured')}
        </Property>

        <Property name="photo" label="Photo">
          <Input
            id="mf2_photo"
            type="file"
            accept="image/*"
            multiple
            onChange={this.handleFileChange('photo')}
          />
          {this.renderFilePreview('photo')}
        </Property>

        <Property name="video" label="Video">
          <Input
            id="mf2_video"
            type="file"
            accept="video/*"
            multiple
            onChange={this.handleFileChange('video')}
          />
          {this.renderFilePreview('video')}
        </Property>

        <Property name="audio" label="Audio">
          <Input
            id="mf2_audio"
            type="file"
            accept="audio/*"
            multiple
            onChange={this.handleFileChange('audio')}
          />
          {this.renderFilePreview('audio')}
        </Property>

        {window &&
          window.navigator &&
          window.navigator.geolocation && (
            <Property name="location" label="Location">
              <Button
                onClick={e => {
                  e.preventDefault()
                  if (this.state.location) {
                    this.setState({ location: null }, this.changeMf2)
                  } else {
                    window.navigator.geolocation.getCurrentPosition(pos => {
                      if (pos && pos.coords) {
                        this.setState(
                          {
                            location: `geo:${pos.coords.latitude},${
                              pos.coords.longitude
                            }`,
                          },
                          this.changeMf2
                        )
                      }
                    })
                  }
                }}
              >
                {this.state.location ? 'Remove Location' : 'Get Location'}
              </Button>
            </Property>
          )}

        <Property name="visibility" label="Visibility">
          <Select
            id="mf2_visibility"
            value={propertyValue('visibility')}
            onChange={this.handleChange('visibility')}
          >
            <option value="visible">Visible</option>
            <option value="private">Private</option>
            <option value="unlisted">Unlisted</option>
          </Select>
        </Property>

        <Property name="post-status" label="Status">
          <Select
            id="mf2_post-status"
            value={propertyValue('post-status')}
            onChange={this.handleChange('post-status')}
          >
            <option value="">Published</option>
            <option value="draft">Draft</option>
          </Select>
        </Property>

        {this.props.syndication.length ? (
          <Property name="mp-syndicate-to" label="Syndication">
            {this.props.syndication.map(service => {
              let checked = false
              let { name, uid } = service
              if (service.service && service.service.name) {
                name = service.service.name
              }
              if (
                this.state['mp-syndicate-to'] &&
                this.state['mp-syndicate-to'].indexOf(uid) > -1
              ) {
                checked = true
              }
              return (
                <Label color="black" key={uid}>
                  <Checkbox
                    checked={checked}
                    style={{ width: 16, height: 16 }}
                    onChange={e => {
                      let selectedServices = this.state['mp-syndicate-to'] || []
                      const existingIndex = selectedServices.indexOf(uid)
                      if (existingIndex > -1) {
                        selectedServices.splice(existingIndex, 1)
                      } else {
                        selectedServices.push(uid)
                      }
                      this.setState(
                        {
                          'mp-syndicate-to': [...selectedServices],
                        },
                        this.changeMf2
                      )
                    }}
                  />
                  {name}
                </Label>
              )
            })}
          </Property>
        ) : null}
      </Div>
    )
  }
}

MicropubClientEditor.propTypes = {
  properties: PropTypes.object.isRequired,
  shownProperties: PropTypes.array.isRequired,
  syndication: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  richContent: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
  richEditorProps: PropTypes.object,
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

MicropubClientEditor.defaultProps = {
  properties: {},
  shownProperties: ['name', 'photo', 'content'],
  syndication: [],
  onChange: () => {},
  richContent: true,
  style: {},
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

export default MicropubClientEditor
