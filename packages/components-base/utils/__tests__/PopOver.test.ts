import { render } from "@testing-library/svelte";
// import { logDOM } from "@testing-library/dom";
import PopOverMock from "./features/PopOverMock.svelte";
import PopOver from "../PopOver.svelte";
import { BaseProps, itConformance } from "../test-utils";

type Props = BaseProps & Record<string, any>;

describe("PopOver", () => {
  const props: Props = { open: true };

  itConformance<Props>(PopOver, {
    props
  });

  const renderTest = (__props: Props = {}) => render(PopOverMock, { props: { ...props, ...__props } });
  describe("props", () => {
    it("container", () => {
      const { getByTestId } = renderTest({ open: false });
      expect(() => getByTestId("container")).not.toThrow();

      // logDOM(containerNode);
      // let modalNode = getByRole("presentation");
    });
  });
});
