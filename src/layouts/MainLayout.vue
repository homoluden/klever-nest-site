<template>
  <q-layout view="hHr lpR fFf">
    <q-header elevated class="bg-primary text-white row" height-hint="98">
      <q-toolbar class="col-4">
        <q-toolbar-title class="justify-start row q-gutter-sm">
          <a href="/">
            <img src="logo-64px.png" height="32px" class="block" />
          </a>
          <span class="block">Klever Nest</span>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center" class="col-8">
        <q-route-tab to="/pups" label="Щенки" />
        <q-route-tab to="/grads" label="Выпускники" />
        <q-route-tab to="/gallery" label="Фото-Приветы" />
        <q-route-tab to="/contacts" label="Контакты" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
