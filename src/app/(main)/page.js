
import FindConsultant from '@/Components/Home/FindConsultant';
import Hero from '@/Components/Home/Hero';
import HomeFAQ from '@/Components/Home/HomeFAQ';
import JoinAsConsultant from '@/Components/Home/JoinAsConsultant ';
import PopulerCountry from '@/Components/Home/PopulerCountry';
import StudentReviews from '@/Components/Home/StudentReviews';
import TopConsultants from '@/Components/Home/TopConsultants';
import React from 'react';

const Page = () => {
    return (
        <div >
            <Hero />
            <TopConsultants />
            <StudentReviews />
            <PopulerCountry />
            <FindConsultant />
            <JoinAsConsultant />
            <HomeFAQ />
        </div>
    );
}

export default Page;
