const MessageStatus = ({statusMessage}) => {


    switch (statusMessage) {
        case 'sent': return (<span className="text-gray-800 text-xs ml-2 self-end font-light justify-end" >✓</span>)
        case 'read': return (<span className="text-blue-600 text-xs ml-2 self-end font-light justify-end" >✓✓</span>)
        case 'delivered': return(<span className="text-gray-950 text-xs ml-2 self-end font-light justify-end" >✓✓</span>)
        default: return null;
    }
}
export default MessageStatus