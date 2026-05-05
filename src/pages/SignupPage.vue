<template>
  <div class="bg-[#f9fafb]">
    <main class="max-w-7xl mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-[#001529] mb-4">Sign up in the United States</h1>
        <p class="text-gray-600 text-lg">
          Not sure if you or your student qualify?
          <a
            href="#"
            class="text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:text-blue-900"
          >
            Check qualifications.
          </a>
        </p>
        <p class="text-gray-500 mt-2">
          Want to sign up from outside the United States?
          <a href="#" class="text-blue-700 font-semibold hover:underline">Go to global signup.</a>
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">School</h3>
          <p class="text-lg text-gray-600 mb-8">Free membership</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up school
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For schools and districts</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access textbooks and educational materials</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center ring-2 ring-blue-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Student</h3>
          <p class="text-lg text-gray-600 mb-8">Free membership</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up student
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For students with qualifying disabilities</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for school and leisure</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Adult</h3>
          <p class="text-lg text-gray-600 mb-8 font-semibold">$79.99 per year</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up adult
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For adults with qualifying disabilities</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for learning and leisure</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Organization</h3>
          <p class="text-lg text-gray-600 mb-8 font-semibold">$79.99 per year*</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up organization
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For non-school organizations</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for learning and leisure</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
body {
  font-family: "Open Sans", sans-serif;
}

.bg-bookshare-blue {
  background-color: #003082;
}

.pricing-card {
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #003082;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 20px 0;
}
</style>
