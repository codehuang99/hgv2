<template>
  <div class="hg-reSubMenu">
    <SubMenuItem>
      <template #title>{{ data.title }}</template>
      <template v-for="item2 in data.children">
        <template v-if="!item2.children">
          <MenuItem :key="item2.id">
            {{ item2.title }}
          </MenuItem>
        </template>
        <hg-reSubMenu v-else :data="item2" :key="item2.id"> </hg-reSubMenu>
      </template>
    </SubMenuItem>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import SubMenuItem from "./SubMenuItem.vue";
export default {
  name: "hg-reSubMenu",
  components: {
    MenuItem,
    SubMenuItem,
  },
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
