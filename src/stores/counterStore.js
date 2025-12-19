import { create } from "zustand";

const useCounterStore = create((set, get) => ({
	count: 0,
	increment: () => {
		const { count } = get(); // state.count
		if (count >= 0) {
			set((state) => ({ count: state.count + 1 }));
		}
	},
	decrement: () => {
		const { count } = get();
		if (count > 0) {
			set((state) => ({ count: state.count - 1 }));
		}
	},
	reset: () => set({ count: 0 }),
	incrementBy: (amount) => set((state) => ({ count: state.count + amount })),
}));

export default useCounterStore;
