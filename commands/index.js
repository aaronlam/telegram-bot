import { commandHelper } from "../utils/helper";

import startCallback from "./start";
import aboutCallback from "./about";
import menuCallback from "./menu";

const startCommand = commandHelper(/\/start/, startCallback);
const aboutCommand = commandHelper(/\/about/, aboutCallback);
const menuCommand = commandHelper(/\/menu/, menuCallback);

export default [startCommand, aboutCommand, menuCommand];
