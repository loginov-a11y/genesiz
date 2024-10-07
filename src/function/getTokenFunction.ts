import axios from "axios";
import { useStore } from "@/stores/store";

const tokenDomain = 'https://app2.gnzs.ru/amocrm/test/oauth/get-token.php'
export interface ResponseDataToken {
    access_token: string;
    base_domain: string;
}

export async function getToken() {
    const store = useStore();
    try {
        const response = await axios.get<ResponseDataToken>(
            tokenDomain,
            {
                headers: {
                    "X-Client-Id": 31992158,
                    "Content-Type": "application/json"
                },
            }
        );
        store.token = response.data.access_token;
        store.baseDomain = response.data.base_domain;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

