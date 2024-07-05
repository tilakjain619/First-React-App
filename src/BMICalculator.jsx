import React, { useMemo, useState } from 'react'

const BMICalculator = () => {

    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(160);

    function onWeightChange(e){
        setWeight(e.target.value);
    }

    function onHeightChange(e){
        setHeight(e.target.value);
    }

    const output = useMemo(()=>{
        const calHeight = height / 100;

        return (weight/(calHeight * calHeight)).toFixed(1);
    }, [weight, height])

    return (
        <div className='min-h-[83vh] grid justify-center items-center'>
            <div className="flex flex-col gap-2 w-80 bg-purple-200 py-4 px-6 rounded-lg">
                <h2 className='text-lg font-bold text-center my-3'>BMI Calculator</h2>
                <label htmlFor="weight">Weight: {weight}kg</label>
                <input onChange={onWeightChange} type="range" step="1" min="40" max="200" className='accent-purple-500' name='weight' />
                <label htmlFor="height">Height: {height}cm</label>
                <input onChange={onHeightChange} type="range" step="1" min="120" max="230" className='accent-purple-500' name='height' />
                <div className="bg-purple-600 p-2 rounded-md mt-2 text-white">
                    <p>Your BMI is <span className='output'>{output}</span></p>
                </div>
            </div>
        </div>
    )
}

export default BMICalculator
