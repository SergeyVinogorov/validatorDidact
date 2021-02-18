import { ListItem } from "../../components/ListItem/index";
import { ListItemProps } from "../../types/listChatTypes";

type ListChatProps = {
  arrayChats: Array<ListItemProps>
}

export const ListChatContainer = (props: ListChatProps) => {
  const {
    arrayChats
  } = props
  const chats: Array<Function> = arrayChats.map((chat: ListItemProps)=>{
    return ListItem(chat)
  })
  return chats
}
