<template>
  <div class="bg-[#0647b9]">
    <main class="login-container flex items-center justify-center px-6 py-12 md:py-20">
      <div class="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-[#001529] mb-2">Log In</h1>
          <p class="text-gray-500 text-sm">Xush kelibsiz! Shaxsiy hisobingizga kiring.</p>
        </div>

        <form action="#" class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Username or Email</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i class="fas fa-envelope"></i>
              </span>
              <input
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
                type="password"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
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

<style>
body {
  font-family: "Open Sans", sans-serif;
}

.login-container {
  min-height: calc(100vh - 200px);
}
</style>
