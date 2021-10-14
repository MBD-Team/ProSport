import { ref, computed } from 'vue';
// Right collapseable list for Humanfront
export const collapsedRight = ref(true);
export const toggleListRight = () => (collapsedRight.value = false);
export const closeListRight = () => (collapsedRight.value = true);
export function chooseMuscleRight(muscle: string) {
  console.log((selectedMuscleRight.value = muscle));
  collapsedRight.value = false;
}
export const selectedMuscleRight = ref('');
export const listWidthRight = computed(() => `${collapsedRight.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
// Left collapseable for Humanfront
export const collapsedLeft = ref(true);
export const toggleListLeft = () => (collapsedLeft.value = false);
export const closeListLeft = () => (collapsedLeft.value = true);
export function chooseMuscleLeft(muscle: string) {
  console.log((selectedMuscleLeft.value = muscle));
  collapsedLeft.value = false;
}
export const selectedMuscleLeft = ref('');
export const listWidthLeft = computed(() => `${collapsedLeft.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH}vw`);
// global list details
export const LIST_WIDTH = 60;
export const LIST_WIDTH_COLLAPSED = 0;
