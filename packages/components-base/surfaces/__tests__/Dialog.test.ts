
import { itConformance } from "../../utils/test-utils";
import Dialog from "../Dialog.svelte";

describe("Dialog", () => {
  const testId = "dialog";
  const props = { "data-testid": testId };

  itConformance(Dialog, { props });
});
