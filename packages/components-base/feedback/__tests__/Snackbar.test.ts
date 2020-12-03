
import { itConformance } from "../../utils/test-utils";
import Snackbar from "../Snackbar.svelte";

describe("Snackbar", () => {
  const testId = "snackbar";
  const props = { "data-testid": testId };

  itConformance(Snackbar, { props });
});
