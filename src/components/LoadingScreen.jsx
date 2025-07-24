import { useProgress } from '@react-three/drei'
import React, { useEffect } from 'react'

const LoadingScreen = (props) => {
    const { loading, setLoading } = props;
    const { progress, total, loaded, item } = useProgress()
    
    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setLoading(true)
            }, 800) // Slightly longer delay for better UX
        }
    }, [progress, total, loaded, item, setLoading])
    
    return (
        <div 
            className={`
                fixed inset-0 z-50 transition-all duration-1000 pointer-events-none
                flex items-center justify-center bg-gradient-dark
                ${loading ? 'opacity-0' : 'opacity-100'}
            `}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center animate-slide-up">
                {/* Name with animated reveal */}
                <div className="text-4xl md:text-8xl font-bold text-dark-100 relative mb-8">
                    <div 
                        className="absolute inset-0 overflow-hidden transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="text-gradient whitespace-nowrap">
                            Jasmit Singh
                        </div>
                    </div>
                    <div className="text-dark-600 whitespace-nowrap">
                        Jasmit Singh
                    </div>
                </div>

                {/* Loading progress */}
                <div 
                    className="w-80 max-w-sm mx-auto animate-slide-up"
                    style={{ animationDelay: '0.5s' }}
                >
                    {/* Progress bar */}
                    <div className="relative mb-4">
                        <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-accent rounded-full relative transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                            </div>
                        </div>
                    </div>

                    {/* Progress text */}
                    <div className="flex justify-between items-center text-sm text-dark-400">
                        <span>Loading Portfolio...</span>
                        <span className="font-mono">{Math.round(progress)}%</span>
                    </div>

                    {/* Current loading item */}
                    {item && (
                        <div 
                            className="mt-3 text-xs text-dark-500 truncate animate-fade-in"
                            key={item}
                        >
                            Loading: {item}
                        </div>
                    )}
                </div>

                {/* Loading animation */}
                <div 
                    className="mt-8 flex justify-center animate-slide-up"
                    style={{ animationDelay: '1s' }}
                >
                    <div className="flex gap-2">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className="w-2 h-2 bg-primary-400 rounded-full animate-pulse-soft"
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animationDuration: '1.5s'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Subtitle */}
                <p 
                    className="mt-6 text-dark-400 text-lg font-medium animate-slide-up"
                    style={{ animationDelay: '1.5s' }}
                >
                    Full Stack Developer & Designer
                </p>
            </div>
        </div>
    )
}

export default LoadingScreen