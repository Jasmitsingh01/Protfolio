import { useProgress } from '@react-three/drei'
import React, { useEffect } from 'react'

const LoadingScreen = (props) => {
    const {loading, setLoading} = props;
  const { progress, total, loaded , item} =  useProgress()
  useEffect(()=>{
    if(progress ===100){
        setTimeout(()=>{
            setLoading(true)
        },500)
        
    }


  },[progress,total,loaded,item])
  return (
    <div className={`
        fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
        flex items-center justify-center bg-indigo-50
        ${loading ? 'opacity-0' : 'opacity-100'}
        
        `}>
            <div className='text-5xl md:text-9xl font-bold text-indigo-900 relative'>
                <div className={`
                absolute top-0 left-0  overflow-hidden truncate text-clip transition-all duration-500
                    `}
                    style={{
                        width:`${progress}%`
                    }}
                    >
                        Jasmit Singh
                    </div>
                    <div className=' opacity-40'>Jasmit Singh</div>

            </div>
        </div>
  )
}

export default LoadingScreen