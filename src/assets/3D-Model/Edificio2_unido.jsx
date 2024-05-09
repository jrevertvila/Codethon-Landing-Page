/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\edificio2_unido.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/edificio2_unido.glb')
  const groupRef = useRef();
  useFrame(() => {
    // Aquí puedes actualizar la rotación del modelo
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Por ejemplo, rota en el eje Y a una velocidad de 0.01 radianes por fotograma
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={0.9} position={[0, -0.1, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[23.513, 0, -76.261]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.prova1Body2.geometry} material={materials['prova1:Steel - Satin']} position={[0, 592.33, 0]} scale={10} />
          <mesh geometry={nodes.prova1Body3.geometry} material={materials['prova1:Steel - Satin']} position={[0, 592.33, 0]} scale={10} />
        </group>
        <mesh geometry={nodes.prova1pCube25.geometry} material={materials.lambert1} position={[-397.66, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube26.geometry} material={materials.lambert1} position={[-385.581, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube27.geometry} material={materials.lambert1} position={[-366.718, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube28.geometry} material={materials.lambert1} position={[-378.798, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube29.geometry} material={materials.lambert1} position={[-346.554, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube30.geometry} material={materials.lambert1} position={[-10.275, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube31.geometry} material={materials.lambert1} position={[17.523, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube32.geometry} material={materials.lambert1} position={[5.443, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube33.geometry} material={materials.lambert1} position={[36.386, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube34.geometry} material={materials.lambert1} position={[24.306, 25.776, -24.749]} scale={[1.351, 1, 70.272]} />
        <mesh geometry={nodes.prova1pCube5.geometry} material={materials.lambert1} position={[-8.541, 0, 0]} scale={[107.839, 52.224, 126.374]} />
        <mesh geometry={nodes.prova1polySurface113.geometry} material={materials['prova1:standardSurface2']} position={[-376.091, 130.374, -34.91]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface130.geometry} material={materials['prova1:standardSurface2']} position={[-376.506, 130.374, -61.221]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface147.geometry} material={materials['prova1:standardSurface2']} position={[-376.506, 94.791, -61.221]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface164.geometry} material={materials['prova1:standardSurface2']} position={[-376.091, 94.791, -34.91]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface190.geometry} material={materials.lambert1} position={[1597.944, -1027.677, 389.697]} scale={[34.67, 48.601, 10.008]} />
        <mesh geometry={nodes.prova1polySurface45.geometry} material={materials['prova1:standardSurface2']} position={[-254.378, 130.374, -34.91]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface62.geometry} material={materials['prova1:standardSurface2']} position={[-254.378, 94.791, -34.91]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface79.geometry} material={materials['prova1:standardSurface2']} position={[-254.378, 94.791, -61.221]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.prova1polySurface96.geometry} material={materials['prova1:standardSurface2']} position={[-254.378, 130.374, -61.221]} rotation={[0, 0, Math.PI / 2]} />
      </group>
      <mesh geometry={nodes.Body2.geometry} material={materials['Steel - Satin']} position={[0, 592.33, 0]} scale={10} />
      <mesh geometry={nodes.Body3.geometry} material={materials['Steel - Satin']} position={[0, 592.33, 0]} scale={10} />
      <mesh geometry={nodes.prova1polySurface39001.geometry} material={materials.lambert1} position={[3.452, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.prova1Cuerpo11001.geometry} material={materials.lambert1} position={[3.452, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.prova1polySurface189001.geometry} material={materials.lambert1} position={[3.452, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.prova1ventana45001.geometry} material={materials['prova1:standardSurface2']} position={[3.452, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <group position={[3.452, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh377.geometry} material={materials['prova1:standardSurface2']} />
        <mesh geometry={nodes.Mesh377_1.geometry} material={materials.lambert1} />
      </group>
    </group>
  )
}

useGLTF.preload('/edificio2_unido.glb')