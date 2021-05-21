 class NotifyUser() {
 	public username: string;
 	public roomId: number;

 	constructor(username:string,roomId:number) {
 		this.username = username;
 		this.roomId = roomId;
 	}

 	protected notifyOnEntry(): string {
 		return  `${this.username} has entered  room ${this.room}!`;
 	}
 }

 export default NotifyUser;