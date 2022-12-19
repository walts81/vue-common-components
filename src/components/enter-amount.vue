<template>
  <div class="enter-amount">
    <text-input
      :flush="flush"
      type="number"
      :label="label"
      v-model="amount"
    ></text-input>
    <num-pad
      show-submit
      show-clear
      :submit-disabled="!Number(amount)"
      :clear-disabled="!Number(amount)"
      @number-selected="onEnterNumber($event)"
      @submit="onChanged()"
      @clear="amount = '0'"
    ></num-pad>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import TextInput from './inputs/text-input.vue';
import NumPad from './num-pad.vue';

export default {
  components: { TextInput, NumPad },
  emits: ['changed'],
  props: {
    enterText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Amount',
    },
    flush: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const amount = ref('0');
    const onEnterNumber = (num: string) => {
      let amt = amount.value.toString();
      amt += num.toString();
      const val = Number(amt);
      amount.value = val.toString();
    };
    const onChanged = () => {
      const val = Number(amount.value);
      if (!val) return;
      emit('changed', val);
      amount.value = '0';
    };
    return { amount, onEnterNumber, onChanged };
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.enter-amount {
  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
    border-bottom-left-radius: 0;
    font-size: 1.25rem;
    flex-basis: 33.5%;
    @media (max-width: 800px) {
      border-top-left-radius: 0;
    }
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    border-bottom-right-radius: 0;
    text-align: right;
    font-weight: bold;
    font-size: 2rem;
    @media (max-width: 800px) {
      border-top-right-radius: 0;
    }
  }
}
</style>
