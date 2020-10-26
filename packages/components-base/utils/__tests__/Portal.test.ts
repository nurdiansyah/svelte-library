import { render } from "@testing-library/svelte";
import PortalMock from "./features/PortalMock.svelte";
import { BaseProps, itConformance } from "../test-utils";

type Props = BaseProps & Record<string, any>;

describe("Portal", () => {
  const props: Props = { "data-testid": "portal" };

  itConformance(PortalMock, { props });
  const renderTest = (__props: Props = {}) => render(PortalMock, { props: { ...props, ...__props } });
  describe("props", () => {
    it("disable", () => {
      const { getByTestId, container } = renderTest({ disable: true });
      expect(() => getByTestId("container")).not.toThrow();
      expect(container).toMatchSnapshot();
    });
  });
});
