import { EMPANADAS } from '../shared/empanadas';
import { PIZZAS } from '../shared/pizzas';
import { EMPARECIPES } from '../shared/emparecipes';
import { PIZZARECIPES } from '../shared/pizzarecipes';

export const initialState = {
    empanadas: EMPANADAS,
    pizzas: PIZZAS,
    emparecipes  : EMPARECIPES,
    pizzarecipes : PIZZARECIPES
};

export const Reducer = (state = initialState, action) => {
    return state;
};