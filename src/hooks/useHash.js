import md5 from "js-md5";

import { config } from "../config";

export const useHash = () => {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + config.marvel.privateKey + config.marvel.publicKey);

  return [hash.hex(), timestamp];
};
