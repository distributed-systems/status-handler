# Status Handler

Keeps track of a status.

This library helps you to implement a status handler that can only be updated 
in one direction. If you have an item which can have the status 'initialized', 
'ready' and 'ended' which only can change from left to right this library is the 
tool you are looking for.


## Example

```javascript
    import StatusHandler from 'status-handler';


    // pass the possible status values with their sort order
    const handler = new StatusHandler([
        ['initialized', 100],
        ['ready', 200],
        ['ended', 300],
    ]);


    // set the initial status
    handler.setStatus('initialized');


    // correct update
    handler.setStatus('ready');


    // invalid update, trows an error
    handler.setStatus('initialized');


    // get the name of the current status
    const currentStatusName = handler.getStatusName();


    // get the order of the current status
    const currentStatusName = handler.getStatus();

```