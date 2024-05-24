<template>
  <q-page class="row items-start justify-evenly">
    <div class="items-start col-12 col-lg-6">
      <div class="row justify-center">
        <pups-teaser></pups-teaser>
      </div>
      <div class="row justify-center">
        <greets-block></greets-block>
      </div>
      <div class="row justify-center">
        <adults-teaser></adults-teaser>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PupsTeaser from './components/PupsTeaser.vue';
import GreetsBlock from './components/GreetsBlock.vue';
import AdultsTeaser from './components/AdultsTeaser.vue';

defineOptions({
  name: 'IndexPage',
});
</script>
