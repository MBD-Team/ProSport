<template>
  <div class="card card-default mt-4">
    <div class="card-header">Trainingsgerät hinzufügen</div>
    <div class="card-body">
      <form class="mb-4 row" @submit.prevent="addEquipment()">
        <label class="col-4" for="device">Name des Gerätes:</label>
        <div class="col-8">
          <input class="form-control" type="text" placeholder="" v-model="equipment" autocomplete="off" required />
        </div>
        <button class="btn btn-primary ms-2 col-3" type="submit">hinzufügen</button>
      </form>
      <ul class="list-group" v-for="e in equipments" :key="e.id">
        <li class="list-group-item">
          {{ e.name }}
          <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt" style="float: right"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { delEquipment, getEquipment, setEquipment } from '@/API';
import { Equipment } from '@/types';

export default defineComponent({
  mounted() {
    this.loadEquipment();
  },
  data() {
    return {
      equipment: '',
      equipments: [] as Equipment[],
    };
  },
  methods: {
    async addEquipment() {
      if (!this.equipment) return;
      let newEquipment = await setEquipment(this.equipment);
      this.equipments.push(newEquipment);
      this.equipment = '';
    },
    async loadEquipment() {
      this.equipments = await getEquipment();
    },
    deleteEquipment(id: string) {
      console.log('abcdef');
      //delete local equipment
      this.equipments = this.equipments.filter(e => e.id != id);
      //overwrite firebase
      delEquipment(id);
    },
  },
});
</script>
<style lang="scss" scoped></style>
