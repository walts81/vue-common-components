<template>
  <div class="back-button-container" :class="{ 'pad-top': padTop }">
    <button class="btn btn-link" @click="goBack()">
      <i class="fas fa-chevron-left"></i> Back
    </button>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['back'],
  props: {
    padTop: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const goBack = () => {
      emit('back');
    };
    return { goBack };
  },
};
</script>
