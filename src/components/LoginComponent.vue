<template>
  <div v-if="initMounted" class="login wl-ps-component-god-login">
    {{ user }}
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '@wl/ps-core/dist/composables';
import { authStore } from '@wl/ps-core/dist/stores';
import { navigate, product } from '@wl/ps-core/dist/routes';

const username = ref('');
const password = ref('');
const { login, user } = useAuth();
const handleSubmit = async () => {
  console.log('Username:', username.value);
  console.log('Password:', password.value);
  await login(username.value, password.value);
  navigate(product.PROMOTION);
  console.log('submitted user info', authStore.getters.user, user);  
};
const initMounted = ref(false);
onMounted(() => {
  if (!initMounted.value) {
    initMounted.value = true;
  }
});
</script>

<style lang="scss" scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: fixed;
  z-index: 999999;
}

.login div {
  margin-bottom: 1em;
}

.login label {
  margin-bottom: .5em;
  color: #333333;
  display: block;
}

.login input {
  border: 1px solid #ccc;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

.login button {
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login button:hover {
  background-color: #0056b3;
}
</style>