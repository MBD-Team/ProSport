import { ref, computed } from 'vue';
export const collapsed = ref(true);
export const selectedMuscle = ref('');
export function chooseMuscle(muscle: string) {
  console.log((selectedMuscle.value = muscle));
  collapsed.value = false;
}
export const toggleList = () => (collapsed.value = false);
export const closeList = () => (collapsed.value = true);
export const LIST_WIDTH = 60;
export const LIST_WIDTH_COLLAPSED = 0;
export const listWidth = computed(() => `${collapsed.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
