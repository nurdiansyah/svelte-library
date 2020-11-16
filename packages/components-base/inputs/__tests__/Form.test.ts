
import { itConformance } from "../utils/test-utils";
import Form from "../Form.svelte";

describe("Form", () => {
  const testId = "form";
  const props = { "data-testid": testId };

  itConformance(Form, { props });
});
