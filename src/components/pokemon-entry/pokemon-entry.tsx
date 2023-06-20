import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pokemon-entry',
  styleUrl: 'pokemon-entry.css',
  shadow: true,
})
export class PokemonEntry {
  @Prop() name: string;
  @Prop() img: string;
  @Prop() hp: string;
  @Prop() attack: string;
  @Prop() defense: string;
  render() {
    return (
      <div class="pokemon">
        <span class="img">
          <img src={this.img} alt="" />
        </span>
        <span class="name">{this.name}</span>
        <span class="hp">HP : {this.hp}</span>
        <span class="attack">Attack : {this.attack}</span>
        <span class="defense">Defense : {this.defense}</span>
      </div>
    );
  }
}
