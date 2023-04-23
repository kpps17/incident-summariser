import axios from 'axios';
import chatBot from "../../Assets/amazonChatBot.jpg";
import DateTime from "../UserChatComponent/datetime";

export default function (endpoint, payload) {
    let url = endpoint;

    const options = {
        method: 'POST',
        url: url,
        data: payload,
        responseType: 'json',
    };
    return axios(options);
}


export const initialChatMessage = {
    label: "This message isn't...",
    name: "Lumia Noella",
    date: "9/3/2022",
    profil: chatBot,
    data: [
        {
            datetime: DateTime.get_datetime(),
            messages: [
                {is_contact: true, text: "Hi, how can I help you today?"},
            ]
        }
    ]
}