<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuNavigation from './components/MenuNavigation.vue';
</script>

<template>
	<MenuNavigation />
	<h1 class="app__title">Beils Belleza Honesta</h1>
	<RouterView />
</template>

<style lang="scss" scoped></style>
