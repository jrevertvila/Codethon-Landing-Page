/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\edificio1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/edificio1.glb')
  const groupRef = useRef();
  useFrame(() => {
    // Aquí puedes actualizar la rotación del modelo
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Por ejemplo, rota en el eje Y a una velocidad de 0.01 radianes por fotograma
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={0.9} position={[0, -0.1, 0]}>
      <group position={[0, 0, -0.232]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.01}>
        <mesh geometry={nodes.baseTorre2.geometry} material={materials.standardSurface2} position={[117.835, 16.352, -24.509]} scale={[1, 1, 1.392]} />
        <mesh geometry={nodes.Body1.geometry} material={materials['Steel - Satin']} />
        <mesh geometry={nodes.Cuerpo1.geometry} material={materials.standardSurface1} position={[-17.772, 15.491, 52.54]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.246, 1.301, 1.246]} />
        <mesh geometry={nodes.Cuerpo2.geometry} material={materials.standardSurface1} position={[-76.608, 7.06, 52.54]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[1.246, 1.301, 1.246]} />
        <mesh geometry={nodes.decopared59.geometry} material={materials.standardSurface2} position={[59.213, 8.405, -83.614]} scale={[1, 1, 1.089]} />
        <mesh geometry={nodes.decopared60.geometry} material={materials.standardSurface2} position={[69.621, 8.405, -83.614]} scale={[1, 1, 1.089]} />
        <mesh geometry={nodes.pasted__Body15.geometry} material={materials.standardSurface1} position={[0.706, 0, 0]} scale={[1.154, 1, 1]} />
        <mesh geometry={nodes.pasted__Body16.geometry} material={materials.standardSurface1} position={[-15.162, 42.284, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.203, 1, 1]} />
        <mesh geometry={nodes.pasted__Body17.geometry} material={materials.standardSurface1} position={[-45.562, 42.284, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.203, 1, 1]} />
        <mesh geometry={nodes.pasted__Body18.geometry} material={materials.standardSurface1} position={[30.276, -107, -11.434]} rotation={[0, 0, -Math.PI / 2]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body19.geometry} material={materials.standardSurface1} position={[30.276, -124.471, -11.434]} rotation={[0, 0, -Math.PI / 2]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body20.geometry} material={materials.standardSurface1} position={[-148.001, -2.356, 0]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.pasted__Body22.geometry} material={materials.standardSurface1} position={[116.841, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body23.geometry} material={materials.standardSurface1} position={[45.976, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body24.geometry} material={materials.standardSurface1} position={[134.183, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body25.geometry} material={materials.standardSurface1} position={[99.285, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body26.geometry} material={materials.standardSurface1} position={[63.96, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__Body5.geometry} material={materials.standardSurface1} position={[81.944, 17.239, -10.981]} scale={1.847} />
        <mesh geometry={nodes.pasted__pCube44.geometry} material={materials.standardSurface1} position={[-78.607, 19.577, 58.854]} scale={[2.987, 2.987, 1.508]} />
        <mesh geometry={nodes.pasted__pCube50.geometry} material={materials.standardSurface1} position={[-26.315, 15.555, -27.476]} rotation={[0, 0, -0.532]} scale={[2.884, 0.183, 4.342]} />
        <mesh geometry={nodes.pasted__pCube53.geometry} material={materials.standardSurface1} position={[185.985, -71.822, 108.945]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube54.geometry} material={materials.standardSurface1} position={[162.585, -71.822, 108.945]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube55.geometry} material={materials.standardSurface1} position={[140.391, -71.822, 108.945]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube56.geometry} material={materials.standardSurface1} position={[140.391, -71.822, 138.618]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube57.geometry} material={materials.standardSurface1} position={[162.585, -71.822, 138.618]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube58.geometry} material={materials.standardSurface1} position={[185.985, -71.822, 138.618]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube59.geometry} material={materials.standardSurface1} position={[140.391, -71.822, 165.878]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube60.geometry} material={materials.standardSurface1} position={[162.585, -71.822, 165.878]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube61.geometry} material={materials.standardSurface1} position={[185.985, -71.822, 165.878]} scale={4.4} />
        <mesh geometry={nodes.pasted__pCube63.geometry} material={materials.standardSurface1} position={[-51.345, 19.577, 58.854]} scale={[2.987, 2.987, 1.508]} />
        <mesh geometry={nodes.pasted__pCube64.geometry} material={materials.standardSurface1} position={[-27.309, 19.577, 58.854]} scale={[2.987, 2.987, 1.508]} />
        <mesh geometry={nodes.pasted__pCube65.geometry} material={materials.standardSurface1} position={[-78.607, -1.054, 58.854]} scale={[2.987, 2.987, 1.508]} />
        <mesh geometry={nodes.pasted__pCube69.geometry} material={materials.standardSurface1} position={[13.17, 28.301, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.pasted__pCube70.geometry} material={materials.standardSurface1} position={[-60.539, -30.668, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.pCube2.geometry} material={materials.standardSurface1} position={[-23.586, 0, -1.812]} scale={[107.828, 34.649, 121.42]} />
        <mesh geometry={nodes.pCube3.geometry} material={materials.standardSurface1} position={[14.424, 25.604, -40.446]} scale={[31.901, 38.977, 4.077]} />
        <mesh geometry={nodes.pCube4.geometry} material={materials.standardSurface1} position={[-40.869, 17.496, 45.839]} scale={[13.364, 0.583, 7.947]} />
        <mesh geometry={nodes.pCube5.geometry} material={materials.standardSurface1} position={[-77.607, -9.516, 45.839]} rotation={[0, 0, Math.PI / 2]} scale={[9.988, 0.583, 7.947]} />
        <mesh geometry={nodes.polySurface1.geometry} material={materials.standardSurface1} position={[217.369, -71.822, 100.702]} scale={4.4} />
        <mesh geometry={nodes.PUERTA_v2Cuerpo1.geometry} material={materials.standardSurface1} position={[-63.476, 15.491, 52.54]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.246, 1.301, 1.246]} />
        <mesh geometry={nodes.triangulo16.geometry} material={materials.standardSurface2} position={[61.437, 8.405, -82.042]} />
        <mesh geometry={nodes.valla59.geometry} material={materials.standardSurface2} position={[74.643, 8.29, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla60.geometry} material={materials.standardSurface2} position={[75.148, 11.409, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla61.geometry} material={materials.standardSurface2} position={[76.628, 14.875, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla62.geometry} material={materials.standardSurface2} position={[78.475, 18.106, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla63.geometry} material={materials.standardSurface2} position={[81.16, 20.75, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla64.geometry} material={materials.standardSurface2} position={[83.972, 22.974, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla65.geometry} material={materials.standardSurface2} position={[87.413, 24.527, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla66.geometry} material={materials.standardSurface2} position={[91.147, 25.618, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla67.geometry} material={materials.standardSurface2} position={[95.302, 26.079, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla68.geometry} material={materials.standardSurface2} position={[99.948, 25.25, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla69.geometry} material={materials.standardSurface2} position={[104.621, 23.517, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla70.geometry} material={materials.standardSurface2} position={[108.559, 20.708, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla71.geometry} material={materials.standardSurface2} position={[111.399, 17.957, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla72.geometry} material={materials.standardSurface2} position={[113.174, 14.806, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla73.geometry} material={materials.standardSurface2} position={[114.683, 11.611, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla74.geometry} material={materials.standardSurface2} position={[115.393, 7.572, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla75.geometry} material={materials.standardSurface2} position={[115.126, 2.78, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla76.geometry} material={materials.standardSurface2} position={[113.928, -0.992, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.valla77.geometry} material={materials.standardSurface2} position={[112.286, -4.409, -27.622]} scale={[1, 1, 1.743]} />
        <mesh geometry={nodes.ventana19.geometry} material={materials.standardSurface2} position={[84.35, 93.745, -1.077]} rotation={[0, 0, 0.832]} />
        <mesh geometry={nodes.ventana20.geometry} material={materials.standardSurface2} position={[116.274, 32.633, -0.93]} rotation={[0, 0, 0.156]} />
        <mesh geometry={nodes.ventana21.geometry} material={materials.standardSurface2} position={[110.961, -24.554, -0.93]} rotation={[0, 0, -0.403]} />
        <mesh geometry={nodes.ventana22.geometry} material={materials.standardSurface2} position={[63.142, -75.55, -0.159]} rotation={[0, 0, -1.084]} />
        <mesh geometry={nodes.ventana23.geometry} material={materials.standardSurface2} position={[84.35, 93.745, -19.135]} rotation={[0, 0, 0.832]} />
        <mesh geometry={nodes.ventana24.geometry} material={materials.standardSurface2} position={[116.274, 32.633, -18.988]} rotation={[0, 0, 0.156]} />
        <mesh geometry={nodes.ventana25.geometry} material={materials.standardSurface2} position={[110.961, -24.554, -18.988]} rotation={[0, 0, -0.403]} />
        <mesh geometry={nodes.ventana26.geometry} material={materials.standardSurface2} position={[63.142, -75.55, -18.217]} rotation={[0, 0, -1.084]} />
        <mesh geometry={nodes.ventana27.geometry} material={materials.standardSurface2} position={[84.35, 93.745, -36.687]} rotation={[0, 0, 0.832]} />
        <mesh geometry={nodes.ventana28.geometry} material={materials.standardSurface2} position={[116.274, 32.633, -36.54]} rotation={[0, 0, 0.156]} />
        <mesh geometry={nodes.ventana29.geometry} material={materials.standardSurface2} position={[110.961, -24.554, -36.54]} rotation={[0, 0, -0.403]} />
        <mesh geometry={nodes.ventana30.geometry} material={materials.standardSurface2} position={[63.142, -75.55, -35.769]} rotation={[0, 0, -1.084]} />
        <mesh geometry={nodes.ventana31.geometry} material={materials.standardSurface2} position={[84.35, 93.745, -54.666]} rotation={[0, 0, 0.832]} />
        <mesh geometry={nodes.ventana32.geometry} material={materials.standardSurface2} position={[116.274, 32.633, -54.519]} rotation={[0, 0, 0.156]} />
        <mesh geometry={nodes.ventana33.geometry} material={materials.standardSurface2} position={[110.961, -24.554, -54.519]} rotation={[0, 0, -0.403]} />
        <mesh geometry={nodes.ventana34.geometry} material={materials.standardSurface2} position={[63.142, -75.55, -53.748]} rotation={[0, 0, -1.084]} />
      </group>
    </group>
  )
}

useGLTF.preload('/edificio1.glb')