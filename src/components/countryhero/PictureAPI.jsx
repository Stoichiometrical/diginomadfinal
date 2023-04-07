import React, { useState } from 'react';

function Picture({ countryName }) {
    const [imageUrl, setImageUrl] = useState('');

    const handleSearch = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${countryName}&per_page=1`, {
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
            {imageUrl && <img src={imageUrl} alt={countryName} style={{width : "250px", height : "340px", borderRadius:"15px"}}/>}
        </div>
    );
}

export default Picture;
