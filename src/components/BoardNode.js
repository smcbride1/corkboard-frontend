import Node from './Node.js'

export default class BoardNode extends Node {
    constructor() {
        super();
        this.state = {
            boardId: 0,
            title: "Title",
            content: "Content"
        }
    }
    
    handleDoubleClick = (event) => {
        alert("test2")
    }
}