import { render, act } from "@testing-library/svelte";
import List from "../List.svelte";
import ListItem from "../list/Item.svelte";
import { writable } from "svelte/store";

describe("List", () => {
  const dataTestId = "list";
  let listProps = {
    "data-testid": dataTestId
  };
  const renderList = (_props = {}) => {
    return render(List, { ...listProps, ..._props }, { container: document.body });
  };
  it("render", () => {
    const { getByTestId, container } = renderList();
    const el = getByTestId(dataTestId);
    expect(el).toBeInTheDocument();
    expect(el).toBeVisible();
    expect(() => el).not.toThrow();
    expect(el).toHaveClass("dbx-list");
    expect(container).toMatchSnapshot();
  });

  it("props: disablePadding = true", async () => {
    let { getByTestId, container, component } = renderList();
    let el = getByTestId(dataTestId);
    expect(el).toHaveClass("dbx-list", "-padding");
    await act(() => {
      component.$set({ disablePadding: true });
    });
    el = getByTestId("list");
    expect(el).not.toHaveClass("-padding");
    expect(container.firstChild).not.toHaveClass("-padding");
  });

  // it("slot: subheader", async () => {
  //   const { getByTestId, container } = render(
  //     h(List, {}, h("header", { slot: "subheader", "data-testid": "slot-list-subheader" }))
  //   );
  //   const el = getByTestId("slot-list-subheader");
  //   expect(el).toBeInTheDocument();
  //   expect(el).toBeVisible();
  //   expect(container).toMatchSnapshot();
  // });
  //
  // it("props: subheader", async () => {
  //   const subheaderProps = h("header", { "data-testid": "props-list-subheader" }, "props-subheader");
  //   const subheader = writable<any>(subheaderProps);
  //   const { getByTestId, container } = renderList({ "bind:subheader": subheader });
  //   let listEl = getByTestId("list");
  //   expect(listEl).toHaveClass("-subheader");
  //   let el = getByTestId("props-list-subheader");
  //   expect(el).toBeInTheDocument();
  //   expect(el).toBeVisible();
  //   expect(container).toMatchSnapshot();
  //   await act(() => {
  //     subheader.set(null);
  //   });
  //   expect(() => getByTestId("props-list-subheader")).toThrow();
  // });
  //
  // it("props: subheader dan slot: subheader, hanya slot subheader yg dipakai", async () => {
  //   const subheaderProps = h("header", { "data-testid": "props-list-subheader" }, "props-subheader");
  //   const subheaderSlot = h("header", { "data-testid": "slot-list-subheader", slot: "subheader" }, "slot-subheader");
  //   const { getByTestId, container } = renderList({ subheader: subheaderProps }, subheaderSlot);
  //   let listEl = getByTestId("list");
  //   expect(listEl).toHaveClass("-subheader");
  //   let el = getByTestId("slot-list-subheader");
  //   expect(el).toBeInTheDocument();
  //   expect(el).toBeVisible();
  //   expect(() => getByTestId("props-list-subheader")).toThrow();
  //   expect(container).toMatchSnapshot();
  // });
  //
  // describe("ListItem", () => {
  //   let listItemProps;
  //   const renderListItem = (_props = listItemProps, context = {}) => {
  //     const fragmentProps = { context: { [KEY_LIST_CONTEXT]: context } };
  //     return render(h(Fragment, fragmentProps, h(ListItem, _props)), {
  //       target: document.body
  //     });
  //   };
  //
  //   beforeEach(() => {
  //     listItemProps = {};
  //   });
  //
  //   it("render", () => {
  //     const { getByTestId, container } = renderListItem();
  //     const el = getByTestId("list-item");
  //     expect(el).toBeInTheDocument();
  //     expect(el).toBeVisible();
  //     expect(() => el).not.toThrow();
  //     expect(el).toHaveClass("list-item");
  //     expect(container).toMatchSnapshot();
  //   });
  //
  //   it("context: { dense: false }, props: { dense: true }", () => {
  //     const { getByTestId } = renderListItem({ dense: true }, { dense: false });
  //     const el = getByTestId("list-item");
  //     expect(el).toHaveClass("-dense");
  //   });
  //
  //   it("context: { dense: false }, props: { dense: false }", () => {
  //     const { getByTestId } = renderListItem({ dense: false }, { dense: false });
  //     const el = getByTestId("list-item");
  //     expect(el).not.toHaveClass("-dense");
  //   });
  // });
});
