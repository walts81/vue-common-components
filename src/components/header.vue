<template>
  <div class="app-header">
    <back-button
      :pad-top="padTopBack"
      v-show="!hideBack"
      @back="onBack($event)"
    ></back-button>
    <div v-if="hideBack" style="width: 86.328px">&nbsp;</div>
    <h1 class="title" @click="onTitleClick()">{{ title }}</h1>
    <img v-if="!!logo" class="logo" :src="logo" @click="onLogoClick()" />
  </div>
</template>

<script lang="ts">
import BackButton from './back-button.vue';

export default {
  components: { BackButton },
  emits: ['back', 'title-click', 'logo-click'],
  props: {
    title: String,
    logo: String,
    padTopBack: Boolean,
    hideBack: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const onBack = (e: any) => {
      emit('back', e);
    };
    const onTitleClick = () => {
      emit('title-click');
    };
    const onLogoClick = () => {
      emit('logo-click');
    };
    return { onBack, onTitleClick, onLogoClick };
  },
};
</script>
