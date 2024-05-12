import { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text, } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

const Cube = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.5))
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 5]}
                    />
                    <color attach="background" args={["#00bbff"]}/>
                    <Text ref={textRef} fontSize={3.5} color="#000">
                    💻
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cube;