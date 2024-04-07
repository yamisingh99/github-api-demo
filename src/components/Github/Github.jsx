import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    const [user, setUser] = useState('yamisingh99'); // Set default user to 'yamisingh99'
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch default user data when component mounts
        fetchUserData(user);
    }, []); // Empty dependency array to fetch only once when component mounts

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
            .catch(error => {
                console.error('Error fetching GitHub user data:', error);
            });
    }

    function saveValue() {
        fetchUserData(user); // Fetch user data when submit button is clicked
    }

    return (
<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    {userData && (
        <div className="flex flex-col items-center">
            <div className="text-center text-white-600 text-lg">Login: {userData.login}</div>
            <div className="text-center text-white-600 text-lg">Followers: {userData.followers}</div>
            <img src={userData.avatar_url} alt="Git picture" width={300} className="mb-4 rounded-full" />
        </div>
    )}
    <p className="text-center text-white-600 text-lg">Enter your GitHub ID to check status</p>
    <input
        className="text-black bg-gray-200 p-2 rounded-md mb-4"
        type="text"
        placeholder='Enter GitHub username'
        value={user}
        onChange={e => setUser(e.target.value)}
        required
    />
    <button onClick={saveValue} className='bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Submit</button>
</div>

    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yamisingh99');
    return response.json();
};
