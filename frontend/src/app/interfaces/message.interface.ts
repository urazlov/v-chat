export class Message {
  id?: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;

  constructor(
    senderId: number,
    receiverId: number,
    content: string,
    timestamp: Date,
    id?: number
  ) {
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
    this.timestamp = timestamp;
    this.id = id;
  }
}
