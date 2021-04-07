import { clickDOMByID, writeIntoFieldByName,awaitFor, clickDOMBySelector } from "../functions/helpFuctions";
import { openFetchrMainPage } from "../functions/navigateFunctions";

describe('suite', () => {
    test('test 1', async () => {
        await openFetchrMainPage();
        await clickDOMBySelector('#corona > a');
       await writeIntoFieldByName('tracking_id')('34134180154194');
       await clickDOMByID('search_submit');
       await awaitFor(10);
    }, process.env.TEST_TIMEOUT);

});

