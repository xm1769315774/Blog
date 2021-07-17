<template>
  <div>
    <ClientOnly>
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: "CountUp",
  props: {
    startValue: {
      type: Number,
      default: 0,
    },
    endValue: {
      type: Number,
      required: true,
    },
    decimalPlaces: {
      type: String,
      default: ",",
    },
    duration: {
      type: Number,
      default: 2,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      counter: null,
    };
  },
  methods: {
    init() {
      import("countup.js").then((module) => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endValue, {
            startVal: this.startValue,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration,
          });

          setTimeout(() => {
            this.counter.start();
          }, this.delay);
        });
      });
    },
  },
  beforeDestroy() {
    this.counter.reset();
    this.counter = null;
  },
};
</script>

<style lang="less" scoped>
</style>