import { eventHelper } from "../utils/helper";

import menuCallback from "./menu";

const menuEvent = eventHelper("message", menuCallback);

export default [menuEvent];
