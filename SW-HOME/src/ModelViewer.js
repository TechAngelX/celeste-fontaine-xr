import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three';

function Model() {
    const [obj, setObj] = useState(null);
    const loader = new OBJLoader();

    useEffect(() => {
        loader.load(
            '/images/products/3DObjects/test.obj',
            (loadedObj) => {
                console.log('Model loaded:', loadedObj);
                setObj(loadedObj);
            },
            undefined,
            (error) => {
                console.error('Model loading error:', error);
            }
        );
    }, [loader]);

    return <primitive object={obj} />;
}

const ModelViewer = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Model />
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
