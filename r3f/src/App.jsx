import { Canvas, useFrame } from '@react-three/fiber'
import Cube from './Cube'
import './App.css'



function App() {
 

  return (
 <Canvas>
 
 <directionalLight position={[0, 10, 0]} intensity={5} />

  <group position={[-1,0,0]}>
<Cube position={[1,0,0]} color={"yellow"} size={[1,1,1]}/>
<Cube position={[-1,0,0]} color={"green"}/>
<Cube position={[-1,2,0]} color={"blue"}/>
<Cube position={[1,2,0]} color={"purple"}/>
</group>
 </Canvas>
  )
}

export default App
