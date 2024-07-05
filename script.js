const imageUrl = "https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg";

fetch(`https://api.trace.moe/search?url=${encodeURIComponent(imageUrl)}`)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        console.log(data); // Log the data to the console
        const result = data.result[0];
        document.getElementById('animeData').textContent = JSON.stringify(result, null, 2);
        document.getElementById('animeTitle').textContent = `Anime Title: ${result.anime}`;
    })
    .catch(error => console.error('Error fetching anime data:', error));
