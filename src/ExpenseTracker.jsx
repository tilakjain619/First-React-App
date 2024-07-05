import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState("");
    const [list, setList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [nextId, setNextId] = useState(1);
    function addExpense() {
        if (!expense || !amount) {
            return;
        }
        const newExpense = {
            id: nextId,
            title: expense,
            amount: Number(amount)
        }
        setList([...list, newExpense]);
        setTotalAmount(totalAmount + newExpense.amount);
        setExpense("");
        setAmount("");
        setNextId(nextId + 1);
    }
    let deleteExpense = (id) => {
        const expenseToDelete = list.find((expense) => expense.id === id);
        if (expenseToDelete) {
            setList(list.filter((expense) => expense.id !== id));
            setTotalAmount(totalAmount - expenseToDelete.amount);
        }
    }
    return (
        <div className='min-h-[80vh] pt-10'>
            <div className='min-w-60 max-w-fit mx-auto flex flex-col gap-2'>
                <h2 className='text-center text-lg my-2 font-bold'>Expense Tracker</h2>
                <input
                    onChange={(e) => setExpense(e.target.value)}
                    value={expense}
                    className='bg-slate-200 py-2 px-3 rounded-md'
                    type="text"
                    placeholder='Expense' />
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    className='bg-slate-200 py-2 px-3 rounded-md'
                    type="number"
                    placeholder='Amount' />
                <button className='bg-blue-500 py-1 px-2 rounded-md text-white' onClick={addExpense}>Add Expense</button>
            </div>
            {list.length >= 1 &&
            <ul className='mt-6 px-10 py-2 w-full sm:w-[400px] mx-auto'>
                <li className='flex flex-wrap gap-x-4 gap-y-3 border border-slate-200 p-2 rounded-md'>
                    <span className='min-w-24 flex-1'>Title</span>
                    <span className='min-w-24 flex-1'>Amount</span>
                    <span className='min-w-10 flex-1'>Options</span>
                </li>
                {list.map((item) => (
                    <li key={item.id} className='flex flex-wrap gap-x-4 gap-y-3 border border-slate-200 p-2 rounded-md'>
                        <span className='min-w-24 flex-1'>{item.title}</span>
                        <span className='min-w-24 flex-1'>Rs {item.amount}</span>
                        <button className='min-w-10 flex-1 bg-red-600 text-gray-200 rounded-sm px-3 py-1 text-sm' onClick={() => deleteExpense(item.id)}>Delete</button>
                    </li>
                ))}
                <li className='flex items-center gap-x-4 p-2 bg-gray-100'>
                    <span className='min-w-24 text-sm font-bold'>Total Expense</span>
                    <span className='min-w-24'>Rs {totalAmount}</span>
                </li>
            </ul>
            }
        </div>
    )
}

export default ExpenseTracker
