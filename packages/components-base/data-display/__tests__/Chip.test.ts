import { BaseProps, itConformance } from "../../utils/test-utils";
import Chip from "../Chip.svelte";

type Props = BaseProps & {};

describe("Chip", () => {
  const props: Props = { "data-testid": "dbx-chip" };
  itConformance<Props>(Chip, { props });
});
