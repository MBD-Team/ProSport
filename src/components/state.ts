import { ref, computed } from 'vue';
// global list details
export const LIST_WIDTH = 60;
export const LIST_WIDTH_COLLAPSED = 0;
// LIST
export const orientation = ref('');
export const collapsed = ref(true);
export const toggleList = () => (collapsed.value = false);
export const closeList = () => ((collapsed.value = true), (selectedMuscle.value = ''), console.log(orientation));
export function chooseMuscle(muscle: string, orientationside: string) {
  console.log((selectedMuscle.value = muscle));
  orientation.value = orientationside;
  console.log(orientation);
  collapsed.value = false;
}
export const selectedMuscle = ref('');
export const listWidth = computed(() => `${collapsed.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
