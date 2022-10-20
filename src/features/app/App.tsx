import React, { Suspense, lazy } from 'react';

const Presentation = lazy(() => import('../presentation/Presentation'));
const Skills = lazy(() => import('../skills/Skills'));

const App = () => {
    return (
        <>
            <Suspense >
                <Presentation />
                <Skills />
            </Suspense>
        </>
    )
}

export default App