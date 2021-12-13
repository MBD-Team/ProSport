import { Exercise } from '@/types';
import { ref, computed } from 'vue';
// global list details
export const LIST_WIDTH = ref(60);
export const LIST_WIDTH_COLLAPSED = 0;
// LIST
export const orientation = ref('');
export const collapsed = ref(true);
export const toggleList = () => (collapsed.value = false);
export function closeList() {
  collapsed.value = true;
  selectedMuscle.value = '';
  selectedPrimaryMuscle.value = '';
  selectedSecondaryMuscle.value = '';
}
export function chooseMuscle(muscle: string, orientationside: string) {
  if (window.innerWidth > 768) {
    orientation.value = orientationside;
  } else {
    orientation.value = 'back';
  }

  collapsed.value = false;
  selectedMuscle.value = muscle;
  selectedPrimaryMuscle.value = '';
  selectedSecondaryMuscle.value = '';
}
export const selectedPrimaryMuscle = ref('');
export const selectedSecondaryMuscle = ref('');
export const selectedExercise = ref({} as Exercise);
export const selectedMuscle = ref('');
export const listWidth = computed(() => `${collapsed.value ? LIST_WIDTH_COLLAPSED : LIST_WIDTH.value}vw`);
