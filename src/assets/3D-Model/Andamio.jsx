/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\andamio.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export default function Model(props) {
  const { nodes, materials } = useGLTF('/andamio.glb')
  const groupRef = useRef();
  useFrame(() => {
    // Aquí puedes actualizar la rotación del modelo
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Por ejemplo, rota en el eje Y a una velocidad de 0.01 radianes por fotograma
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={5} position={[0, -0.5, 0]}>
      <group position={[-0.007, 0.018, -0.014]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.pasted__pasted__pasted__pCylinder19.geometry} material={materials.standardSurface1} position={[1.503, -11.066, -16.199]} rotation={[2.173, 0.002, -Math.PI]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder11.geometry} material={materials.standardSurface1} position={[1.121, 14.035, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder12.geometry} material={materials.standardSurface1} position={[-4.219, 14.022, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder13.geometry} material={materials.standardSurface1} position={[-4.219, 1.94, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder14.geometry} material={materials.standardSurface1} position={[1.121, 1.954, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder15.geometry} material={materials.standardSurface1} position={[-4.219, 0.165, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder16.geometry} material={materials.standardSurface1} position={[1.121, 0.178, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder17.geometry} material={materials.standardSurface1} position={[-4.219, -11.232, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder18.geometry} material={materials.standardSurface1} position={[1.121, -11.219, -16.09]} rotation={[3.136, -0.002, 1.571]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pasted__pCylinder19.geometry} material={materials.standardSurface1} position={[1.503, 13.952, -16.197]} rotation={[-2.121, 0.002, -Math.PI]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder1.geometry} material={materials.standardSurface1} position={[0.806, -11.855, -10.738]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pasted__pCylinder10.geometry} material={materials.standardSurface1} position={[-5.353, 2.273, -10.417]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder11.geometry} material={materials.standardSurface1} position={[-5.353, 13.729, -10.417]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder12.geometry} material={materials.standardSurface1} position={[-5.353, -10.928, -4.96]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder13.geometry} material={materials.standardSurface1} position={[-5.353, -0.125, -4.96]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder14.geometry} material={materials.standardSurface1} position={[-5.353, 2.273, -4.96]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder15.geometry} material={materials.standardSurface1} position={[-5.353, 13.729, -4.96]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder16.geometry} material={materials.standardSurface1} position={[-5.353, -10.928, 0.307]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder17.geometry} material={materials.standardSurface1} position={[-5.353, -0.125, 0.307]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder18.geometry} material={materials.standardSurface1} position={[-5.353, 2.273, 0.307]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder19.geometry} material={materials.standardSurface1} position={[-5.353, 13.729, 0.307]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder20.geometry} material={materials.standardSurface1} position={[0.806, -11.855, -5.237]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pasted__pCylinder21.geometry} material={materials.standardSurface1} position={[0.806, -11.855, -16.174]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pasted__pCylinder22.geometry} material={materials.standardSurface1} position={[0.806, -11.855, 0]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pasted__pCylinder4.geometry} material={materials.standardSurface1} position={[-5.353, 2.273, -15.886]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder5.geometry} material={materials.standardSurface1} position={[-5.353, 13.729, -15.886]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder6.geometry} material={materials.standardSurface1} position={[-5.353, -0.125, -15.886]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder7.geometry} material={materials.standardSurface1} position={[-5.353, -10.928, -15.886]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder8.geometry} material={materials.standardSurface1} position={[-5.353, -10.928, -10.417]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pasted__pCylinder9.geometry} material={materials.standardSurface1} position={[-5.353, -0.125, -10.417]} rotation={[1.619, -1.565, 0.048]} scale={[0.159, 0.159, 0.176]} />
        <mesh geometry={nodes.pCube1.geometry} material={materials.standardSurface1} position={[-2.061, 1.231, -16.077]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube10.geometry} material={materials.standardSurface1} position={[-1.023, 1.231, -5.138]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube11.geometry} material={materials.standardSurface1} position={[-2.061, 1.231, -5.138]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube12.geometry} material={materials.standardSurface1} position={[-3.165, 1.231, -5.138]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube13.geometry} material={materials.standardSurface1} position={[0.113, 1.231, 0.118]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube14.geometry} material={materials.standardSurface1} position={[-1.023, 1.231, 0.118]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube15.geometry} material={materials.standardSurface1} position={[-2.061, 1.231, 0.118]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube16.geometry} material={materials.standardSurface1} position={[-3.165, 1.231, 0.118]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube2.geometry} material={materials.standardSurface1} position={[-3.165, 1.231, -16.077]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube3.geometry} material={materials.standardSurface1} position={[-1.023, 1.231, -16.077]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube4.geometry} material={materials.standardSurface1} position={[0.113, 1.231, -16.077]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube5.geometry} material={materials.standardSurface1} position={[0.113, 1.231, -10.6]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube6.geometry} material={materials.standardSurface1} position={[-1.023, 1.231, -10.6]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube7.geometry} material={materials.standardSurface1} position={[-2.061, 1.231, -10.6]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube8.geometry} material={materials.standardSurface1} position={[-3.165, 1.231, -10.6]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCube9.geometry} material={materials.standardSurface1} position={[0.113, 1.231, -5.138]} scale={[0.963, 26.824, 0.122]} />
        <mesh geometry={nodes.pCylinder1.geometry} material={materials.standardSurface1} position={[-3.902, -11.855, 0]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pCylinder10.geometry} material={materials.standardSurface1} position={[1.133, 14.062, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder11.geometry} material={materials.standardSurface1} position={[-4.207, -11.178, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder12.geometry} material={materials.standardSurface1} position={[1.133, -11.178, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder2.geometry} material={materials.standardSurface1} position={[-3.902, -11.855, -5.237]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pCylinder3.geometry} material={materials.standardSurface1} position={[-3.902, -11.855, -10.738]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pCylinder4.geometry} material={materials.standardSurface1} position={[-3.902, -11.855, -16.174]} rotation={[1.571, 0, 0]} scale={[0.159, 0.159, 0.609]} />
        <mesh geometry={nodes.pCylinder5.geometry} material={materials.standardSurface1} position={[1.133, 1.998, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder6.geometry} material={materials.standardSurface1} position={[-4.207, 1.998, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder7.geometry} material={materials.standardSurface1} position={[-4.207, 0.23, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder8.geometry} material={materials.standardSurface1} position={[1.133, 0.23, 2.769]} scale={0.192} />
        <mesh geometry={nodes.pCylinder9.geometry} material={materials.standardSurface1} position={[-4.207, 14.062, 2.769]} scale={0.192} />
      </group>
    </group>
  )
}

useGLTF.preload('/andamio.glb')