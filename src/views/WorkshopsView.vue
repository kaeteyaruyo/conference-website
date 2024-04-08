<template>
  <basic-layout title="Workshops">
    <!-- TODO: 請將 <coming-soon> 標籤置換成正式內容 -->
    <coming-soon></coming-soon>
  </basic-layout>

    <text-section sub-title="Algorithms, Bioinformatics, and Computation Theory">
    <p>Chairs:</p>
       <p>Shi-Chun Tsai, National Yang Ming Chiao Tung University, Taiwan</p>
       <p>Mong-Jen Kao, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Cloud Computing and Big Data">
    <p>Chairs:</p>
       <p>Chao-Tung Yang, Tunghai University, Taiwan</p>
       <p>Whai-En Chen, National Ilan University, Taiwan</p>
       <p>Yi-Ping You, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Computer Vision and Image Processing">
    <p>Chairs:</p>
       <p>Chuan-Yu Chang, National Yunlin University of Science and Technology, Taiwan</p>
       <p>Ching-Chun Huang, National Yang Ming Chiao Tung University, Taiwan</p>
       <p>Yu-Lun Liu, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Cryptography and Quantum Computing">
    <p>Chairs:</p>
       <p>Ching-Yi Lai, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Mobile and Wireless Network">
    <p>Chairs:</p>
        <p>Jiann-Liang Chen, National Taiwan University of Science and Technology, Taiwan</p>
        <p>Chi-Yu Li, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Autonomous Driving and UAV">
    <p>Chairs:</p>
        <p>Yi-Ting Chen, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Kuan-Wen Chen, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Wei-Chen Chiu, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="AR/MR and Human Computer Interaction">
    <p>Chairs:</p>
        <p>Liwei Chan, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Yung-Ju Chang, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Computer Architecture, Embedded Systems, SoC, and VLSI/EDA">
    <p>Chairs:</p>
        <p>Tsung-Tai Yeh, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Chun-Feng Wu, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Shuo-Han Chen, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Natural Language Processing and Information Retrieval">
    <p>Chairs:</p>
        <p>An-Zi Yen, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="Cybersecurity Attack, Defense, and Resilience (Cadence)">
    <p>Chairs:</p>
        <p>Chun-Ying Huang, National Yang Ming Chiao Tung University, Taiwan</p>
        <p>Yu-Sung Wu, National Yang Ming Chiao Tung University, Taiwan</p>
    </text-section>

    <text-section sub-title="AI/ML Application">
    <p>Chairs:</p>
        <p>TBD</p>
    </text-section>
      
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
import TextSection from '@/components/TextSection.vue'
//import ComingSoon from '@/components/ComingSoon.vue'

export default {
  components: {
    BasicLayout,
    TextSection,
//    ComingSoon,
  }
}
</script>

