import { itConformance } from "../../utils/test-utils";
import Switch from "../Switch.svelte";

describe("Switch", () => {
  const testId = "switch";
  const props = { "data-testid": testId };

  itConformance(Switch, { props });
});
