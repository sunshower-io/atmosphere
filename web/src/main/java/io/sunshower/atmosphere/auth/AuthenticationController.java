package io.sunshower.atmosphere.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("auth")
public class AuthenticationController {
    
    @RequestMapping({"/"})
    public ModelAndView authenticate() {
        final ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("title", "Login");
        modelAndView.setViewName("views/auth/login");
        return modelAndView;
    }
}
