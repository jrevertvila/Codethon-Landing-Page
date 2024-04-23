import './Home.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../assets/3D-Model/Scene";


export function Home() {
    return (
        <div className="app__wrapper home">
            <h1>Home</h1>

            <Canvas>
                <ambientLight intensity={1.25} />
                <Model />
                <OrbitControls />
            </Canvas>

        </div>
    )
}