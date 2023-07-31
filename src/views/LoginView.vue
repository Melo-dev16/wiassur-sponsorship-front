<style>
@import '../assets/css/login.css';
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
})
</script>

<template>
	<h2>Bienvenue au programme WiAssur Sponsorship</h2>
	<div class="container" id="container">
		<div class="form-container sign-up-container">
			<form action="#">
				<h1>Créez votre compte en 1 minute chrono !</h1>
				<input type="text" placeholder="Nom" />
				<input type="text" placeholder="Prénoms" />
				<input type="email" placeholder="Adresse Email" />
				<input type="text" placeholder="Contact" />
				<input type="password" placeholder="Mot de passe" />
				<input type="password" placeholder="Confirmer le mot de passe" />
				<button>S'inscrire</button>
			</form>
		</div>
		<div class="form-container sign-in-container">
			<form action="#">
				<h1>Connectez-vous pour continuer</h1>
				<input type="email" placeholder="Adresse Email" />
				<input type="password" placeholder="Mot de passe" />
				<a href="#">Mot de passe oublié ?</a>
				<button>Se Connecter</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-left">
					<h1>Bon retour !</h1>
					<p>Si vous avez déjà un compte, connectez vous ici !</p>
					<button class="ghost" id="signUp">Se Connecter</button>
				</div>
				<div class="overlay-panel overlay-right">
					<h1>Bienvenue !</h1>
					<p>Pas encore de compte ? Inscrivez vous ici !</p>
					<button class="ghost" id="signIn">S'inscrire</button>
				</div>
			</div>
		</div>
	</div>
</template>
  