import React, { Component } from 'react'
import Rodal from 'rodal';

const MODAL_SIZES = {
  's': {width: 200, height: 120},
  'm': {width: 400, height: 240},
  'l': {width: 800, height: 480},
}

export default class Modal extends Component {

  render() {
    const { visible, onClose, message, closeButtonText, size = 'm' } = this.props;

    const {width, height} = MODAL_SIZES[size]

    return (
      <Rodal visible={visible} onClose={onClose} width={width} height={height}>
          <div>{message}</div>
          <button onClick={onClose}>{closeButtonText}</button>
      </Rodal>
    )
  }
}