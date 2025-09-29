import {test as basetest} from "./pom-fixture";
import CommonUtils from "../utils/CommonUtils";

type CommonFixturesType = {
    commonUtils : CommonUtils;
}

export const test = basetest.extend<CommonFixturesType>({
    commonUtils: async({}, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    } 
})
