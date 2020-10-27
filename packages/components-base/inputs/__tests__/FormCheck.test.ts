import { itConformance } from "../../utils/test-utils";
import FormCheck from "./features/MockFormCheck.svelte";

describe("FormCheck", () => {
  const testId = "form-check";
  const props = { "data-testid": testId };

  itConformance(FormCheck, { props });
});
