
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Torus({position,size,color}){
    const ref = useRef()
    useFrame((state, delta)=>{
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
        ref.current.position.z = Math.sin(state.clock.getElapsedTime())*2
    })

    return(
        <mesh ref={ref} position={position}>
            <torusGeometry  args={size} />
            <meshStandardMaterial  color={color} />
        </mesh>
    )
}

export default Torus