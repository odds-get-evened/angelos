import { useState } from 'react';

const KeyManager = () => {
    const [keys, getKeys] = useState([]);

    return (
        <div>
            <div>key management</div>
        </div>
    );
};

exports.KeyManager = KeyManager;