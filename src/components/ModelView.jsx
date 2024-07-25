import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Loader from "./Loader";
import * as THREE from 'three';
import Lights from "./Lights";
import IPhone from "./IPhone";
import { Suspense } from "react";



const ModelView = ({index, groupRef, gsapType, 
    controlRef, setRotationState, size, item}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 
    'right-[-100%]' : ''}`}
    >
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />

        <PerspectiveCamera nakeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls 
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}

        />

        <group ref={groupRef} name = {`${index === 1} ?
        'small' : 'large`} position ={[0, 0, 0]}> 
        <Suspense fallback={<Loader />}>
            <IPhone 
                scale={index === 1 ? [25, 25, 35] : [27, 27, 27]}
                item={item}
                size={size}
            />
        </Suspense>
        </group>
    </View>
  )
}

export default ModelView