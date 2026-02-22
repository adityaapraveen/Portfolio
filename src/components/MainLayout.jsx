import React from 'react';
import DockNav from './DockNav';
import PixelBlast from './PixelBlast';

const MainLayout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            {/* PixelBlast background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'auto',
            }}>
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#B19EEF"
                    patternScale={3.5}
                    patternDensity={0.1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={0.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.4}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            {/* Content */}
            <main className="container" style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </main>

            <DockNav />
        </div>
    );
};

export default MainLayout;
