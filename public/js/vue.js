const app = Vue.createApp({
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShow = !this.isShow;
    },
  },
});

app.mount("#app");
