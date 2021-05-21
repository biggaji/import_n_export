import { Login } from './interface';

export function logUserIn(userInfo:Login): string {
	return `@ ${userInfo.username} has logged in successfully`; 
}