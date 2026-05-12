<template>
  <div class="bg-[#0647b9]">
    <main class="login-container flex items-center justify-center px-6 py-12 md:py-20">
      <div class="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-[#001529] mb-2">Log In</h1>
          <p class="text-gray-500 text-sm">Xush kelibsiz! Shaxsiy hisobingizga kiring.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div v-if="error" class="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100">
            {{ error }}
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Username or Email</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i class="fas fa-envelope"></i>
              </span>
              <input
                v-model="email"
                type="text"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i class="fas fa-lock"></i>
              </span>
              <input
                v-model="password"
                type="password"
                maxlength="20"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>
            <!-- Simple Password Info -->
            <div v-if="password" class="mt-2 flex justify-between items-center">
              <p class="text-[11px] text-gray-500">
                Kamida 6 ta belgi bo'lishi kerak
              </p>
              <p class="text-[11px] text-gray-400">{{ password.length }}/20</p>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span class="ml-2 text-gray-600">Eslab qolish</span>
            </label>
            <router-link to="/forget" class="text-blue-700 font-semibold hover:underline">Parolni unutdingizmi?</router-link>
          </div>

          <button type="submit" class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-900 shadow-lg hover:shadow-blue-200 transition duration-300">
            Kirish
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-gray-100 text-center">
          <p class="text-gray-600">
            A'zo emasmisiz? <router-link to="/signup" class="text-blue-700 font-bold hover:underline">Ro'yxatdan o'tish</router-link>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  error.value = "";
  
  if (!email.value || !password.value) {
    error.value = "Iltimos, barcha maydonlarni to'ldiring.";
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    error.value = "Email formati noto'g'ri.";
    return;
  }

  // Simple Password Validation (Min 6 characters)
  if (password.value.length < 6) {
    error.value = "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";
    return;
  }

  // Hardcoded check for demo (e.g., admin@mail.com / Admin123!)
  if (email.value === "admin@mail.com" && password.value === "Admin123!") {
    router.push("/");
  } else {
    router.push("/login");
  }
};

const getPasswordStrength = () => {
  if (!password.value) return 0;
  let strength = 0;
  if (password.value.length >= 8) strength++;
  if (/[A-Z]/.test(password.value)) strength++;
  if (/[0-9]/.test(password.value)) strength++;
  if (/[@$!%*?&]/.test(password.value)) strength++;
  return strength;
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
}

.login-container {
  min-height: calc(100vh - 200px);
}
</style>
