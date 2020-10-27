
import { itConformance } from "../../utils/test-utils";
import Radio from "../Radio.svelte";

describe("Radio", () => {
  const testId = "radio";
  const props = { "data-testid": testId };

  itConformance(Radio, { props });
});
