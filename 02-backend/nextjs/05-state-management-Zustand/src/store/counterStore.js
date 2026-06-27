import {create} from 'zustand';

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})) ,
    decrease: () => set((state) => ({count: state.count - 1})) ,
    // reset: () => set((state) => ({count: 0}))
    // reset: () => set(() => ({count: 0}))
    reset: () => set({count:0})
}));