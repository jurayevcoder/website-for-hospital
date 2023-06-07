<script setup>
import { ref } from 'vue'
import { navLinks } from '../constants/navLInk'
import { useRouter } from 'vue-router'

const navlinks = ref(navLinks)

const props = defineProps(['title'])

const router = useRouter()

const modal = ref(false)
const toggleModal = () => (modal.value = !modal.value)

const acc = ref(false)
const toggleAcc = () => (acc.value = !acc.value)
</script>

<template>
  <header class="fixed w-full z-50 bg-gray-100 dark:bg-gray-700">
    <div class="container">
      <nav class="">
        <div class="flex flex-wrap items-center justify-between">
          <a href="#" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              ><img src="../img/logoShifokor.png" alt="" class="w-[150px]"
            /></span>
          </a>
          <button
            @click="toggleModal"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            :class="modal ? '' : 'hidden'"
            class="w-full md:block md:w-auto flex justify-end"
            id="navbar-default"
          >
            <ul
              class="font-medium flex items-center md:p-0 mt-4 rounded-lg md:space-x-8 md:mt-0 dark:border-gray-700 dark:text-white"
            >
              <li v-for="(el, idx) in navlinks" :key="idx">
                <router-link
                  :to="el.link"
                  class="block py-2 pl-3 pr-4 rounded text-black md:hover:text-blue-500 md:p-0 dark:text-white"
                  aria-current="page"
                  >{{ el.title }}</router-link
                >
              </li>
              <li>
                <button
                  @click="toggleAcc"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-1 py-1 inline-flex items-center dark:focus:ring-blue-800 dark:text-white"
                  type="button"
                >
                  <img src="https://i.pravatar.cc/50" alt="" class="rounded-full" />
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdown"
                  :class="
                    acc
                      ? 'z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 left-'
                      : 'hidden'
                  "
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="/login"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: blue;
}
</style>
