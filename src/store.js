import { reactive } from "vue";

export const store = reactive({
  pokemon: {},
  setPokemon(data) {
    this.pokemon = data;
  },
  abilities: {},  
  setAbilities(data) {
    this.abilities = data;    
  },
  ability: {},
  abilityDescription: "",
  setAbility(data) {    
    this.ability = data;    

    if (data.flavor_text_entries !== undefined) {
      this.abilityDescription = data.flavor_text_entries.find((element) => element.language.name === "en");
    }
  }
});
