import React from 'react';

function NoPhotos () {
    return(
        <li className="not-found">
        <h3>No Results Found</h3>
        
        <img src={`https://www.flickr.com/photos/15277234@N00/2135789272/in/photolist-4fJtJY-XDvdn6-2eahHDc-4f9Vc6-2knBim-9uEvN-bzftNY-5qVmST-q4FA3y-a37dxz-4j2i7c-2gskUst-3zJuS5-qY5v4-5gKaXY-7jdshD-2gRd192-6MHoUL-4vZmRi-MNi8ga-97bSjf-Fb1rn-M5iLBd-37GCq9-65WyUP-2hwm6mb-7bB2XP-c9p29S-8MxgbC-Y9ZyBM-21CaC8-9A1pK-8WhGBx-53nyk4-95JunH-8WPb8K-8rbjw-2hP9TdP-Pk7D9Q-Ksniym-4VRc3q-2j1WrKj-8JbMBA-2iDYioE-CCbwyi-2iH9NwM-2hEvjEf-23Hjz9g-2YVBY8-aGVD42`} alt="" />
        </li>
    );
};

export default NoPhotos;