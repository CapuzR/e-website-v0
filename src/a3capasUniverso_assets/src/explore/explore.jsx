// import React, {Suspense} from 'react';
// import {useGLTF} from '@react-three/drei/core/useGLTF';
// import { Canvas } from "@react-three/fiber"
// import fm from "../../assets/models/fm.glb";

// function Model() {
//   const { scene } = useGLTF(fm);
//   return <primitive object={scene} />;
// }

// export default function Explore(props) {
//   return (
//     <div style = {{height:"100vh", backgroundColor:"#fde2e4"}}>
//       <Canvas camera={{position: [10, 18, 23], fov: 0.5 }}>
//         <pointLight position={[10, 10, 10]} intensity={1.3} />
//         <Suspense fallback={null}>
//           <Model/>
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }