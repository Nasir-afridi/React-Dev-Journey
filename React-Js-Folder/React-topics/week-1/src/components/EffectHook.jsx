import React from 'react'
import { useEffect } from 'react';

const EffectHook = () => {

   useEffect(() => {
      console.log('Component mounted successfully!');

   }, [])
   return <h2>use Effect hook</h2>
}

export default EffectHook;