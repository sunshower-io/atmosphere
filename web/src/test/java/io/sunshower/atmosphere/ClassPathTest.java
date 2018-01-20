package io.sunshower.atmosphere;

import io.sunshower.kernel.api.PluginManager;
import io.sunshower.test.common.TestClasspath;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.annotation.Resource;
import java.io.File;

@RunWith(Arquillian.class)
public class ClassPathTest {

  @Resource(
    name =
        "java:global/kernel-wildfly-provider-1.0.0-SNAPSHOT/WildflyPluginManager!io.sunshower.kernel.api.PluginManager"
  )
  private PluginManager pluginManager;

  static File file(String path) {
    return new File(TestClasspath.buildDir().getParentFile(), path);
  }

  @Deployment
  public static WebArchive createDeployment() {
    return ShrinkWrap.create(WebArchive.class)
        .addAsWebInfResource(file("src/main/webapp/WEB-INF/web.xml"))
        .addAsWebInfResource(file("src/main/webapp/WEB-INF/jboss-web.xml"))
        .addAsWebInfResource(file("src/test/webapp/WEB-INF/jboss-deployment-structure.xml"))
        .addClass(ClassPathTest.class)
        .addClass(TestClasspath.class)
        .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
  }

  @Test
  public void ensureLoadingClassFromDependentModuleWorks()
      throws ClassNotFoundException, InterruptedException {
    System.out.println(getClass().getClassLoader());
    Class<?> clazz = getClass().getClassLoader().loadClass("io.sunshower.web.SunshowerCore");

    //    Thread.sleep(1000000);
  }
}
