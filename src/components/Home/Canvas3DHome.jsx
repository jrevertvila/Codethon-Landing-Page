import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import ModelIphone from "../assets/3D-Model/Scene";

export default function Canvas3DHome({ modelo3d_filename }) {
    // console.log(modelo3d_filename);
    const [importedComponent, setImportedComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const importComponent = async () => {
            const module = await import('../../assets/3D-Model/' + modelo3d_filename);
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
                    <Canvas camera={{ fov: 18 }}>
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