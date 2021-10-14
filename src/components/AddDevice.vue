<template>
  <div class="card card-default mt-4">
    <div class="card-header">Trainingsgerät hinzufügen</div>
    <div class="card-body">
      <form class="mb-4 row">
        <label class="col-4" for="device">Name des Gerätes:</label>
        <div class="col-8">
          <input class="form-control" type="text" placeholder="" v-model="equipment" autocomplete="off" required />
        </div>
        <button class="btn btn-primary ms-2 col-3" type="button" @click="addEquipment()">hinzufügen</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { setEquipment } from '@/API';

export default defineComponent({
  data() {
    return {
      equipment: '',
    };
  },
  methods: {
    async addEquipment() {
      console.log(await setEquipment(this.equipment));
    },
  },
});
</script>
<style lang="scss" scoped></style>
