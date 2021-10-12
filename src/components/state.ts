import { ref, computed } from 'vue';
export const collapsed = ref(true);
export const toggleList = () => (collapsed.value = !collapsed.value);
export const closeList = () => (collapsed.value = true);
export const LIST_WIDTH = 50;
export const LIST_WIDTH_COLLAPSED = 0;
export const listWidth = computed(() => `${collapsed.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
