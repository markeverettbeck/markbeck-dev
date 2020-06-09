<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Matt
        <span class="text-primary">Mitchell</span>
      </h1>
      <div class="subheading mb-5">
        Sr. Software Engineer
        <p>
          Allen Park, MI 48101 · (313) 418-3132 ·
          <a
            href="mailto:mjmitchell86@gmail.com"
          >mjmitchell86@gmail.com</a>
        </p>
      </div>
      <p class="lead mb-5">
        I am an innovative, ever learning, ever growing, Senior Software Engineer that loves to explore new technologies.
        I am a full stack .Net engineer as well as proficient with NodeJS (JavaScript and Typescript) that loves to advocate for cloud technologies.
        I have experience in the full software development lifecycle – from concept through delivery of next-generation applications and customizable solutions.
        I am an expert do-er, well versed in different development methodologies, tools and processes contributing to the design and rollout of cutting-edge software applications.
        I'm known for excellent troubleshooting skills – able to analyze code and engineer well-researched, cost-effective and responsive solutions.
        On the side, I dive into IOT solutions for problems no one really has! I also love to make Amazon Echo skills and am a big advocate of Serverless technologies.
      </p>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/mattmitchelldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/mjmitchell86" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a href="https://mattmitchell.dev" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fas', 'rss']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
