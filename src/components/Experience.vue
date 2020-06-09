<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Senior Software Engineer</h3>
          <div class="subheading mb-3">Rock Central LLC / Quicken Loans Inc.</div>
          <p>As a Senior Software Engineer, my focus shifted from not just building and supporting software to also designing, architecting and educating. I became more involved with the Technology Standards conversations, designed larger scale applications and mentored more junior and mid-level engineers within the company. Some of the projects I had the privilege of working on are:</p>
          <p
            class="experience"
          >Designed and Built an interface for all Team Member data to be used by all internal applications. This was a hybrid on-prem/cloud solution that leveraged AWS Database Migration Service, MSSQL, AWS Aurora(MySQL), AWS Lambda, AWS API Gateway, Apollo GraphQL and the Serverless Framework.</p>
          <p
            class="experience"
          >Designed and Built multiple services to sync internal data with third party SAAS solutions. These services where NodeJS applications hosted on AWS Lambda that leveraged AWS API Gateway and the Serverless Framework.</p>
          <p
            class="experience"
          >Built Log Exporting system for AWS Cloudwatch to Splunk. This service was built as a NodeJS application on AWS Lambda that leveraged Cloudwatch Log Streams and the Serverless Framework.</p>
          <p
            class="experience"
          >Designed and Built state machines via AWS Step Functions to deliver internal data to third party SAAS Solutions.</p>
          <p
            class="experience"
          >Designed and Built a desktop pop up survey system with reporting. This application consisted of a VueJS UI served as static site in AWS S3 with a Typescript API hosted on AWS Lambda via the Serverless Framework. Windows and Mac Desktop Clients were built with Electron.</p>
          <p
            class="experience"
          >Wrote a Javascript Logging Library - formats all logs to comply with internal company standards. This package was accessible by our engineers as both an internal npm package and an AWS Lambda Layer.</p>
          <p
            class="experience"
          >Wrote a Serverless Framework multi-region plugin - Used for deploying all of our serverless applications as Active-Active multi-region applications.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2018 - Present</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Software Engineer</h3>
          <div class="subheading mb-3">Quicken Loans Inc.</div>
          <p>As a Software Engineer my focus was primarily on growing my skillset and helping provide valuable business solutions. During this time I had the pleasure of being involved in some innovative projects, some of which were:</p>
          <p
            class="experience"
          >Worked on and maintained an internal tool for managing parking space allocation with reporting for all team members within the Family of Companies. This was a hybrid on-prem/cloud solution that included a .Net Framework / Razor &amp; AngularJS UI with .Net Core REST API hosted on AWS Lambda using the AWS API Gateway and the Serverless Framework.</p>
          <p
            class="experience"
          >Worked on and maintained retail leasing platform for Bedrock. This solution was a .Net Framework application with a Razor UI.</p>
          <p
            class="experience"
          >Designed and Built an IOT Photo Kiosk with Facial Recognition / email &amp; Twitter integration. This solution included a Windows UWP App for the photo kiosk as well as leveraged AWS Lambda, AWS API Gateway, AWS SES and AWS Rekognition.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2014 - 2018</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
.experience {
  display: list-item;
  list-style: disc inside;
  margin: 0.5em;
}
</style>