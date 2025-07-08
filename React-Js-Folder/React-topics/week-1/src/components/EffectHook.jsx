import React from 'react'
import { useEffect } from 'react';

const EffectHook = () => {

   useEffect(() => {
    console.log('hello world')
   }, [])

   return <h2>use Effect hook</h2>
}

export default EffectHook;