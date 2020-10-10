<script lang="ts">
  export let type: "left" | "right" | "default" = "default";
  export let active: boolean = false;
</script>

<div class="burger-icon {type !== 'default' && `-${type}`}" class:-active="{active}"><span></span></div>

<style lang="scss" global>
  @use "../scss/mixins/burger-icon" as *;
  :local(.burger-icon) {
    @include create-burger-icon();
  }
</style>
