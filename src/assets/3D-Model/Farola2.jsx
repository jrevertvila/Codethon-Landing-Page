/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\Farola2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Farola2.gltf')
  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh geometry={nodes.Cuerpo.geometry} material={materials['Steel - Satin']} scale={0.2} />
      <mesh geometry={nodes.Ramas.geometry} material={materials['Steel - Satin']} scale={0.2} />
      <mesh geometry={nodes.Lámpara2.geometry} material={materials['Steel - Satin']} scale={0.2} />
      <mesh geometry={nodes.Lámpara3.geometry} material={materials['Steel - Satin']} scale={0.2} />
      <mesh geometry={nodes.Lámpara1.geometry} material={materials['Steel - Satin']} scale={0.2} />
    </group>
  )
}

useGLTF.preload('/Farola2.gltf')
