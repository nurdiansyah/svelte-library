import PopOver from "../Popover.svelte";
import h from "../../utils/hyperscript";
import { render } from "@testing-library/svelte";

describe("<PopOver />", () => {
  let popOverProps;
  const popOverRender = (props = popOverProps) => {
    props = Object.assign({ target: document.body }, props);
    return render(h(PopOver, props), { target: document.body });
  };
  it("render", () => {
    const { getByTestId } = popOverRender();
    let el: undefined | HTMLElement;
    expect(() => (el = getByTestId("pop-over"))).not.toThrow();
    expect(el).toBeInTheDocument();
    expect(el).toBeVisible();
    expect(el?.parentElement).toBe(document.body);
  });
});
