/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PokemonEntry {
        "attack": string;
        "defense": string;
        "hp": string;
        "img": string;
        "name": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPokemonEntryElement extends Components.PokemonEntry, HTMLStencilElement {
    }
    var HTMLPokemonEntryElement: {
        prototype: HTMLPokemonEntryElement;
        new (): HTMLPokemonEntryElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pokemon-entry": HTMLPokemonEntryElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PokemonEntry {
        "attack"?: string;
        "defense"?: string;
        "hp"?: string;
        "img"?: string;
        "name"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pokemon-entry": PokemonEntry;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pokemon-entry": LocalJSX.PokemonEntry & JSXBase.HTMLAttributes<HTMLPokemonEntryElement>;
        }
    }
}
