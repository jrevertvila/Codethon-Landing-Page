import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelIphone from "../assets/3D-Model/Scene";

export default function Canvas3DModel({ modelo3d_filename }) {
    // console.log(modelo3d_filename);
    const [importedComponent, setImportedComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const importComponent = async () => {
            const module = await import('../assets/3D-Model/' + modelo3d_filename);
            const AnotherComponent = module.default;
            setImportedComponent(<AnotherComponent />);
            
        };
        importComponent();
        setIsLoading(true)
    }, []);

    return (
        <>
            {
                (importedComponent != null ) ?
                    <Canvas camera={{ fov: 18 }} style={{ background: "#f6f8fa", borderRadius: "40px", border: "1px solid #e7e7e7" }}>
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                            {importedComponent}
                        </Suspense>
                        <OrbitControls />
                        <Environment preset="sunset" />

                    </Canvas> :
                    <span>LOADING</span>
            }


        </>

    )
}