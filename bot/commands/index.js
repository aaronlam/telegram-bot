import { commandHelper } from "../../utils/helper";

import startCallback from "./start";
import aboutCallback from "./about";
import menuCallback from "./menu";
import chatidCallback from "./chatid";

const startCommand = commandHelper(/\/start/, startCallback);
const aboutCommand = commandHelper(/\/about/, aboutCallback);
const menuCommand = commandHelper(/\/menu/, menuCallback);
const chatidCommand = commandHelper(/\/chatid/, chatidCallback);

export default [startCommand, aboutCommand, menuCommand, chatidCommand];
