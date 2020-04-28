import axios from "axios";
import { ngrokIP } from "../env_keys";

export default axios.create({
  baseURL: ngrokIP, // closes in max 8 hours: FIXME: use env
});
