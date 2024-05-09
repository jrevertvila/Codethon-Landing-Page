/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\aerografo.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/aerografo.glb')
  const groupRef = useRef();
  useFrame(() => {
    // Aquí puedes actualizar la rotación del modelo
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Por ejemplo, rota en el eje Y a una velocidad de 0.01 radianes por fotograma
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={8} position={[0, -0.2, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.standardSurface1} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.phong1} />
      </group>
    </group>
  )
}

useGLTF.preload('/aerografo.glb')