<template>
  <Layout>
    <div class="container-fluid p-0">
      <About />
      <hr class="m-0" />
      <Experience />
      <hr class="m-0" />
      <Skills />
      <hr class="m-0" />
      <Interests />
      <hr class="m-0" />
      <Awards />
      <hr class="m-0" />
      <Accolades />
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Awards from "../components/Awards";
import Accolades from "../components/Accolades";

export default {
  components: {
    About,
    Experience,
    Skills,
    Interests,
    Awards,
    Accolades
  },
  metaInfo: {
    title: "Mark Beck's Resume",
    titleTemplate: "%s"
  }
};
</script>

<style lang="scss">
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}

.fa-ul > li {
  display: flex;
  align-items: center;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
  color: var(--primary);
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
