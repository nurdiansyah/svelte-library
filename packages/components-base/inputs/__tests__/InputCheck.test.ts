import { render as svelteRender } from "@testing-library/svelte";
import InputCheck from "../InputCheck.svelte";

describe("InputCheck", () => {
  const testId = "input-check";
  const props = { "data-testid": testId };
  const render = (_props = {}) => svelteRender(InputCheck, { ...props, ..._props });
  it("check: type checkbox", () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });

  it("check: type radio", () => {
    const { container } = render({ type: "radio" });
    expect(container).toMatchSnapshot();
  });

  it("check: type switch", () => {
    const { container } = render({ type: "switch" });
    expect(container).toMatchSnapshot();
  });
});
