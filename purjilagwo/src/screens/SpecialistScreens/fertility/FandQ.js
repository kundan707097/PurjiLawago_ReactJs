import React from 'react'
import { Box } from '@mui/material';
import FandQComponent from '../../../components/FandQComponent';

const FandQ = () => {

    const question = [
        {
            question: "What factors can affect fertility in both men and women?",
            answer: "Various factors can impact fertility, including age, underlying health conditions such as hormonal imbalances or reproductive disorders, lifestyle factors like diet, exercise, and substance use, and environmental factors such as exposure to toxins or pollutants.",
            panel: "panel1"
        },
        {
            question: "How long should couples try to conceive before seeking fertility evaluation?",
            answer: "Generally, couples under 35 who have been trying to conceive for a year without success should consider seeking a fertility evaluation. For couples over 35, it is recommended to seek evaluation after six months of unsuccessful attempts due to the potential decline in fertility with age.",
            panel: "panel2"
        },
        {
            question: "What are common fertility treatment options available for couples struggling to conceive?",
            answer: "Fertility treatments vary depending on the underlying cause of infertility but may include medications to stimulate ovulation, intrauterine insemination (IUI), in vitro fertilization (IVF), surgery to correct reproductive abnormalities, or assisted reproductive technologies (ART) such as intracytoplasmic sperm injection (ICSI) or donor egg/sperm.",
            panel: "panel3"
        },
        {
            question: "What are some lifestyle changes that can improve fertility outcomes for both partners?",
            answer: " Adopting a healthy lifestyle can positively impact fertility. This includes maintaining a balanced diet rich in nutrients, engaging in regular physical activity, managing stress levels, avoiding excessive alcohol consumption and smoking, limiting exposure to environmental toxins, and maintaining a healthy weight.",
            panel: "panel4"
        },
        {
            question: "What are some common pregnancy complications to be aware of, and when should a pregnant woman seek medical attention?",
            answer: "Pregnancy complications can vary but may include gestational diabetes, preeclampsia, preterm labor, or miscarriage. It's essential for pregnant women to monitor their symptoms closely and seek medical attention if they experience severe abdominal pain, vaginal bleeding, sudden swelling, decreased fetal movement, or signs of preterm labor such as regular contractions before 37 weeks gestation. Regular prenatal care visits with healthcare providers are also crucial for monitoring pregnancy progress and addressing any concerns.",
            panel: "panel5"
        },
    ]


    return (
        <Box sx={{ mx: { xs: 2, lg: 25 }, my: { xs: 2, lg: 10 } }}>
            <FandQComponent question={question} />
        </Box>
    )
}

export default FandQ