import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { useOutletContext } from 'react-router-dom';

function Chats() {
  const { user } = useOutletContext()
  const chatProps = useMultiChatLogic(
    '71891da7-bda2-464d-8dc8-781a78afe744',
    user.username,
    user.secret
  )

  const userOffset = -4;
    return (
      <div className="bg-neutral-50" style={{ height: '90vh' }}>
        <MultiChatSocket {...chatProps} timezoneOffset={userOffset}/>
        <MultiChatWindow {...chatProps} timezoneOffset={userOffset} style={{ height: '100%' }} />
      </div>
    )
}
  
export default Chats;