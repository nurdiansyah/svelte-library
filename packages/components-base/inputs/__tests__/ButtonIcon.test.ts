import { fireEvent } from "@testing-library/svelte";
import { itConformance } from "../../utils/test-utils";
import ButtonIcon from "../ButtonIcon.svelte";

describe("ButtonIcon", () => {
  const testId = "button-icon";
  const props: any = { "data-testid": testId };

  const render = itConformance(ButtonIcon, { props });

  it("check: onClick", async () => {
    const handleClick = jest.fn();
    const { getByTestId, component } = render();
    component.$on("click", handleClick);
    const testIdNode = getByTestId(testId);
    await fireEvent.click(testIdNode);
    expect(handleClick).toHaveBeenCalled();
  });
});
