import {
    clickDOMBySelector,
    clickDOMByText,
    DOMElemByTextExists,
    writeIntoFieldByName,
    awaitFor,
      scroll
} from "./helpFuctions";
import { page } from "../main";


export const openPage = async url => {

    await page.goto(`${process.env.TEST_BASE_URL}${url}`);
   
};
export const openFetchrMainPage= async () => {

    await openPage(`/`);

    await page.evaluate(async () => {
        window.forceLoadAssets = true;
    });
   
};


export const hi = async () => {

}
