/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\mesaCorcho.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mesaCorcho.glb')
  const groupRef = useRef();
  useFrame(() => {
    // Aquí puedes actualizar la rotación del modelo
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Por ejemplo, rota en el eje Y a una velocidad de 0.01 radianes por fotograma
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={0.8} position={[0, 0.2, 0]} rotation={[0,0,0]}>
      <mesh geometry={nodes.mesaArtil.geometry} material={materials['standardSurface1.002']} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.arandela1.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.base.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.pata10.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.pata2.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.pata9.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.soporte.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.tronco.geometry} material={materials['standardSurface1.002']} />
        <mesh geometry={nodes.tuerquecita.geometry} material={materials['standardSurface1.002']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/mesaCorcho.glb')
