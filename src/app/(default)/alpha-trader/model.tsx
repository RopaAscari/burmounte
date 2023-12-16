"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import Wallet from "@/assets/images/wallet.png";
// import { Canvas } from "react-three-fiber";
// import Wallet from "@/assets/images/wallet.png";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/react.glb");
//   return <primitive object={scene} />;
// }

export default function ModelDisplay() {
  return (
    <div>
      <Image src={Wallet} alt="" height={1000} width={1000} />
    </div>
    // <Canvas className="w-full h-1/2" camera={{ position: [-10, 15, 15], fov: 50 }}>
    //   <ambientLight intensity={1} />
    //   <Suspense fallback={null}>
    //     <Model />
    //   </Suspense>
    //   <OrbitControls />
    // </Canvas>
  );
}
