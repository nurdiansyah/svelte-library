import { render as renderSvelte, act, fireEvent, cleanup } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { ownerDocument } from "../dom";
import TrapFocus from "../modal/TrapFocus.svelte";

describe("<TrapFocus />", () => {
  const testId = "trap-focus";
  let props = {
    "data-testid": testId
  };
  const render = (_props = {}) => {
    _props = Object.assign(props, _props);
    return renderSvelte(TrapFocus, props, { container: document.body });
  };

  describe("props", () => {
    afterEach(() => {
      cleanup();
    });
    it("check: open", () => {
      const { getByTestId, container } = render({ open: true });
      let el: undefined | HTMLElement;
      expect(() => (el = getByTestId(testId))).not.toThrow();
      expect(el).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
    it("check: enable", async () => {
      const { getByTestId, component } = render({ open: true });
      let el = getByTestId(testId);
      expect(el).toBeInTheDocument();
      await act(() => {
        component.$set({ enable: false });
      });
      cleanup();
    });

    describe("event", () => {
      const onTabChange = (e: KeyboardEvent) => {
        if (e.code === "9") {
        }
      };
      it("check: keydown", async () => {
        const { getByTestId } = render({ open: true, onTabChange });
        let el = getByTestId(testId);
        let sentinelStart = getByTestId("sentinel-start");
        let sentinelEnd = getByTestId("sentinel-end");
        const doc = ownerDocument(el);
        expect(doc.activeElement).not.toEqual(el);
        userEvent.tab();
        await fireEvent.keyDown(el, { code: 9 });
        expect(doc.activeElement).toEqual(sentinelStart);
        userEvent.tab();
        await fireEvent.keyDown(el, { code: 9 });
        expect(doc.activeElement).toEqual(sentinelEnd);
        // let isFocus = false;
        // el.addEventListener("focusin", () => {
        //   isFocus = true;
        // });
        // await fireEvent.focusOut(el);
      });
      it("check: focus child active when autofocus", async () => {
        const { getByTestId, component } = renderSvelte(TrapFocus, {
          props: {
            ...props,
            open: true,
            onTabChange,
            disableAutoFocus: true
          }
        });
        let el = getByTestId(testId);
        let sentinelStart = getByTestId("sentinel-start");
        expect(el.hasAttribute("tabIndex")).toBeFalsy();
        sentinelStart.focus();
        expect(el.tabIndex).toBe(-1);
        await act(() => {
          component.$set({ disableAutoFocus: false });
        });
        expect(el.hasAttribute("tabIndex")).toBeTruthy();
        expect(el.tabIndex).toBe(-1);

        el = getByTestId(testId);
        expect(el.tabIndex).toBe(-1);
      });
    });
  });
});
