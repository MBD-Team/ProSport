import { ref, computed } from 'vue';
// global list details
export const LIST_WIDTH = 60;
export const LIST_WIDTH_COLLAPSED = 0;
// LIST
export const orientation = ref('');
export const collapsed = ref(true);
export const toggleList = () => (collapsed.value = false);
export function closeList() {
  collapsed.value = true;
  selectedMuscle.value = '';
}
export function chooseMuscle(muscle: string, orientationside: string) {
  orientation.value = orientationside;
  collapsed.value = false;
  selectedMuscle.value = muscle;
}
export const selectedMuscle = ref('');
export const listWidth = computed(() => `${collapsed.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
