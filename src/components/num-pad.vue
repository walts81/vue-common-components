<template>
  <div class="num-pad">
    <div class="number number-7" @click="onSelectNumber('7')">7</div>
    <div class="number number-8" @click="onSelectNumber('8')">8</div>
    <div class="number number-9" @click="onSelectNumber('9')">9</div>
    <div class="number number-4" @click="onSelectNumber('4')">4</div>
    <div class="number number-5" @click="onSelectNumber('5')">5</div>
    <div class="number number-6" @click="onSelectNumber('6')">6</div>
    <div class="number number-3" @click="onSelectNumber('3')">3</div>
    <div class="number number-2" @click="onSelectNumber('2')">2</div>
    <div class="number number-1" @click="onSelectNumber('1')">1</div>
    <div
      class="number spacer"
      :class="{ disabled: clearDisabled || !showClear }"
    >
      <div v-if="showClear" @click="onClear()">
        <i class="fas fa-trash-alt fa-lg"></i>
      </div>
    </div>
    <div class="number number-0" @click="onSelectNumber('0')">0</div>
    <div
      class="number spacer"
      :class="{ disabled: submitDisabled || !showSubmit }"
    >
      <div v-if="showSubmit" @click="onSubmit()">
        {{ enterText }}<i :class="submitIcon" v-if="!enterText"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['number-selected', 'submit', 'clear'],
  props: {
    enterText: {
      type: String,
      default: '',
    },
    showSubmit: {
      type: Boolean,
      default: false,
    },
    submitDisabled: {
      type: Boolean,
      default: false,
    },
    submitIcon: {
      type: String,
      default: 'fas fa-check fa-lg',
    },
    showClear: {
      type: Boolean,
      default: false,
    },
    clearDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const onSelectNumber = (num: any) => {
      emit('number-selected', num.toString());
    };
    const onSubmit = () => {
      emit('submit');
    };
    const onClear = () => {
      emit('clear');
    };
    return { onSelectNumber, onSubmit, onClear };
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.num-pad {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 33.333333%;
    height: 100px;
    font-size: 2rem;
    &:not(.disabled) {
      &:active {
        background: lighten(#9e9e9e, 10%);
      }
    }
    .fas.fa-check {
      color: $success;
    }
    &.disabled {
      .fas.fa-check,
      .fas.fa-trash-alt {
        color: $gray-400;
      }
    }
    .fas.fa-trash-alt {
      color: $danger;
    }
  }
}
.num-pad,
.num-pad > .number {
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.3);
}
.num-pad {
  border-width: 1px 0 0 1px;
  margin-top: -1px;
  padding-left: 1px;
  width: 100%;
}
.num-pad > .number {
  border-width: 0 1px 1px 0;
}
</style>
