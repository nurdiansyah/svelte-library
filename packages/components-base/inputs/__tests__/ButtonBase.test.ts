import { itConformance } from "../../utils/test-utils";
import ButtonBase from "../ButtonBase.svelte";

describe("ButtonBase", () => {
  const testId = "button-base";
  const props: any = { "data-testid": testId };

  const render = itConformance(ButtonBase, { props });

  it("check: href || link", () => {
    const { container } = render({ link: true });
    expect(container).toMatchSnapshot();
  });

  it("check: div", () => {
    const { getByTestId } = render({ tagDiv: true });
    expect(getByTestId(testId).tagName).toBe("DIV");
  });

  describe("directive focusVisible", () => {
    it("check: ", () => {});
  });
});
