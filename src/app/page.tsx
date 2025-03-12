import { Metadata } from 'next';
import Experience from './experience';

export const metadata: Metadata = {
    title: 'Nightingale hover effect (WebGPU)',
    description: 'WebGPU Nightingale hover effect using TSL',
};

const ExperimentPage = () => {
    return (
            <div className="canvas-wrapper">
                <Experience />
            </div>
    );
};

export default ExperimentPage;
