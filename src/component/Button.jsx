import { Component } from 'react'

export default class Button extends Component {
  render() {
    const {text, color, tColor,style } = this.props
    return (
      <div>
        <button className={`bg-${color} text-${tColor} rounded-[50px] px-4 py-2 text-sm font-bold ${style}`}>
            {text}
        </button>
      </div>
    )
  }
}
