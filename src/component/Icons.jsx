import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    const {xml, width, height, viewBox, fill, stroke, strokeWidth, strokeLine, strokeLineJoin, cl, d } =this.props.user
    return (
      <div>
        {` ${xml}
        ${width} 
        ${height}
        ${viewBox}
        ${fill}
        ${stroke}
        ${strokeWidth}
        ${strokeLine}
        ${strokeLineJoin}
        ${d}
        ${cl}
        `}
        
        
      </div>
    )
  }
}
