import { Canvas, useFrame } from '@react-three/fiber'
import Cube from './Cube'
import Sphere from './Sphere'
import Torus from './Torus'
import './App.css'



function App() {
 

  return (
 <Canvas>
 
 <directionalLight position={[0, 10, 0]} intensity={5} />

  {/* <group position={[-1,0,0]}>
<Cube position={[1,0,0]} color={"yellow"} size={[1,1,1]}/>
<Cube position={[-1,0,0]} color={"green"}/>
<Cube position={[-1,2,0]} color={"blue"}/>
<Cube position={[1,2,0]} color={"purple"}/>

</group> */}
{/* <Sphere position={[0,0,0]} args={[1,30,30]} color={"orange"} /> */}
<Torus position={[0,0,0]} args={[1,0.5,30,30]} color={"blue"} />
 </Canvas>

  )
}

export default App
