
import { itConformance } from "../../utils/test-utils";
import SwipeableDrawer from "../SwipeableDrawer.svelte";

describe("SwipeableDrawer", () => {
  const testId = "swipeable-drawer";
  const props = { "data-testid": testId };

  itConformance(SwipeableDrawer, { props });
});
