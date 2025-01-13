import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { OrbitControls, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../components/canvasloader';
import HackerRoom from '../components/HackerRoom'
import {Leva,useControls } from 'leva';
import {useMediaQuery} from 'react-responsive';
import Target from '../components/Target';
import ReactLogo from '../components/reactlogo';
import Cube from '../components/cube';
import HeroCamera from '../components/HeroCamera';
// function Model() {
//   const { scene } = useGLTF('/hacker-room.glb'); 
//   return (
//     <primitive 
//       object={scene} 
//       scale={[0.05, 0.05, 0.05]}  
//       position={[0, 0, 0]} 
//       rotation={[0, 280, 0]} 
//     />
//   );
// }

const Hero = () => {
//   const x=useControls('ReactLogo',{
//     positionX : {value:0, min:-10, max:10},
//     positionY : {value:2.5, min:-10, max:10},
//     positionZ : {value:2.5, min:-10, max:10},
//     rotationX : {value:0, min:-10, max:10},
//     rotationY : {value:0, min:-10, max:10}, 
//     rotationZ : {value:0, min:-10, max:10},
//     scale:      {value:1, min:0.001, max:1}

//   }
//  )
  const smallerscreen= useMediaQuery({maxWidth:768})
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col mt-20 gap-3">
        <p className="text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Anamika <span className="waving-hand">👋</span>
        </p>
      </div>

      {/* Animation */}
      <div className="w-full h-full absolute">
      {/* <Leva/> */}
        <Canvas className="w-full h-full">
          {/* <Suspense fallback={<CanvasLoader />}> */}
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 10]} intensity={1.5} />
            {/* <Model /> */}
            <HeroCamera>
            <HackerRoom
            //  scale={x.scale} 
            //  position={[x.positionX, x.positionY ,x.positionZ]} 
            //  rotation={[x.rotationX, x.rotationY ,x.rotationZ]} 
            position={[0,smallerscreen ?-1 :-2 ,0.1]}
            scale={smallerscreen ? 0.027 :0.035} fro smaller screens
            rotation={[0.3,3.4,0]}
            /></HeroCamera>
            {/* <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} /> */}
            <group>
              <Target
                scale={smallerscreen?0.37:0.47} 
                position={[smallerscreen? -2.3:-4.2, smallerscreen?0.6:0.9,3.5]} 
                rotation={[0.2,0.8,0]} />
              <ReactLogo
               scale={smallerscreen?0.002 :0.003} 
             position={[smallerscreen? 2.5:4.2, 1.7 , 1.3]} 
             rotation={[0,-0.8,0]} 
            />
            <Cube
            position={[smallerscreen?3:7,smallerscreen? -0.7 : -2.5, 0]} rotation={[2.6, 0.8, -1.8]} scale={smallerscreen? 0.3:0.6} />
            </group>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10">

      </div>
    </section>
  );
};

export default Hero;
