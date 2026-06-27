import { create } from "zustand";

export const usePostsStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=50",
      );
      const data = await response.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch posts", loading: false });
    }
  },
}));
