
import { itConformance } from "../../utils/test-utils";
import Stepper from "../Stepper.svelte";

describe("Stepper", () => {
  const testId = "stepper";
  const props = { "data-testid": testId };

  itConformance(Stepper, { props });
});
