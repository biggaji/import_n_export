import { Transaction_status } from './types';
import { logUserIn } from './userControl.js';
import NotifyUser from "./notifyClass.js";

//log user in
logUserIn({username:"bigg_aji", password: "password"});

// notify users that bigg_aji had lentered room 1

let notifyRoom = new NotifyUser("bigg_aji",1);

console.log(notifyRoom.notifyOnEntry());