import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react';
import { getSize } from '../../../utils/getScreenSize';

const MyResponsivePie = ({ data }) => {
    const [windowSize, setWindowSize] = useState(getSize());
    const [position, setPosition] = useState({ x: "", y: "" });

    useEffect(() => {
        const positionX = windowSize === "lg" ? -320 : windowSize === "xl" ? -300 : -350;
        const positionY = 100;
        setPosition((pre) => {
            return { ...pre, x: positionX, y: positionY };
        })
    }, [windowSize])

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={{ from: 'color' }}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
        />
    )
};

export default MyResponsivePie;