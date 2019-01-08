<template>
  <div>
    <div class="m-widget24">					 
      <div class="m-widget24__item">
        <h4 class="m-widget24__title">
          {{ title }}
        </h4><br>
        <span class="m-widget24__desc">
          {{ desc }}
        </span>
        <span :class="`m-widget24__stats m--font-${color}`">
          {{ value }}
        </span>		
        <div class="m--space-10"/>
        <div class="progress m-progress--sm">
          <div :class="`progress-bar m--bg-${color}`" :style="{width: `${progress}%`}" role="progressbar"/>
        </div>
        <span class="m-widget24__change">
          {{ progressTitle }}
        </span>
        <span class="m-widget24__number">
          {{ progress }}%
        </span>
      </div>				      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Info Box'
    },
    desc: {
      type: String,
      default: 'description'
    },
    progressTitle: {
      type: String,
      default: 'Progress'
    },
    color: {
      type: String,
      default: 'info'
    },
    progress: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
