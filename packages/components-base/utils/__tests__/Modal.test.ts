import Modal from "./mocks/ModalMock.svelte";
import { render } from "@testing-library/svelte";
// import { logDOM } from "@testing-library/dom";
import { BaseProps, itConformance } from "../test-utils";

describe("Modal", () => {
  type Props = BaseProps & { open?: true };
  const testId = "modal";

  itConformance<Props>(Modal, {
    props: {
      "data-testid": testId
    }
  });
  it("check: props => open", () => {
    const _render = (props: Props) => render(Modal, { props });
    const { getByTestId } = _render({ open: true });
    expect(() => getByTestId(testId)).not.toThrow();
    // logDOM(container);
  });
});
