import { itConformance } from "../../utils/test-utils";
import Checkbox from "../Checkbox.svelte";

describe("Checkbox", () => {
  const testId = "checkbox";
  const props = { "data-testid": testId };

  itConformance(Checkbox, { props });
});
