<script setup lang="ts"></script>

<template>
  <button type="submit">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  color: #fff;
  height: 42px;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  background: #0000ff96;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: blue;
  }

  &:disabled {
    background: #fff !important;
    color: #000;
    cursor: default;
  }
}

.load {
  background: blue;
  &:before {
    content: '';
    width: 30px;
    height: 30px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>