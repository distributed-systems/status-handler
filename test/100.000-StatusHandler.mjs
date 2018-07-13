'use strict';

import StatusHandler from '../';
import section from 'section-tests';
import assert from 'assert';
import log from 'ee-log';



const host = 'http://l.dns.porn:8000';


 
section('Status Handler', (section) => {

    section.test('Create an instance', async() => {
       new StatusHandler();
    });


    section.test('Set up with status items', async() => {
        new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);
    });


    section.test('set initial status', async() => {
        const handler = new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);


        handler.setStatus('a');
    });


    section.test('correct directional status updates', async() => {
        const handler = new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);


        handler.setStatus('a');
        handler.setStatus('b');
    });


    section.test('invalid directional status updates', async() => {
        const handler = new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);


        handler.setStatus('b');

        let err;
        try {
            handler.setStatus('a');
        } catch (e) {
            err = e;
        }

        assert(err);
    });


    section.test('get status name', async() => {
        const handler = new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);


        handler.setStatus('b');

        assert.equal(handler.getStatusName(), 'b');
    });


    section.test('get status code', async() => {
        const handler = new StatusHandler([
            ['a', 100],
            ['b', 150],
            ['c', 200],
        ]);


        handler.setStatus('b');

        assert.equal(handler.getStatus(), 150);
    });
});