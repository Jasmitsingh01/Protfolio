import React from 'react'

const Menu = (props) => {
    const { onSectionChange, menuOpend, setMenuopend, section } = props;
    React.useEffect(() => {
        console.log(section);
    }, [section]);
    return (
        <>
            {/* Menu Toggle Button */}
            <button 
                className="fixed top-8 right-8 p-4 w-14 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-dark-800/80 backdrop-blur-md border border-dark-700/50"
                style={{ 
                    zIndex: 9999,
                    transform: menuOpend ? 'rotate(45deg)' : 'rotate(0deg)' 
                }}
                onClick={() => setMenuopend(!menuOpend)}
            >
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                    <div 
                        className="bg-primary-400 h-0.5 rounded-full w-6 transition-all duration-300"
                        style={{
                            transform: menuOpend ? 'rotate(45deg) translateY(1px)' : 'rotate(0deg) translateY(-2px)',
                        }}
                    />
                    <div 
                        className="bg-primary-400 h-0.5 rounded-full w-6 my-1 transition-all duration-300"
                        style={{
                            opacity: menuOpend ? 0 : 1,
                            transform: menuOpend ? 'translateX(10px)' : 'translateX(0px)',
                        }}
                    />
                    <div 
                        className="bg-primary-400 h-0.5 rounded-full w-6 transition-all duration-300"
                        style={{
                            transform: menuOpend ? 'rotate(-45deg) translateY(-1px)' : 'rotate(0deg) translateY(2px)',
                        }}
                    />
                </div>
            </button>

           

            {/* Menu Overlay */}
            {menuOpend && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
                    style={{ zIndex: 9998 }}
                    onClick={() => setMenuopend(false)}
                />
            )}

            {/* Menu Panel */}
            <div
                className={`
                    fixed top-0 right-0 bottom-0 bg-dark-800/90 backdrop-blur-md border-l border-dark-700/50 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out
                    ${menuOpend ? 'w-80 opacity-100' : 'w-0 opacity-0'}
                `}
                style={{ zIndex: 9998 }}
            >
                {/* Menu Header */}
                <div 
                    className={`p-8 border-b border-dark-700/30 transition-all duration-300 ${
                        menuOpend ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}
                    style={{ transitionDelay: menuOpend ? '200ms' : '0ms' }}
                >
                    <h2 className="text-2xl font-bold text-gradient">Navigation</h2>
                    <p className="text-sm text-dark-400 mt-1">Explore my portfolio</p>
                </div>

                {/* Menu Items */}
                <div className="flex-1 flex items-start justify-center flex-col gap-2 p-8">
                    {[
                        { label: 'About', section: 0, icon: '👨‍💻', description: 'Learn about me' },
                        { label: 'Portfolio', section: 1, icon: '🚀', description: 'Interactive experience' },
                        { label: 'Contact', section: 2, icon: '📧', description: 'Get in touch' }
                    ].map((item, index) => (
                        <div
                            key={item.label}
                            className={`w-full transition-all duration-300 ${
                                menuOpend ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                            style={{ 
                                transitionDelay: menuOpend ? `${300 + index * 100}ms` : '0ms' 
                            }}
                        >
                            <button
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group flex items-center gap-4 hover:translate-x-2 ${
                                    section === item.section 
                                        ? 'bg-primary-600/20 border border-primary-500/30' 
                                        : 'hover:bg-dark-800/30'
                                }`}
                                onClick={() => {
                                    console.log(`Menu: Navigating to section ${item.section}: ${item.label}`);
                                    onSectionChange(item.section);
                                    setMenuopend(false);
                                }}
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <div>
                                    <div className={`text-xl font-semibold transition-colors duration-300 ${
                                        section === item.section 
                                            ? 'text-primary-400' 
                                            : 'text-dark-100 group-hover:text-primary-400'
                                    }`}>
                                        {item.label}
                                    </div>
                                    <div className="text-sm text-dark-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {item.description}
                                    </div>
                                </div>
                                {section === item.section && (
                                    <div className="ml-auto w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Menu Footer */}
                <div 
                    className={`p-8 border-t border-dark-700/30 transition-all duration-300 ${
                        menuOpend ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: menuOpend ? '400ms' : '0ms' }}
                >
                    <div className="text-center">
                        <div className="text-sm text-dark-400 mb-3">Connect with me</div>
                        <div className="flex justify-center gap-4">
                            {[
                                { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
                                { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
                               
                            ].map((social) => (
                                <button
                                    key={social.label}
                                    className="w-10 h-10 bg-dark-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:-translate-y-1 border border-dark-700/30"
                                    onClick={() => window.open(social.url, '_blank')}
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu