<template>
  <div>
    <h1>TeleportComponent in vue</h1>
    <teleport to="#footer">
      <User />
    </teleport>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "TeleportComponent",
  components: {
    User,
  },
};
</script>
