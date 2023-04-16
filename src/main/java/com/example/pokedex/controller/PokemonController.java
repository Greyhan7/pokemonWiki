package com.example.pokedex.controller;

import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Setter
public class PokemonController {

    @GetMapping("/main")
    public ModelAndView main(){
        ModelAndView mav = new ModelAndView("/main");
        return mav;
    }

    @GetMapping("/pokemonList")
    public ModelAndView listPokemon(){
        ModelAndView mav = new ModelAndView("/pokemon/list");

        return mav;
    }

    @GetMapping("/pokemonDetail")
    public ModelAndView detailPokemon(){
        ModelAndView mav = new ModelAndView("/pokemon/detail");
        return mav;
    }

}
