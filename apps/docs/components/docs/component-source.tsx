'use client'

import * as React from 'react'

export default function ComponentSource({ children }) {
  const [Code] = React.Children.toArray(children) as React.ReactElement[]

  return <div>{Code}</div>
}
