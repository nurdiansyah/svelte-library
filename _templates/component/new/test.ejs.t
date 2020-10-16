---
to: packages/<%= _project %>/<%= _category %>/__tests__/<%= h.changeCase.pascal(_name) %>.ts
---

<%
  prefix = "dbx"
  namePascal = h.changeCase.pascal(_name)
  nameCamel = h.changeCase.camel(_name)
  nameParam = h.changeCase.param(_name)

  nameComponent = namePascal
  nameProps = nameCamel + "Props"
  nameCss = prefix + "-" + nameParam
%>

import { render, act } from "@testing-library/svelte";
import h from "../../utils/hyperscript";
import <%= nameComponent %> from "../<%= nameComponent %>.svelte";

describe("<<%= nameComponent %> />", () => {
  let <%= nameProps %>;
  const renderList = (_props = <%= nameProps %>, ..._child) => {
    return render(h(<%= nameComponent %>, _props, ..._child), { target: document.body });
  };
  beforeEach(() => {
    listProps = {};
  });
  it("render", () => {
    const { getByTestId, container } = renderList();
    const el: undefined | HTMLElement = getByTestId("<%= nameParam %>");
    expect(() => el).not.toThrow();
    expect(el).toBeInTheDocument();
    expect(el).toBeVisible();
    expect(el).toHaveClass("<%= nameCss %>");
    expect(container).toMatchSnapshot();
  });
});
