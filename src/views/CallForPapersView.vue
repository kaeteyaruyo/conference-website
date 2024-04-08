<template>
  <basic-layout title="Call for Papers">
    <text-section sub-title="Submission Guidelines">
      <p>All papers must be original and not simultaneously submitted to another journal or conference. The conference
        will include the following workshops:
      </p>
      <ol class="pl-8">
        <li>Algorithms, Bioinformatics, and Computation Theory </li>
        <li>Cloud Computing and Big Data</li>
        <li>Computer Vision and Image Processing</li>
        <li>Cryptography and Quantum Computing</li>
        <li>Mobile and Wireless Network</li>
        <li>Autonomous Driving and UAV</li>
        <li>AR/MR and Human Computer Interaction</li>
        <li>Computer Architecture, Embedded Systems, SoC, and VLSI/EDA</li>
        <li>Natural Language Processing and Information Retrieval</li>
        <li>Cybersecurity Attack, Defense, and Resilience (Cadence)</li>
        <li>AI/ML Application</li>
      </ol>
    </text-section>
    <text-section sub-title="Important Dates">
      <ul class="pl-8">
        <li>Paper submission due date: June 15 ,2024</li>
        <li>Paper notification: August 15, 2024</li>
        <li>Final paper due date: September 15 ,2024</li>
        <li>Conference date: October 24-26, 2024</li>
      </ul>
    </text-section>
    <text-section sub-title="Venue">
      <p>
        The conference will be held in National Yang Ming Chiao Tung University, Taipei, Taiwan, on October 24-26, 2024.
      </p>
    </text-section>
    <text-section sub-title="Contact">
      <p>
        All questions about submissions should be emailed to ics2024@nycu.edu.tw.
      </p>
    </text-section>
  </basic-layout>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
// import ComingSoon from '@/components/ComingSoon.vue'
import TextSection from '@/components/TextSection.vue'

export default {
  components: {
    BasicLayout,
    TextSection,
    // ComingSoon,
  }
}
</script>
