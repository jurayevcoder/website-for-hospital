<script setup>
import { onMounted, ref, reactive } from "vue";
import { db } from "@/main";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { toast } from "vue3-toastify";

const orders = ref([]);

onMounted(() => {
  onSnapshot(collection(db, "order"), (querySnapshot) => {
    let fbPatients = [];
    querySnapshot.forEach((doc) => {
      fbPatients.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    orders.value = fbPatients;
  });
});
</script>
<template>
  <div class="container py-10">
    <div class="pt-14 pb-3 flex justify-end">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          class="block p-2 py-4 pl-10 2xl:w-[600px] xl:w-[500px] md:w-[400px] sm:w-[300px] w-full text-sm text-gray-900 border-2 border-blue-700 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Izlash..."
        />
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          :class="
            orders.length !== 0
              ? 'text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400'
              : 'hidden'
          "
        >
          <tr>
            <th scope="col" class="px-6 py-3">F.I.O</th>
            <th scope="col" class="px-6 py-3">Uchrashuv sanasi</th>
            <th scope="col" class="px-6 py-3">Uchrashuv vaqti</th>
            <th scope="col" class="px-6 py-3">Baholash</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(el, i) in orders"
            :key="i"
            class="
              bg- border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700
            "
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-5">
                {{ el.fullname }}
              </div>
            </th>
            <td class="px-6 py-4 text-black">{{ el.date }}</td>
            <td class="px-6 py-4 text-black">{{ el.time }}</td>
            <td class="px-6 py-4 flex items-center gap-4 pt-6">
              <button
                class="rounded-lg px-2 py-2 text-[30px] text-red-600 dark:text-blue-700 focus:ring-4 focus:ring-red-300"
              >
                <i class="bx bx-like"></i>
              </button>
              <button
                class="rounded-lg px-2 py-2 text-[30px] text-gray-700 dark:text-blue-700 focus:ring-4 focus:ring-gray-400"
              >
                <i class="bx bx-dislike"></i>
              </button>
              <button
                href="#"
                class="rounded-lg px-2 py-2 text-[30px] text-blue-700 dark:text-blue-700 focus:ring-4 focus:ring-blue-300"
              >
                <details>
                  <summary class="list-none">
                    <i class="bx bx-comment-edit"></i>
                  </summary>

                  <textarea
                    class="absolute w-lg h-[50px] py-3 px-1 text-lg left-[110px] rounded-lg"
                    placeholder="Comment"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </details>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
