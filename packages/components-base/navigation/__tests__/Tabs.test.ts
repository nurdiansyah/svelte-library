
import { itConformance } from "../utils/test-utils";
import Tabs from "../Tabs.svelte";

describe("Tabs", () => {
  const testId = "tabs";
  const props = { "data-testid": testId };

  itConformance(Tabs, { props });
});
