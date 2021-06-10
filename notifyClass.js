class NotifyUser {
    constructor(username, roomId) {
        this.username = username;
        this.roomId = roomId;
    }
    notifyOnEntry() {
        return `${this.username} has entered  room ${this.roomId}!`;
    }
}
export default NotifyUser;
