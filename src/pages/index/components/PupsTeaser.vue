<template>
  <div class="q-pa-md col-12">
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption row justify-center">
          <div class="col q-pa-sm">
            <div class="row justify-center text-white">
              <div class="text-h4">Щенки ККЧС (бленхейм)</div>
            </div>
            <div class="row justify-center text-white">
              <div class="text-subtitle4">
                Любвеобильные щенки кавалечиков классического окраса.
              </div>
            </div>
          </div>
          <div class="absolute-right row self-center q-pa-md">
            <q-btn
              rounded
              size="sm"
              label-position="left"
              color="primary"
              icon="pets"
              label="Бронировать"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="col-12 q-pa-sm">
            <div class="row justify-center text-white">
              <div class="text-h4">Щенки ККЧС (tricolor)</div>
            </div>
            <div class="row justify-center text-white">
              <div class="text-subtitle4">
                Харизматичные компаньоны контрастного трёхцветного окраса.
              </div>
            </div>
          </div>
          <div class="absolute-right row self-center q-pa-md">
            <q-btn
              rounded
              size="sm"
              label-position="left"
              color="primary"
              icon="pets"
              label="Бронировать"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="col-12 q-pa-sm">
            <div class="row justify-center text-white">
              <div class="text-h4">Щенки Чихуахуа (д/ш, белые)</div>
            </div>
            <div class="row justify-center text-white">
              <div class="text-subtitle4">
                Задорные, беленькие пушистике, любящие обнимашки.
              </div>
            </div>
          </div>
          <div class="absolute-right row self-center q-pa-md">
            <q-btn
              rounded
              size="sm"
              label-position="left"
              color="primary"
              icon="pets"
              label="Бронировать"
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="col-12 q-pa-sm">
            <div class="row justify-center text-white">
              <div class="text-h4">Щенки Чихуахуа (к/ш, белые)</div>
            </div>
            <div class="row justify-center text-white">
              <div class="text-subtitle4">
                Юркие, озорные ребята, любящие пошалить.
              </div>
            </div>
          </div>
          <div class="absolute-right row self-center q-pa-md">
            <q-btn
              rounded
              size="sm"
              label-position="left"
              color="primary"
              icon="pets"
              label="Бронировать"
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true);
</script>

<style lang="scss" scoped></style>
