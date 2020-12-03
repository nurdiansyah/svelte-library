
import { itConformance } from "../utils/test-utils";
import TableHeader from "../TableHeader.svelte";

describe("TableHeader", () => {
  const testId = "table-header";
  const props = { "data-testid": testId };

  itConformance(TableHeader, { props });
});
