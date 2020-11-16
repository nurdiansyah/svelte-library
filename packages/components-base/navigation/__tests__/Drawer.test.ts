
import { itConformance } from "../../utils/test-utils";
import Drawer from "../Drawer.svelte";

describe("Drawer", () => {
  const testId = "drawer";
  const props = { "data-testid": testId };

  itConformance(Drawer, { props });
});
