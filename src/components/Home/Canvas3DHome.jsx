import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import ModelIphone from "../../assets/3D-Model/Scene.jsx";
import { Html } from '@react-three/drei'
import iphoneAsset from '../../assets/images/IphoneAsset.png'




function Loader() {
    // const { progress } = useProgress()
    return <Html center><img src={iphoneAsset} alt="iphone" /></Html>
}


export default function Canvas3DHome({ modelo3d_filename }) {
    // console.log(modelo3d_filename);
    const [importedComponent, setImportedComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);
    useEffect(() => {
        const importComponent = async () => {
            // const module = import.meta.glob
            const module = await import(`../../assets/3D-Model/${modelo3d_filename}.jsx`);
            const AnotherComponent = module.default;
            setImportedComponent(<AnotherComponent />);

        };
        importComponent();
        setIsLoading(true)
        console.log(isLoading);
}, []);

    return (
        <Canvas camera={{ fov: 18 }}>
            <ambientLight intensity={1.25} />
            <Suspense fallback={<Loader />}>
                {importedComponent}
            </Suspense>
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" />
        </Canvas>
    )
}