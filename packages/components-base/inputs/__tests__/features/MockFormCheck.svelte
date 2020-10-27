<script lang="ts">
  import type { ValueCheck } from "../../../types/input";

  import FormCheck from "../../FormCheck.svelte";
  import { setContext } from "../../form/form-context";

  const context = setContext({});

  const values: ValueCheck[] = [
    { label: "foo", value: "value foo" },
    { label: "foo2", value: "value foo2" },
    { label: "foo3", value: "value foo3" },
    { label: "foo4", value: "value foo4" }
  ];
</script>

<FormCheck type="checkbox" {...$$props} name="foo" {values} />
