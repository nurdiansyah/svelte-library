
import { itConformance } from "../utils/test-utils";
import TableRow from "../TableRow.svelte";

describe("TableRow", () => {
  const testId = "table-row";
  const props = { "data-testid": testId };

  itConformance(TableRow, { props });
});
