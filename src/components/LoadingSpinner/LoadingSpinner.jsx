import React from 'react'

import "./LoadingSpinner.css";

const LoadingSpinner = ({scaleSet}) => {
  return (
    <div class="lds-roller" style={{transform:`scale(${scaleSet})`}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadingSpinner;