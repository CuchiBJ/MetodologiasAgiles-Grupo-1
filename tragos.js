const app = new Vue({
  el: '#app3',
  data: {
    tragos: [ 
      {name:'Margarita', ing: 'Tequila, triple seco y jugo de lima'},
      {name:'Mojito', ing: 'Ron, azucar, menta, lima, agua con gas  y hielo '},
      {name:'Gintonic', ing: 'Ginebra y tónica'},
      {name:'Caipirinha', ing: 'Cachaza, lima o limon, azucar y hielo'},
      {name:'Manhattan',ing: 'Whisky y vermut rojo'},
      {name:'Piña colada', ing: 'Piña, crema de coco y ron'},
      {name:'Daiquiri', ing: 'Ron blanco y zumo de limon o lima'},
      {name:'Cosmopolitan', ing: 'Vodka, triple seco, zumo de lima y zumo de arandanos'},
      {name:'Martini', ing: 'Ginebra y vermut seco'},
      {name:'Long Island', ing: 'Vodka, tequila, ron blanco, triple seco, ginebra, zumo de limon, azcar y coca cola'},
      {name:'Bloody Mary', ing: 'Vodka, zumo de tomate, zumo de limon, tabasco, salsa Worcestershire, sal, pimienta y hielo '},
      {name:'Sex on the beach', ing: 'Vodka, licor de melocotón, zumo de naranza y zumo de arandanos'},
      {name:'Mai Tai', ing: 'Ron añejo, ron blanco, triple seco, zumo de lima, amaretto, azúcar y hielo'},
      {name:'Negroni', ing: 'Vermut rojo, Campari y vermut'},
      {name:'Rusty Nail', ing: 'Whisky escoces y licor drambuie'},
      {name:'Sidecar', ing: 'Cognac o brandy, triple seco y zumo de limon'},
      {name:'Coco loco', ing: 'Vodka, tequila, ron blanco, zumo de limon, crema de coco y hielo'},
      {name:'Tom Collins', ing: 'Ginebra, almibar o azúcar, zumo de limon, soda y hielo'},
      {name:'Black Russian', ing: 'Vodka y licor de cafe'},
      {name:'White Russian', ing: 'Vodka, licor de cafe y nata fresca o leche condensada'},
      {name:'Fernet con cola', ing: 'Fernet, bebida de cola, limon y hielo'},
      {name:'Fernet Menta ', ing: 'Branca Menta, sprite, limon'},
      {name:'Gancia Batid0', ing: 'Gancia, jugo de limón, azucar, limon'},
      {name:'Caipiroska ', ing: 'Vodka, lima, almibar simple, gaseosa pomelo, pomelo rosado'},
      {name:'Whiscola', ing: 'Whisky, coca cola, hielo'},
      {name:'Caipirisima', ing:'Ron, lima , jarabe de goma, rodaja de lima, hielo'},
      {name:'Cuba Libre', ing: 'Ron, coca cola. jugo de limon, rodaja de limon, hielo'},
      {name:'Daiquiri de frutilla', ing: 'Ron, licor de frutilla, azucar, frutillas, hielo, rodaja de limon'},
      {name:'Daiquiri de ananá', ing: 'Ron, licor de anana, azucar,hielo, rodaja de limon '},
      {name:'Daiquiri de durazno', ing: 'Ron, licor de duraznos, duraznos, azucar, rodaja de limon y hielo'},
      {name:'Mojito Maracuya', ing: 'Ron, jugo de limon, hojas de menta, azucar, soda, pulpa de maracuya, hielo'},
      {name:'Mojito Mango', ing: 'Ron, jugo de limon, hojas de menta, azucar, soda, pulpa de mango y hielo'},
      {name:'Electric Lemonade', ing: 'Vodka, blue curacao, sour mix, sprite, rodaja de limon y hielo'},
      {name:'Tequila Sunrise', ing: 'Tequila, jugo de naranja, gotas de granadina, hielo y rodaja de naranja'},
      {name:'Margarita Blue ', ing: 'Tequila. Blue Curacao, jugo de lima, rodaja de limon'},
      {name:'Destornillador', ing: 'Vodka, jugo de naranja, rodaja de naranja, hielo'},

   ],

   filterField: ''
    
  },

  methods:{
      filter(trago){
          console.log(trago.ing+" "+this.filterField)
          return trago.ing.toLocaleLowerCase().includes(this.filterField.toLocaleLowerCase())
      }
    
  }

  
})