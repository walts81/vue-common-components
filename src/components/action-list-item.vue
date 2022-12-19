<template>
  <button
    :key="item.name"
    type="button"
    class="list-group-item list-group-item-action action-item d-flex justify-content-between align-items-center"
    :class="{ spacer: item.isSpacer }"
    :disabled="item.isSpacer"
    @click="onSelect()"
  >
    <span v-html="item.name"></span>
    <div class="right-info">
      <i :class="icon" v-if="!item.isSpacer && !item.image"></i>
      <img class="icon-image" :src="item.image" v-if="!!item.image" />
      <span class="append-text" v-if="!!item.appendText">{{ item.appendText }}</span>
    </div>
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { ActionItem } from '../models/action-fab';

export default {
  emits: ['select'],
  props: {
    item: {
      type: Object as PropType<ActionItem>,
      required: true,
    },
    icon: {
      type: String,
      default: 'fas fa-chevron-right fa-lg',
    },
  },
  setup(props, { emit }) {
    const onSelect = () => {
      emit('select');
    };
    return { onSelect };
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.list-group-item.list-group-item-action.action-item {
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: left;
  .fa,
  .fab,
  .far,
  .fas {
    opacity: 0.7;
  }
  &.spacer {
    padding: 0;
    background: $gray-300;
  }
  .right-info {
    display: flex;
    align-items: center;
    .icon-image {
      max-height: 36px;
    }
    .append-text {
      margin-left: 0.5rem;
      min-width: 75px;
      text-align: right;
    }
  }
}
</style>
