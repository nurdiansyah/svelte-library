
import { itConformance } from "../utils/test-utils";
import Th from "../Th.svelte";

describe("Th", () => {
  const testId = "th";
  const props = { "data-testid": testId };

  itConformance(Th, { props });
});
