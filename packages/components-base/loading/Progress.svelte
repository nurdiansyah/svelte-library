<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let bar: boolean = false;
  export let multi: boolean = false;
  export let value: number = 0;
  export let max: number = 100;
  export let animated: boolean = false;
  export let striped: boolean = false;
  export let color: string | null = null;
  export let barClassName: string | null = null;
  let progressBarClasses: string;
  let percent: number;

  $: classes = clsx(className, "progress");

  $: progressBarClasses = clsx(
    "progress-bar",
    bar ? className || barClassName : barClassName,
    animated ? "progress-bar-animated" : null,
    color ? `bg-${color}` : null,
    striped || animated ? "progress-bar-striped" : null
  );

  $: percent = (Number.parseInt(value) / Number.parseInt(max)) * 100;
</script>

{#if bar}
  {#if multi}
    <slot />
  {:else}
    <div
      {...$$restProps}
      class="{progressBarClasses}"
      style="width: {percent}%"
      role="progressbar"
      aria-valuenow="{value}"
      aria-valuemin="0"
      aria-valuemax="{max}">
      <slot />
    </div>
  {/if}
{:else}
  <div {...$$restProps} class="{classes}">
    {#if multi}
      <slot />
    {:else}
      <div
        class="{progressBarClasses}"
        style="width: {percent}%"
        role="progressbar"
        aria-valuenow="{value}"
        aria-valuemin="0"
        aria-valuemax="{max}">
        <slot />
      </div>
    {/if}
  </div>
{/if}

<style lang="scss" global>
  @use "./progress.scss";
</style>
