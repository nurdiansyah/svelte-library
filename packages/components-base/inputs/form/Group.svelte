<script lang="ts">
  let { class: className } = $$props;
  let classes: string | undefined;
  let row: boolean = false;

  export let label: string | undefined = undefined;
</script>

<div class="form-group" class:-row={row} {...$$restProps} />
