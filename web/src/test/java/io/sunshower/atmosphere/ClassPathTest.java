package io.sunshower.atmosphere;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(Arquillian.class)
public class ClassPathTest {

  @Deployment
  public static WebArchive createDeployment() {
    return ShrinkWrap.create(WebArchive.class)
        .addAsWebInfResource("webapp/WEB-INF/jboss-deployment-structure.xml")
        .addClass(ClassPathTest.class)
        .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
  }

  @Test
  public void ensureLoadingClassFromDependentModuleWorks() throws ClassNotFoundException {
    System.out.println(getClass().getClassLoader());
    Class<?> clazz = getClass().getClassLoader().loadClass("io.sunshower.web.SunshowerCore");
    System.out.println(clazz);
  }
}
