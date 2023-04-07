import React, { useState } from 'react';

export default function Picture() {
    const [query, setQuery] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSearch = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
            headers: {
                Authorization: '563492ad6f91700001000001db00a30bd9924183ac7f6d51591cdc42'
            }
        });
        const data = await response.json();
        if (data && data.photos && data.photos.length > 0) {
            setImageUrl(data.photos[0].src.large);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            {imageUrl && <img src={imageUrl} alt={query} style={{
                width : "250px",
                height : "340px",
                borderRadius:"15px"
            }} />}
        </div>
    );
}


