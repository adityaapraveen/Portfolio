import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const Contributions = () => {
    const grayscaleTheme = {
        dark: ['#161616', '#2a2a2a', '#555', '#999', '#ddd'],
        light: ['#eee', '#ccc', '#999', '#666', '#333'],
    };

    return (
        <section id="contributions" style={{ padding: '2rem 0' }}>
            <div className="contrib-grid">
                <GitHubCalendar
                    username="adityaapraveen"
                    colorScheme="dark"
                    theme={grayscaleTheme}
                    blockSize={11}
                    blockMargin={3}
                    fontSize={11}
                    hideColorLegend
                    hideTotalCount
                    style={{ width: '100%' }}
                />
            </div>
            <p className="mono" style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                marginTop: '0.75rem',
            }}>
                My GitHub graph isn’t inconsistent. <br />
                It’s just event-driven.
            </p>
        </section>
    );
};

export default Contributions;
