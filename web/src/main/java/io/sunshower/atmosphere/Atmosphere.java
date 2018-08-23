package io.sunshower.atmosphere;

import io.sunshower.kernel.api.ExtensionPoint;
import io.sunshower.kernel.api.PluginManager;

import javax.annotation.Resource;
import javax.ejb.Singleton;
import javax.ejb.Startup;

@Startup
@Singleton
@ExtensionPoint(name = "atmosphere")
public class Atmosphere {

  public static final String PLUGIN_MANAGER = "java:global/sunshower/kernel/plugin-manager";

  @Resource(name = PLUGIN_MANAGER)
  private PluginManager pluginManager;

  public PluginManager getPluginManager() {
    return pluginManager;
  }

  public void setPluginManager(PluginManager pluginManager) {
    this.pluginManager = pluginManager;
  }

}
