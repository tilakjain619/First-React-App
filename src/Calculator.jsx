import React, { useState } from 'react'

const Calculator = () => {

    const [input, setInput] = useState("0");
    const [text, setText] = useState("");

    function calculateResult(input){
        let result;
        try{
            const operators = ['+', '-', '/', '*', '%'];
            let operator = null;
            for(let i = 0; i<input.length; i++){
                if(operators.includes(input[i])){
                    operator = input[i];
                }
            }
            if(!operator){
                setInput(parseFloat(input).toString());
                return;
            }
            const [op1, op2] = input.split(operator).map(parseFloat);
            switch(operator){
                case '+':
                    result = op1 + op2;
                    break;
                case '-':
                    result = op1 - op2;
                    break;
                case '*':
                    result = op1 * op2;
                    break;
                case '/':
                    result = op1 / op2;
                    break;
                case '%':
                    result = op1 * op2 / 100;
                    break;
                default:
                    throw new Error("Invalid operator");
            }
            setInput(result.toString());
            setText(`${op1}${operator}${op2}`);
        }
        catch(error){
            setInput("Invalid Input Error");
        }
    }

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput("");
            setText("");
        }
        else if (value === '<') {
            setInput(input.slice(0, -1));
        }
        else if (value === '=') {
            calculateResult(input);
        }
        else {
            setInput((prevValue) => prevValue + value);
        }
    }
    return (
        <div className='min-h-[100vh] grid items-center justify-center'>
            <div className='w-80 h- pb-6 fit bg-black text-gray-100 rounded-lg shadow-2xl shadow-gray-300'>
                <h1 type="text" className='text-right min-h-24 px-6 pt-10 pb-2 text-5xl text-gray-300'>{input}</h1>
                <h1 type="text" className='text-right min-h-10 px-7 text-gray-400 text-lg'>{text}</h1>
                <div className='grid grid-cols-4 gap-2 p-4 justify-center items-center'>
                    <button onClick={() => handleButtonClick('C')} className='w-14 h-14 rounded-full bg-red-500'>C</button>
                    <button onClick={() => handleButtonClick('<')} className='w-14 h-14 rounded-full bg-orange-200 text-black'>&lt;</button>
                    <button onClick={() => handleButtonClick('%')} className='w-14 h-14 rounded-full bg-orange-200 text-black'>%</button>
                    <button onClick={() => handleButtonClick('/')} className='w-14 h-14 rounded-full bg-orange-400'>/</button>

                    <button onClick={() => handleButtonClick('7')} className='w-14 h-14 rounded-full bg-gray-900'>7</button>
                    <button onClick={() => handleButtonClick('8')} className='w-14 h-14 rounded-full bg-gray-900'>8</button>
                    <button onClick={() => handleButtonClick('9')} className='w-14 h-14 rounded-full bg-gray-900'>9</button>
                    <button onClick={() => handleButtonClick('*')} className='w-14 h-14 rounded-full bg-orange-400'>*</button>

                    <button onClick={() => handleButtonClick('4')} className='w-14 h-14 rounded-full bg-gray-900'>4</button>
                    <button onClick={() => handleButtonClick('5')} className='w-14 h-14 rounded-full bg-gray-900'>5</button>
                    <button onClick={() => handleButtonClick('6')} className='w-14 h-14 rounded-full bg-gray-900'>6</button>
                    <button onClick={() => handleButtonClick('-')} className='w-14 h-14 rounded-full bg-orange-400'>-</button>

                    <button onClick={() => handleButtonClick('1')} className='w-14 h-14 rounded-full bg-gray-900'>1</button>
                    <button onClick={() => handleButtonClick('2')} className='w-14 h-14 rounded-full bg-gray-900'>2</button>
                    <button onClick={() => handleButtonClick('3')} className='w-14 h-14 rounded-full bg-gray-900'>3</button>
                    <button onClick={() => handleButtonClick('+')} className='w-14 h-14 rounded-full bg-orange-400'>+</button>

                    <button onClick={() => handleButtonClick('0')} className='w-14 h-14 rounded-full bg-gray-900'>0</button>
                    <button onClick={() => handleButtonClick('00')} className='w-14 h-14 rounded-full bg-gray-900'>00</button>
                    <button onClick={() => handleButtonClick('.')} className='w-14 h-14 rounded-full bg-gray-900'>.</button>
                    <button onClick={() => handleButtonClick('=')} className='w-14 h-14 rounded-full bg-orange-400'>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
