<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Mark
        <span class="text-primary">Beck</span>
      </h1>
      <div class="subheading mb-5">
        Cloud/Infrastructure Systems Engineer At Rocket Central
        Chief Exective Officer at Festival Parent
        <p>
          Scottsdale, Arizona  
          <br><a
            href="mailto:markeverettbeck@gmail.com"
          >markeverettbeck@gmail.com</a>
        </p>
      </div>
      <p class="lead mb-5">
        Strives to grow and the drive to continue moving forward.
        When knowledge is lacking, quickly jumps into action to gain said knowledge and implement it decisively.
        Quickly jumps into difficult situations with drive to solve issues to increase productivity and efficiency.
        Takes positive and negative feed-back and focuses on how to maintain excellence and how to improve troubled areas with an upbeat attitude.
        Strives to promote proper communications between various aspects of tasks required by job in hopes to increase productivity and company moral.
        Diligently helps co-workers within areas of his expertise, help directing to where the information could possibly be found, all while staying up to date on personal learning/training. 
      </p>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/markeverettbeck/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/markeverettbeck/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a href="https://markbeck.dev" target="_blank" rel="noopener noreferrer">
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
