function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second
    }
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);



async function parallelCalls(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url));
        const responses = await Promise.all(fetchPromises);

        const dataPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });

        const data = await Promise.all(dataPromises);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

parallelCalls(urls);








async function awaitCall(url) {
    try {
        console.log('Fetching data...');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
const apiURL = 'https://api.example.com/data';
awaitCall(apiURL);