import Menu from "../Menu.svelte";
import { render, fireEvent, act } from "@testing-library/svelte";

describe("Menu", () => {
  const dataTestid = "menu";
  let menuProps = {
    "data-testid": dataTestid
  };
  const menuRender = (props) => {
    return render(Menu, { ...menuProps, ...props });
  };
  it("render", async () => {
    const { getByTestId, container } = menuRender({
      popOverProps: {
        tippyjsProps: {
          showOnCreate: true,
          trigger: "click"
        }
      }
    });
    let el: undefined | HTMLElement;
    // expect(() => (el = getByTestId("list"))).not.toThrow();
    // expect(el).toBeInTheDocument();
    // expect(el).toBeVisible();
    // expect(el?.parentElement).toBe(document.body);
    // expect(container).toMatchSnapshot();
    await act(async () => {
      if (container.firstElementChild) {
        await fireEvent.click(container.firstElementChild);
      }
    });
    // expect(() => (el = getByTestId("list"))).not.toThrow();
    console.log(container?.outerHTML);
  });
});
