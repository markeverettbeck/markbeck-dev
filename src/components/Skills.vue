<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3"> Systems &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <!-- https://fontawesome.com/icons/ -->
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'aws']" title="AWS" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'windows']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'google']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'linux']" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'github']" />
        </li>        
      </ul>

      <div class="flex-container">
        <p class="skills">Powershell</p>
        <p class="skills">Terraform</p>
        <p class="skills">Cloud Formation</p>
        <p class="skills">AWS API Gateway</p>
        <p class="skills">AWS DynamoDB</p>
        <p class="skills">MySQL &amp; MSSQL</p>
        <p class="skills">AWS Lambda</p>
        <p class="skills">AWS Snowball</p>
        <p class="skills">AWS S3</p>
        <p class="skills">Docker</p>
        <p class="skills">Google Cloud Platform</p>
        <p class="skills">Google Cloud Search</p>
        <p class="skills">Google </p>
        <p class="skills">GSuite &amp; Cloud Identity </p>
        <p class="skills">Google Cloud Security Command Center</p>
        <p class="skills">Github</p>
        <p class="skills">Agile</p>
      </div>
      <br />
      <div class="subheading mb-3">Core Practices</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />Infrastructure As Code
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