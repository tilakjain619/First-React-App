import React, { useEffect, useReducer } from 'react'

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload}
        case 'SET_TOTAL_ITEMS':
            return { ...state, totalItem: action.payload };
        default:
            return state;
    }
}

const Pagination = () => {

    const [paginationState, dispatch] = useReducer(paginationReducer, {
        currentPage: 1,
        totalItem: 0
    })
    const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
    // useEffect(() => {
    //     dispatch({ type: 'SET_TOTAL_ITEMS', payload: data.length })
    // }, []);
   

    const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = data.slice(startIndex, endIndex);

    const handlePageClick = (newPage) =>{
        dispatch({type: 'SET_CURRENT_PAGE', payload: newPage})
    }
    return (
        <div className='p-2'>
            <ul className='grid gap-3'>
                {
                    displayedItems.map((item, index) =>(
                        <li key={index} className='rounded-md grid items-center justify-center h-[90px] w-full max-w-[400px] mx-auto bg-purple-400 hover:bg-purple-600 duration-100'>{item}</li>
                    ))
                }
            </ul>
            <div className='w-full max-w-[400px] mx-auto py-2 flex gap-2'>
                <button className='w-2/4 bg-green-500 p-2 rounded-md disabled:opacity-60' onClick={() => handlePageClick(paginationState.currentPage - 1)} disabled={paginationState.currentPage === 1}>Previous</button>
                <button className='w-2/4 bg-green-500 p-2 rounded-md disabled:opacity-60' onClick={() => handlePageClick(paginationState.currentPage + 1)} disabled={endIndex >= data.length}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
