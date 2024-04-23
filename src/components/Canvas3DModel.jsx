import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../assets/3D-Model/Scene";

export default function Canvas3DModel() {
    return (
        <Canvas camera={{ fov: 8 }} >
            <ambientLight intensity={1.25} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls />
            <Environment preset="sunset" />

        </Canvas>
    )
}