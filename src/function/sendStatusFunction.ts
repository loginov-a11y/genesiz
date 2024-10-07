import {BUTTON_TEXT} from "@/constant";

export function sendStatus (item: string) {
    let buttonText:string;
    switch (item) {
        case 'default':
            buttonText = BUTTON_TEXT.create;
            break;
        case 'load' :
            buttonText = '';
            break;
        case 'save' :
            buttonText = BUTTON_TEXT.safe;
            break;
        default: buttonText = BUTTON_TEXT.create
    }
    return buttonText
}