import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { list } from 'postcss'

export const infoStore = defineStore('info', () => {
  const state = reactive(
    {
      list: [{
        id: '0',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "21.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '1',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "1.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '2',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "21.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '3',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "21.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '4',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "9.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '5',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "21.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '6',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "20.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      {
        id: '7',
        first_name: 'Eshmat',
        last_name: "Toshmatov",
        price: "120000 so'm",
        group: "Okulist",
        date: "15.5.2023",
        time: "12:30",
        image: "https://pbs.twimg.com/profile_images/1001210776940634113/SyYv1SXr_400x400.jpg"
      },
      ],
      load: true,
      errorMessage: ''
    })

  const ADD = (data) => {
    state.list.push(data)
    console.log(state, list);
  }

  const LIST = computed(() => state.list)

  const DEL = (id) => {
    for (let i in state.list) {
      if (id === state.list[i].id) {
        let n = Number(i)
        state.list.splice(n, 1)
      }
    }
  }

  return { LIST, ADD, DEL }
})
