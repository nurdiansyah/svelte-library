---
to: packages/<%= _project %>/<%= _category %>/__tests__/<%= h.changeCase.pascal(_name) %>.test.ts
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
import { itConformance } from "<%= _testUtils %>";
import <%= nameComponent %> from "../<%= nameComponent %>.svelte";

describe("<%= nameComponent %>", () => {
  const testId = "<%= nameParam %>";
  const props = { "data-testid": testId };

  itConformance(<%= nameComponent %>, { props });
});
