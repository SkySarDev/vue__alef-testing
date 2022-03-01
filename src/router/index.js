import { createRouter, createWebHistory } from "vue-router";
import UserForm from "@/views/UserForm";
import UserPreview from "@/views/UserPreview";

const routes = [
  {
    path: "/",
    alias: "/user-form",
    name: "user-form",
    component: UserForm,
  },
  {
    path: "/user-preview",
    name: "user-preview",
    component: UserPreview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
