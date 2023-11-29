import { useState, useRef, useEffect } from 'react';
import { renderTime } from '../comps/timeRender';
import { KeyManager } from '../comps/keyManager';

const Messenger = () => {
    const msgTextarea = useRef();

    const [msg, setMsg] = useState({});
    const [msgHistory, setMsgHistory] = useState([]);
    const [msgTasks, setMsgTasks] = useState([]);

    const handleMsg = (m) => {
        let mo = {
            'timestamp': Date.now(),
            'message': m
        };

        console.log(msgTasks.find((item) => item === 'sign'));
        if(msgTasks.find((item) => item === 'sign')) {
            mo = {...mo, 'signature': '<add sig. here>'}
        }

        setMsg(mo);
        setMsgHistory([...msgHistory, mo]);
        setMsg({});
    };

    const handleSubmitMsg = (e) => {
        if(e.key === 'Enter' && e.shiftKey === false) {
            const m = e.target.value.trim();

            e.target.value = '';

            return handleMsg(m);
        }
    };

    const handleMsgTasks = (e) => {
        const t = e.target.value;

        if(e.target.checked === true) {
            setMsgTasks([...msgTasks, t]);
        } else {
            setMsgTasks([...msgTasks.filter((i) => i !== t)]);
        }
    };

    useEffect(() => {
        msgHistory.forEach((m) => console.log(m));
    }, [msgHistory]);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row overflow-auto' style={{maxHeight: '100px', minHeight: '100px', flexDirection: 'column-reverse'}}>
                    <div className='col-md'>
                        {msgHistory.map((hm, i) => <div key={i}><span className='fw-bold'>{renderTime(hm.timestamp)}</span> {hm.message}</div>)}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='msgInput' className='form-label'>message</label>
                                <textarea ref={msgTextarea} rows='1' name='msgInput' id='msgInput' className='form-control' onKeyUp={handleSubmitMsg}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <div className='form-check form-check-inline'>
                            <input type='checkbox' className='form-check-input' onChange={handleMsgTasks} name='msgTask' id='msgSign' value='sign' />
                            <label className='form-check-label' htmlFor='msgSign'>sign</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input type='checkbox' className='form-check-input' onChange={handleMsgTasks} name='msgTask' id='msgEncrypt' value='encrypt' />
                            <label className='form-check-label' htmlFor='msgEncrypt'>encrypt</label>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md'><KeyManager /></div>
                </div>
            </div>
        </div>
    );
};

exports.Messenger = Messenger;