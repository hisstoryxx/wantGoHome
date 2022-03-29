import React,{useRef,useState} from 'react';
import "./publication.scss";

import BarImgP from "../../components/img/design_bar.png"


export default function Publication() {
  const jourRef=useRef(null);
  const confRef=useRef(null);
  const patRef=useRef(null);
  const bookRef=useRef(null);

  const scrollHeight=162;
 
  const [select,setSelect]=useState("Journal");
  const onJourClick=()=>{
    jourRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Journals')
  }
  const onConfClick=()=>{
    confRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Conferences')
  }
  const onPatClick=()=>{
    patRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  
    setSelect('Patents')
  }
  const onBookClick=()=>{
    bookRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    
    setSelect('Books')
  }

 


  return(
    <div className="publication">
        <div className="pub-left">
            <div className="slider">
            
              <div className="pub-menuTitle">
                Publication
                <div className="title_border">
                  <div className="title_left">
                  </div>
                  <div className="title_right">
                  </div>
                 </div>  
              </div>
              <div className="pubContent">
                  <ul className="pub-list">
                    <li className="pub-item" onClick={onJourClick} style={{color: select === 'Journals' ? 'black' : 'grey'}}>Journals</li>
                    <li className="pub-item" onClick={onConfClick} style={{color: select === 'Conferences' ? 'black' : 'grey'}}>Conferences</li>
                    <li className="pub-item" onClick={onPatClick} style={{color: select === 'Patents' ? 'black' : 'grey'}}>Patents</li>
                    <li className="pub-item" onClick={onBookClick} style={{color: select === 'Books' ? 'black' : 'grey'}}>Books</li>
                  </ul>
              </div>
              </div>
            
         </div>

        <div className="pub-right">
            <div className="pub-header" >
              <div className="pub-title">
                Publication
              </div>
            </div>
            
            <div className="international-journal" ref={jourRef}>
              | International Journals |
            </div>

            <div className="journal-content">
            
            <span className="conl">Ko, S., Jang, W. S., Jeong, J. H., Ahn, J. W., Kim, Y. H., Kim, S., ... & Chung, S. (2021). (−)-Gallocatechin gallate from green tea rescues cognitive impairment through restoring hippocampal silent synapses in post-menopausal depression. Scientific reports, 11(1), 1-20. </span>
            <span className="conl">Kang, J., Han, K., Kim, K. S., Jang, W. S., Kim, M. J., & Yoo, Y. (2020). 3D microcalcification detection using a color Doppler twinkling artifact with optimized transmit conditions: Preliminary results. Medical physics, 47(12), 6171-6178.</span>
            <span className="conl">Song, I., Yoon, J., Kang, J., Kim, M., Jang, W. S., Shin, N. Y., & Yoo, Y. (2019). Design and implementation of a new wireless carotid neckband doppler system with wearable ultrasound sensors: preliminary results. Applied Sciences, 9(11), 2202. </span>
            <span className="conl">Jinbum Kang, Won Seuk Jang and Yangmo Yoo. High PRF ultrafast sliding compound doppler imaging: fully qualitative and quantitative analysis of blood flow (Physics in Medicine & Biology, Vol 63, No 4, 45,004~45,020, Feb 2018)  </span>
            <span className="conl">Kim, J. Y., Yoo, S. K., Jang, W. S., Park, B. E., Park, W., & Kim, K. D. (2017). Tooth segmentation using gaussian mixture model and genetic algorithm. Journal of Medical Imaging and Health Informatics, 7(6), 1271-1276. </span>
            <span className="conl">Park, B. E., Jang, W. S., & Yoo, S. K. (2016). Texture analysis of supraspinatus ultrasound image for computer aided diagnostic system. Healthcare informatics research, 22(4), 299-304. </span>
            <span className="conl">Son, T., Yoon, H. J., Lee, S., Jang, W. S., Jung, B., & Kim, W. U. (2014). Continuous monitoring of arthritis in animal models using optical imaging modalities. Journal of Biomedical Optics, 19(10), 106010.  </span>
            <span className="conl">Park, Y. O., Hong, D. K., Cho, H. S., Je, U. K., Oh, J. E., Lee, M. S., ... & Koo, Y. S. (2013). Digital tomosynthesis (DTS) with a Circular X-ray tube: Its image reconstruction based on total-variation minimization and the image characteristics. Journal of the Korean Physical Society, 63(5), 1060-1065.</span>
          
            </div>
            
            <div className="domestic-journal">
              | Domestic Journals |

            </div>

            <div className="journal-content">
            
            <span className="conl">Kim, Y. R., Yu, W. J., Park, H. J., & Jang, W. S. (2019). A Study on Safety, Performance and Clinical effectiveness Test Guideline of Versatile Ophthalmic Laser System. Journal of Biomedical Engineering Research, 40(6), 250–259. </span>
              <span className="conl">Kim, Y. R., Jeon, S. W., & Jang, W. S. (2019). A Study on Development of Guideline for Clinical Trial Standard Protocol of Endoscopic Marking System . Regulatory Research on Food, Drug and Cosmetic, 14(1), 43-49. </span>
              <span className="conl">Kim, H., Kim, B., Lee, J., Jang, W. S., & Yoo, S. K. (2017). Performance Improvement of Convolutional Neural Network for Pulmonary Nodule Detection. Journal of Biomedical Engineering Research, 38(5), 237–241. </span>
              <span className="conl">Lim, H. J., Yoo, S. K., & Jang, W. S. (2017). Analysis of Galvanic Skin Response Signal for High-Arousal Negative Emotion Using Discrete Wavelet Transform. Science of Emotion & Sensibility, 20(3), 13-22. </span>
              <span className="conl">Park, B. E., Jang, W. S., & Yoo, S. K.(2017).Texture analysis of Thyroid Nodules in Ultrasound Image for Computer Aided Diagnostic system.Journal of Korea Multimedia Society,20(1),43-50.  </span>
              <span className="conl">Oh, K. T, Shin, C, S, Kim, J. M., Jang, W. S., & Yoo, S, K. (2016). Affecting Factor Analysis for Respiration Rate Measurement Using Depth Camera. Science of Emotion & Sensibility, 19(3), 81-88. </span>
              <span className="conl">Kim, H. J., Kim, B. N., Jang, W. S., & Yoo, S. K. (2016). Random Forest Based Abnormal ECG Dichotomization using Linear and Nonlinear Feature Extraction. Journal of Biomedical Engineering Research, 37(2), 61-67. </span>
              <span className="conl">Kim, B. N., Kim, Y. H., Kim, L. H., Kwon, G. H., Jang, W. S., & Yoo, S. K. (2016). Connectivity Analysis Between EEG and EMG Signals by the Status of Njiovement Intention. Korean Journal of the Science of Emotion & Sensibility, Vol.19(1) : 31-38.</span>
              <span className="conl">Oh, K. T., Yoo, S. K., & Jang, W. S. (2015). Distance Regularized Level Set Evolution using method for Liver Tumor Segmentation.  Journal of the Korean Society of Imaging Informatics in Medicine, Vol.21 : 6-8.  </span>
              <span className="conl">Bag, B., Yoo, S., & Jang, W. (2015). Design of Optimized Ultrasound Clinical Work-Flow; Usability Perspective. Journal of International Society for Simulation Surgery, 2(1), 40-42. </span>
              <span className="conl">Jang, W. S., Kim, N. H., & Jeon, D. K. (2010). A Development of Physio-Module for Echocardiography. Journal of the Institute of Electronics Engineers of Korea. SC, 47(4), 21-29.  </span>
              <span className="conl">Jang, W. S., Kim, N. H., Kim, E. S., & Jeon, D. K. (2010). A Design of Real-Time QRS Detection in Physio-Module for Echocardiography. Journal of the Institute of Electronics Engineers of Korea. SC, 47(3), 40-47.  </span>
              <span className="conl">Jang, W. S., Kim, S. M., Kang, S. H., Kim, N. H.(2009).A Study of Relationship Between EMG Activation of Thigh Muscle(Rectus Femoris, Vastus Iateralis Muscles) and Knee Angle During Bicycle Exercise.The Institute of Electronics Engineers of Korea - System and Control,46(4),77-83.</span>
             
           </div>
           
            <div className="international-conference" ref={confRef}>
              | International Conferences |

            </div>

             <div className="conference-content">

              <span className="conl">Jeong, J., Park, S., & Jang, W. (2022, Mar). Human Factors Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System. International Symposium on Human Factors and Ergonomics in Health Care.</span>
              <span className="conl">Choi, H., Park, S., & Jang, W. (2022, Mar). Human Factors Analysis to Design of User Interface for Multi-Purpose Neonatal Incubator. International Symposium on Human Factors and Ergonomics in Health Care.</span>
              <span className="conl">Jeong, J., Park, S., & Jang, W. (2021, Nov). Applying Human Factor Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System. International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics.</span>
              <span className="conl">Choi, H., Park, S., & Jang, W. (2021, Nov). User needs analysis for multi-purpose smart neonatal incubator, International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics. </span>
              <span className="conl">Choi, J., Park, S., & Jang, W. (2021, June). Usability Testing of Ultrasonic Surgical System for Lower Eyelid Fat Removal. In Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care (Vol. 10, No. 1, pp. 251-256). Sage CA: Los Angeles, CA: SAGE Publications. </span>
              <span className="conl">Park, S., Oh, H., choi, J., & Jang, W. (2020, September). A Design of Mobile Application for Ultrasound Bladder Monitoring System Based on Usability Engineering. In Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care (Vol. 9, No. 1, pp. 177-180). Sage CA: Los Angeles, CA: SAGE Publications.</span>
            </div>
          

            <div className="domestic-conference">
              | Domestic Conferences |
            </div>
            <div className="conference-content">

            <span className="conl">Choi, C. R., & Jang, W. S. Design for prediction of Preterm using Preprocessing and CNN-LSTM Network, The Institute of Electronics and Information Engineers Summer Annual Conference of IEIE, 2021</span>
            <span className="conl">Choi, C. R., Jung, Y. J., Kim, Y. H., Choi, J. W., Park, S. E., Kim, Y. R., & Jang, W. S. Analysis of Uterine Contraction Using K-means algorithm, The Institute of Electronics and Information Engineers Summer Annual Conference of IEIE, 2020, GEP-672 </span>
            <span className="conl">Choi, C. R., Jang, W. S., Jung, Y. J., & Kim, Y. H. Extraction Parameter of Non-Contraction Interval using Unsupervised Learning for Predicting Preterm Birth, The Korean Society Of Perinatology, Fall Conference, 2020, 20-3312 </span>
            <span className="conl" style={{color:'red'}}>Park. S. E., Oh, H. K., Lim, I. S., & Jang, W. S. 초음파 방광모니터링 시스템의 모바일 어플리케이션 설계, The Korean Society of Medical & Biological Engineering, Spring Conference 2019, 2-22 </span>
            <span className="conl">Choi, C. R., Jung, Y. J., Kim, Y. H., & Jang, W. S. Simulation and Analysis of Pattern Recognition Neural Network Algorithm for Detection of High risk Uterine Contractions based on Electrohysterogram Frequency analysis, The Korean Society of Medical & Biological Engineering, Fall Conference 2019, PS2-01 </span>
            <span className="conl">Jang, I. J., Choi, H. W., Kang, D. J., Choi C. R., Jang, W. S., Jung Y. J., & Kim, Y. H. Development of Wireless Fetal Monitoring System based on Uterine EMG and Analysis of Uterine Contraction, The Korean Society Of Perinatology, Fall Conference, 2019 - 135</span>
      
            </div>
            

            <div className="patent" ref={patRef}>
              | Patents |
            </div>

            <div className="patent-content">
                <span className="conl"style={{color:'red'}}>Kim, Y. H., Jang, W. S.,  Kim, Y. H., "배터리 소모 감소 기능이 구비된 산모 자궁수축도 검사장치", 10-2020-0187801 (2020. 12. 30) </span>
                <span className="conl"style={{color:'red'}}>Kim, Y. H., Jang, W. S.,  Kim, Y. H., "산모 자궁수축도 검사장치", 10-2020-0187800 (2020. 12. 30) </span>
                <span className="conl">Jang, W. S., Park, S. E., Oh, H. K, "Positioning optimizer device and process of patch-type ultrasonic sensors for mobile-based bladder monitoring", PCT/KR2020/016186 (2020. 11. 17) </span>
                <span className="conl">Jang, W. S., Park, S. E., Oh, H. K, "Positioning optimizer device and process of patch-type ultrasonic sensors for mobile-based bladder monitoring", 10-2019-0148244 (2019. 11. 19) </span>
                <span className="conl">Jang, W. S., Park, S. E., Oh, H. K,"Bladder monitoring healthcare system and bladder monitoring process", 10-2018-0173498 (2018. 12. 31)</span>
                <span className="conl">Jang, W. S., Yoo, S. K., Kim, B. N., "Measures to classify pain using pulse waves and heart rate variation", 10-2018-0100372 (2018. 8. 27) </span>
                <span className="conl">Jang, W. S., Yoo, S. K., Oh, K. T., Kim, B. N., Kim, H. W., "Application processes and UX/UI systems for managing and enhancing urinary disorders", 10-2017-0184169 (2017. 12. 29)</span>
                <span className="conl">Jang, W. S., Yoo, S. K., Oh, K. T., "Devices and methods for displaying ultrasonic images", 10-2017-0163456 (2017. 11. 30)</span>
                <span className="conl">Jang, W. S., Yoo, S. K., Kim, B. N., "Measures to classify pain using pulse waves and heart rate variation", 10-2017-0143053 (2017. 10. 31) </span>
                <span className="conl">Jang, W. S., Yoo, S. K., Kwon, J. H., Kim, H. W., "Ways to adjust the position of the selection point in the ultrasonic image and its device", 10-2017-0055510 (2017. 4. 28) </span>
                <span className="conl">Jang, W. S., Yoo, S. K., Oh, K. T., "Ways to control wireless ultrasound images based on user input using hardware and graphic interfaces and its device", PCT/KR2017/004173 (2017. 4. 19)</span>
                <span className="conl">Jang, W. S., Yoo, S. K., Oh, K. T., "Ways to control wireless ultrasound images based on user input using hardware and graphic interfaces and its device", 10-2016-0066725 (2016. 5. 30) </span>
                <span className="conl">Jang, W. S., Yoo, S. K., Oh, K. T., "Ways to control ultrasonic images based on graphic interfaces by ultrasonic image mode and its device", 10-2016-0066737 (2016. 5. 30)</span>
                <span className="conl">Kim, H. J., Jang, W. S., Lee, D. H., Kim, D. H., Seo, K. E., Kim, D. H., Lee, Y. J., Choi, S. H., Lee, H. H., "Radiography using radiation shielding and radiation shielding devices used in the Tomosynsis system ", 10-2013-0169303 (2013. 12. 31)</span>

            </div>

            <div className="book" ref={bookRef}>
              | Books |
            </div>

            <div className="book-content">
              <span className="conl">Kuh, S. U., Jang, W. S., Kim. K. B., Kim, K. S., "Wearable Technology in Medicine and Health Care " (2021.7) </span>
              <span className="conl">Kim. K. B., Jang, W. S. "Design of Digital Healthcare System" (2021. 4)</span>
              <span className="conl">Lee, H., Jang, W. S., "Medical image processing and its applications" (2020. 7) </span>
              <span className="conl">Yonsei University College of Medicine, Kuh, S. U., Koo, K. C., Kwon, B. J., Kim, S. J., Kim, S. H., Kim, J. E., Roh, M. R., Park, J. S., Park, J. H., Yoon, Y. H., Yoon, I. S., Lee, B. K., Lee, S. K., Lee, I. J., Lim, J. Y., Jang, W. S.,  Jeong, H. K., Cho, H. B., Huh, J. K., "Medical devices and clinical medicine" (2019. 12) </span>
              <span className="conl">Kuh, S. U., Jang, W. S.,  "Design of Biomedical Devices and Systems 4th edition" (2018. 11) </span>
              <span className="conl">Kuh, S. U., Jang, W. S.,  "MEDICAL DEVICES QUALITY MANAGEMENT SYSTEM : MDSAP: Medical Device Single Audit Program (2018. 10)</span>
              
            </div>
        </div>
        <img className="bar-rightcd" src={BarImgP} alt="" />
      </div>

  )

}

