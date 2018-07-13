'use strict';


import logd from 'logd';
const log = logd.module('status-handler');



export default class StatusHandler {


    constructor(statusArray) {
        this.statusMap = new Map(statusArray);
        this.currentStatus = 0;
    }




    /**
    * set a new status for this dataset. Only a status with
    * a higher value can be set
    */
    setStatus(status) {
        if (!this.statusMap.has(status)) throw new Error(`Cannot set invalid status ${status}. Valid status are ${[...this.statusMap.keys()].join(', ')}.`);
        
        const newStatus = this.statusMap.get(status);

        if (newStatus > this.currentStatus) {
            this.currentStatus = newStatus;
            log.info(`[${this.setName}] Status changed to ${status}`);
        }
        else throw new Error(`Cannopt set status '${status}', it has a lower value (${newStatus}) than the currentStatus '${this.getCurrentStatusName()}' (${this.currentStatus})!`);
    }




    /**
    * return the name for the current status
    */
    getStatusName() {
        return [...this.statusMap.entries()].find(item => item[1] === this.currentStatus)[0];
    }




    /**
    * return the name for the current status
    */
    getStatus() {
        return this.currentStatus;
    }
}