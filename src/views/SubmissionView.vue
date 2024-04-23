<template>
  <basic-layout title="Submission">
    <!-- TODO: 請將 <coming-soon> 標籤置換成正式內容 -->
    <!-- <coming-soon></coming-soon> -->
  </basic-layout>

    <text-section sub-title="Paper Submission Format">
 <p align="left">
    Papers must be submitted electronically using the IEEE Xplore compatible PDF via the websites. All papers will be peer-reviewed. 
    Papers must be written in English, not exceeding the page limit (see below), including figures, tables, references, and appendices (10-point font). Accepted papers will be presented in oral or poster format, depending on venue space and time constraints. Two types of submission are allowed:
 </p>
 <p align="left">
    <ol>
    <li>Regular paper: 4 to 6 double-column pages, with 1 additional page allowed with the purchase of additional page charges at the time of registration and final paper submission. Only regular papers could be submitted to IEEE Xplore.</li>
      <li>Short paper: not exceeding 2 double-column pages. 
      Short papers will be presented in poster format only. Short papers will not be submitted to IEEE Xplore.</li>
    </ol>
 </p>
 <p align="left">
    Please use the standard IEEE conference proceedings templates for Microsoft Word or LaTeX formats found at <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html">http://www.ieee.org/conferences_events/conferences/publishing/templates.html</a>.</p>
 <p align="left">
    Submissions should be made through the ICS 2024 submission page, handled by the EasyChair conference management system: <a href="https://easychair.org/conferences/?conf=ics2024">https://easychair.org/conferences/?conf=ics2024</a></p>
    </text-section>

    <text-section sub-title="Important IEEE Policy">
 <p align="left">
     The IEEE reserves the right to exclude a paper from distribution after the conference (including its removal from IEEE Xplore) if the paper is not presented at the workshop.

    Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conferences/workshops/symposia at the same time (double submission). These matters are taken very seriously and the IEEE Tainan Section will take action against any author who engages in either practice. Follow these links to learn more:</p>

 <p><a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html">IEEE Policy on Plagiarism</a></p>

 <p><a href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro.html">IEEE Policy on Double Submission</a></p>
    </text-section>

    <text-section sub-title="Important Notice">
 <p align="left">
    To be published in the ICS 2024 Conference Proceedings and to be eligible for publication in IEEE Xplore®, an author of an accepted paper is required to register for the conference at the full (member or non-member) rate and the paper must be presented by an author of that paper at the conference unless the TPC Chair grants permission for a substitute presenter arranged in advance of the event and who is qualified both to present and to answer questions. Non-refundable registration fees must be paid prior to uploading the final IEEE formatted, publication-ready version of the paper. For an author with multiple accepted papers, each full registration is valid for 1 paper.

 </p>
 <p align="left">
 <b>All accepted papers will be included in ICS 2024 Conference Proceeding, but only regular papers (full-rate registered and presented) will be submitted to IEEE Xplore®.</b></p>
    </text-section>

</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
//import ComingSoon from '@/components/ComingSoon.vue'
import TextSection from '@/components/TextSection.vue'

export default {
  components: {
    BasicLayout,
    TextSection,
//    ComingSoon,
  }
}
</script>
