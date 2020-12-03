import { itConformance } from "../../utils/test-utils";
import TableCell from "../TableCell.svelte";

describe("TableCell", () => {
  const testId = "table-cell";
  const props = { "data-testid": testId };

  itConformance(TableCell, { props });
});
