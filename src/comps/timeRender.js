import { useState, useEffect } from 'react';

const renderTime = (epoch) => {
    let d = new Date(epoch);
    let h = d.getHours().toString().padStart(2, '0');
    let m = d.getMinutes().toString().padStart(2, '0');
    let s = d.getSeconds().toString().padStart(2, '0');

    let f = h + ':' + m + ':' + s;

    return f;
};

const TimerRender = () => {
    const [timeNow, setTimeNow] = useState(Date.now());

    useEffect(() => {
        setInterval(() => {
            setTimeNow(Date.now());
        }, 1000);
    }, [timeNow]);

    return (
        <div className='m-3'>{renderTime(timeNow)}</div>
    );
};

exports.renderTime = renderTime;
exports.TimerRender = TimerRender;