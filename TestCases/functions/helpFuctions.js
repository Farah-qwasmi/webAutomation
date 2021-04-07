import { page } from "../main"




export const awaitFor = async seconds => await (new Promise(r => setTimeout(r, seconds * 1000)));



export const getDOMByText = (elemName, counter = 0) => async text => {
    const elems = await page.$$(`//${elemName}[contains(text(), '${text}')]`);
    if (elems.length > 0)
     return elems[0];
    if (++counter < 5) {
        await awaitFor(.6);
    } else {
        console.log(elemName, text, 'NOT FOUND');
        return null;
    }
    return getDOMByText(elemName, counter)(text);
};



export const clickDOMBySelector = async selector => {
    await page.waitForSelector(selector);
    await page.click(selector);
};

export const elemIsExists = async selector => {
    await page.waitForSelector(selector);
};

export const scroll = async selector => {
    await page.hover(selector);
};



export const clickDOMByText = elemName => async text => {
    const dom = await getDOMByText(elemName)(text);
    await awaitFor(.1);
    await dom.click();
};

export const DOMElemByTextExists = elemName => async text => {
    const dom = await getDOMByText(elemName)(text);
   expect(!!dom).toBeTruthy();
    
};


export const writeIntoFieldByName = elemName => async text => _writeIntoFieldBySelector(`*[name="${elemName}"]`, text)

export const _writeIntoFieldBySelector = async (selector, text, counter = 0) => {
    const field = await page.$(selector);

    if (!field) {
        if (++counter < 5) {
            await awaitFor(.6);
            return _writeIntoFieldBySelector(selector, text, counter + 1);
        } else {
            console.log(selector, 'Field NOT FOUND');
            return null;
        }
    }

    await field.click();
    await field.type(text);
};




export const clickDOMByName = eleName => clickByName(`*[name="${eleName}"]`)
export const clickDOMByID = id => clickByName(`*[id="${id}"]`)
const clickByName = async selector => {
    await page.waitForSelector(selector);
    await page.click(selector);
};
