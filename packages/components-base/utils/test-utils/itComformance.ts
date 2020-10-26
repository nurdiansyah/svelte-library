import type { RenderResult } from "@testing-library/svelte";
import type { SvelteComponentDev } from "svelte/internal";
import { cleanup, render } from "@testing-library/svelte";

export type BaseProps = {
  "data-testid"?: string;
};

export type Options<P = Record<string, any>> = {
  props: P;
  container?: HTMLElement;
  parentProps?: Record<string, any>;
  after?: () => void;
  only?: string[];
  skip?: string[];
  target?: HTMLElement;
  className?: string;
};

function testMergeClassName(_render: () => RenderResult, { props, className }: Options) {
  it("cek merge class", () => {
    let el: undefined | Element;
    const { getByTestId, container } = _render();
    if (props["data-testid"]) {
      el = getByTestId(props["data-testid"]);
    } else {
      el = container?.firstElementChild || undefined;
    }
    className && expect(el).toHaveClass(className);
    props["class"] && expect(el).toHaveClass(props["class"]);
  });
}

function testRendererComponent(_render: () => RenderResult, { props }: Options) {
  it("cek render komponen tanpa error dan snapshot", () => {
    let el: undefined | HTMLElement;
    const { getByTestId, container } = _render();
    if (props["data-testid"]) {
      expect(() => (el = getByTestId(props["data-testid"]))).not.toThrow();
      expect(el).toBeInTheDocument();
    }
    expect(container).toMatchSnapshot();
  });
}

const fullSuite: Record<string, (_render: () => RenderResult, options: Options) => void> = {
  renderComponent: testRendererComponent,
  mergeClassName: testMergeClassName
};

export function itConformance<P = Record<string, any>>(component: typeof SvelteComponentDev, options: Options<P>) {
  const { after: runAfterHook = () => {}, only = Object.keys(fullSuite), skip = [], props = {}, container } = options;
  const renderComponent = (_props?: P): RenderResult => {
    const __props = { ...props, ..._props };

    return render(component, __props, { container });
  };
  afterEach(() => {
    cleanup();
    runAfterHook && runAfterHook();
  });

  Object.keys(fullSuite)
    .filter((testKey) => only.indexOf(testKey) !== -1 && skip.indexOf(testKey) === -1)
    .forEach((testKey) => {
      const test = fullSuite[testKey];
      test(renderComponent, options);
    });
  return renderComponent;
}
