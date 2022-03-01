import { reactive } from "vue";

const store = {
  state: reactive({
    userData: {
      name: "",
      age: "",
      children: []
    },
  }),

  addChildren() {
    const id = Date.now();

    this.state.userData.children.push({
      id,
      name: '',
      age: ''
    });
  },

  deleteChildren(id) {
    this.state.userData.children = this.state.userData.children.filter(item => item.id !== id);
  },

  save() {
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
  },

  init() {
    const localData = localStorage.getItem('userData');

    if (localData) {
      const parsedData = JSON.parse(localData);

      this.state.userData.name = parsedData.name || '';
      this.state.userData.age = parsedData.age || '';
      this.state.userData.children = parsedData.children || [];
    }
  }
}

export default store;