import { Login } from './interfaces.js';

export function logUserIn(userInfo:Login): string {
	return `@ ${userInfo.username} has logged in successfully`; 
}