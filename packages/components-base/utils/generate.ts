import { utils } from "@deboxsoft/core-web";

interface Options {
  size?: number;
  prefix?: string;
}

export const getId = ({ prefix = "dbx", size = 5 }: Options = {}) => {
  return `${prefix}-${utils.generateId(size)}`;
};
