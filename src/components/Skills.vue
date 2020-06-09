<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'html5']" title="HTML 5" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'css3-alt']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'github']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'js-square']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'angular']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'node-js']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'sass']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']" />
        </li>
      </ul>

      <div class="flex-container">
        <p class="skills">NodeJS</p>
        <p class="skills">.Net Framework &amp; .Net Core</p>
        <p class="skills">Serverless Framework</p>
        <p class="skills">AWS API Gateway</p>
        <p class="skills">AWS DynamoDB</p>
        <p class="skills">MySQL &amp; MSSQL</p>
        <p class="skills">AWS Lambda</p>
        <p class="skills">AWS Step Functions</p>
        <p class="skills">AWS S3</p>
        <p class="skills">C#</p>
        <p class="skills">Javascript &amp; Typescript</p>
        <p class="skills">VueJS</p>
        <p class="skills">Angular</p>
        <p class="skills">REST &amp; GraphQL</p>
        <p class="skills">Docker</p>
        <p class="skills">CircleCI</p>
        <p class="skills">SonarQube</p>
        <p class="skills">Github</p>
        <p class="skills">Agile</p>
      </div>
      <br />
      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Code follows SOLID principles
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Quality First, Responsible Architecture
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Cross Functional Teams
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Agile Development &amp; Scrum
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Follows the 5 Pillars of the AWS Well Architected Framework
        </li>
      </ul>
    </div>
  </section>
</template>
<style type="text/css">
.skills {
  display: list-item;
  list-style: disc inside;
  /* padding: 0 0 0 5em; */
  margin: 0.5em;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>