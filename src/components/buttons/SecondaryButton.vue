<template>
    <button class="button" role="button">{{ text }}</button>
</template>

<script>
export default {
    name: "MainButton",

    props: {
        text: String,
    },
};
</script>

<style lang="scss" scoped>
.button {
  backface-visibility: hidden;
  background: #0000;
  border: 0;
  border-radius: .375rem;
  box-sizing: border-box;
  color: #fff;
  border: 2px solid $primary;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: 0.75rem 1.6rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:disabled {
  color: #787878;
  cursor: auto;
}

.button:not(:disabled):hover {
  transform: scale(1.02);
  background: $primary;
  color: #26262e
}

.button:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

.button:focus {
  outline: 0 solid transparent;
}

.button:focus:before {
  border-width: .125rem;
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

.button:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button:not(:disabled):active {
  transform: translateY(.125rem);
}
</style>