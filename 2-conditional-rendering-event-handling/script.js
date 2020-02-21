var app = new Vue({
  el: "#app",
  data: {
    event: "GDG",
    city: "Radzymin",
    logo: "./assets/gdg-radzymin.png",
    link: "https://gdgradzymin.pl",
    pizza: [
      { id: 1, img: "./assets/piece-1.png" },
      { id: 2, img: "./assets/piece-2.png" },
      { id: 3, img: "./assets/piece-3.png" },
      { id: 4, img: "./assets/piece-4.png" },
      { id: 5, img: "./assets/piece-5.png" },
      { id: 6, img: "./assets/piece-6.png" },
      { id: 7, img: "./assets/piece-7.png" },
      { id: 8, img: "./assets/piece-8.png" },
      { id: 9, img: "./assets/piece-9.png" },
      { id: 10, img: "./assets/piece-10.png" }
    ],
    isVisible: true
  },
  methods: {
    changeVisibility() {
      this.isVisible = !this.isVisible;
    }
  },
  computed: {}
});
