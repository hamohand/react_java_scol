import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { fa0, faCheck } from "@fortawesome/free-solid-svg-icons";

//booléen
export const iconeBooleen = (bool) => {
    return (bool ? faCheck : fa0);
}

//date ?
/* export const FormatDate = (date) => { // les dates à revoir
    let x = date;
    return x;
    //`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
} */


