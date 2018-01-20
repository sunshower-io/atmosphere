package io.sunshower.atmosphere;

import de.neuland.jade4j.JadeConfiguration;
import de.neuland.jade4j.spring.template.SpringTemplateLoader;
import de.neuland.jade4j.spring.view.JadeViewResolver;
import io.sunshower.atmosphere.auth.AuthenticationController;
import io.sunshower.atmosphere.layout.Layout;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.inject.Named;
import java.util.HashMap;
import java.util.Map;

@EnableWebMvc
@Configuration
public class AtmosphereConfiguration implements WebMvcConfigurer {

  static final Logger log = LoggerFactory.getLogger(AtmosphereConfiguration.class);

  @Bean
  public AuthenticationController authenticationController() {
    return new AuthenticationController();
  }

  @Bean
  @Named("jadeSharedVariables")
  public Map<String, Object> sharedVariables() {
    final Map<String, Object> vs = new HashMap<>();

    vs.put("layout", new Layout());
    return vs;
  }

  @Bean
  public JadeConfiguration jadeConfiguration(
      SpringTemplateLoader templateLoader,
      @Named("jadeSharedVariables") Map<String, Object> sharedVariables) {
    final JadeConfiguration configuration = new JadeConfiguration();
    configuration.setCaching(false);
    configuration.setSharedVariables(sharedVariables);
    configuration.setTemplateLoader(templateLoader);
    return configuration;
  }

  @Bean
  public SpringTemplateLoader templateLoader() {
    log.info("Creating template loader...");
    final SpringTemplateLoader templateLoader = new SpringTemplateLoader();
    templateLoader.setBasePath("/WEB-INF/ui/");
    log.info("Successfully created template loader.");
    return templateLoader;
  }

  @Bean
  public ViewResolver jadeViewResolver(JadeConfiguration configuration) {
    final JadeViewResolver viewResolver = new JadeViewResolver();
    viewResolver.setConfiguration(configuration);
    return viewResolver;
  }
}
