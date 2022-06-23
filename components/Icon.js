import React from 'react'
import * as ReactIcons from 'react-icons/fa'

export default function Icon(props) {
const { icon, className } = props
const Element = ReactIcons[icon]
return <Element {...props}/>
}