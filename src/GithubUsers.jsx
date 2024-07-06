import React, { useState, useEffect } from 'react';
import useFetchData from './useFetchData';
import Loader from './Loader';
const GithubUsers = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [data, error] = useFetchData('https://dummyjson.com/users');

    useEffect(() => {
        if (searchInput) {
            fetch(`https://dummyjson.com/users/search?q=${searchInput}`)
                .then(response => response.json())
                .then(data => setSearchData(data))
                .catch(error => console.error('Error fetching search data:', error));
        } else {
            setSearchData(null);
        }
    }, [searchInput]);

    function handleSearch(e) {
        setSearchInput(e.target.value);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!data) {
        return <Loader/>
    }

    const usersToDisplay = searchInput ? searchData?.users : data.users;

    return (
        <div className='container p-4 mx-auto min-h-[90vh]'>
            <h2 className='text-center text-lg font-bold'>User Profiles</h2>
            <input
                type="text"
                placeholder='Search for a user'
                className='border-2 border-gray-200 px-3 py-2 rounded-md w-full my-4 focus:border-purple-300'
                value={searchInput}
                onChange={handleSearch}
            />
            <div className='grid grid-cols-2 gap-4 my-4'>
                {usersToDisplay ? (
                    usersToDisplay.map(user => (
                        <div key={user.id} className='shadow-lg shadow-gray-200 p-2 rounded-md border border-gray-200'>
                            <p>{user.firstName} {user.lastName}</p>
                            <span className='text-sm text-gray-600'>{user.company.title}</span>
                        </div>
                    ))
                ) : (
                    <div>No users found.</div>
                )}
            </div>
            <h2 className='text-center text-lg font-bold'>Using Custom Hook - useFetchData</h2>
        </div>
    );
}

export default GithubUsers;
