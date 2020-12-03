import { utils } from "@deboxsoft/module-core";

interface Options {
  size?: number;
  prefix?: string | false;
}

export const getId = ({ prefix = "dbx", size = 5 }: Options = {}) => {
  prefix = prefix ? `${prefix}-` : "";
  return `${prefix}${utils.generateId(size)}`;
};
