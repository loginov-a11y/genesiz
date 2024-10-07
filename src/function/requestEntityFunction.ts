import axios from "axios";
import {useStore} from "@/stores/store";

export async function requestEntityFunction(api: string,entity:string) {
    const store = useStore();
    try {
        const response = await axios.post(
            `https://${store.baseDomain}/api/v4/${api}`,
            [{}],
            {headers: {Authorization: `Bearer ${store.token}`},}
        );
        store.entityArr.push(
            {
                id: response.data._embedded[api][0].id,
                item: entity
            }
        );
        return true;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}