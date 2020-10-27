import { fireEvent, act } from "@testing-library/svelte";
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
    async function focusVisible(el: HTMLElement) {
      await act(async () => {
        el.focus();
        el.blur();
        await fireEvent.keyDown(document.activeElement || document.body, { key: "Tab" });
        el.focus();
      });
    }
    it("check: ", async () => {
      const { getByTestId } = render();
      const el = getByTestId(testId);
      await focusVisible(el);
      expect(() => getByTestId(testId)).not.toThrow();
      expect(el).toHaveClass("-focus-visible");
    });
  });
});
