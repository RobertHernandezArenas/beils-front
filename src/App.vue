<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="container">
		<nav class="navbar sticky-top bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img
						src="@/assets/logo.svg"
						alt="Logo"
						width="30"
						height="24"
						class="d-inline-block align-text-top"
					/>
					Bootstrap
				</a>
			</div>
		</nav>
	</header>

	<RouterView />
</template>

<style scoped></style>
