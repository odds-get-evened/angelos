import { createRoot } from 'react-dom/client';
// import { Block, Blockchain } from './lib/blockchain';
import { useEffect, useState, useRef } from 'react';
// import moment from 'moment/moment';
import 'bootstrap/dist/js/bootstrap.bundle';
import { TimerRender } from './comps/timeRender';
import { Messenger } from './comps/messenger';

const RootRender = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'><TimerRender /></div>
            </div>
            <div className='row'>
                <Messenger />
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById('main'));
root.render(<RootRender />);

// const els = require('./utils/elementals');
// const {Block, Blockchain} = require('./lib/blockchain');


// console.log('Initialization');

/* document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content has been fully loaded.');

    let chain = new Blockchain();
    let sampleData = [
        "this is fun times", "where's the beef?",
        "i live at 123 Main St.", "Curiousity killed the cat.",
        "A fool and his money are soon parted.",
        "Every cloud has a silver lining"
    ];

    sampleData.forEach((sd) => {
        let lastBlock = chain.getLastBlock();
        let sdBuff = new TextEncoder().encode(sd);
        chain.addBlock(new Block(sdBuff, lastBlock.hash));
    });
}); */
