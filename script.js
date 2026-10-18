const homeGradeData = {
    7: [
        { no: '01', title: 'Chất và nguyên tử', tag: 'Bài 1', summary: 'Nguyên tử, phân tử, chất và phản ứng hóa học', level: 'Cơ bản', duration: '20 phút', progress: 40 },
        { no: '02', title: 'Phân tử và hợp chất', tag: 'Bài 2', summary: 'Cách các nguyên tử liên kết để tạo thành phân tử', level: 'Cơ bản', duration: '25 phút', progress: 58 },
        { no: '03', title: 'Phản ứng hóa học', tag: 'Bài 3', summary: 'Nhận biết sự biến đổi chất mới trong phản ứng hóa học', level: 'Trung bình', duration: '30 phút', progress: 68 },
        { no: '04', title: 'Oxygen và không khí', tag: 'Bài 4', summary: 'Vai trò của Oxygen (O), sự cháy và khí trong môi trường', level: 'Trung bình', duration: '32 phút', progress: 72 }
    ],
    8: [
        { no: '01', title: 'Oxit và axit', tag: 'Bài 1', summary: 'Nhận biết oxit, axit và ứng dụng trong đời sống', level: 'Cơ bản', duration: '25 phút', progress: 54 },
        { no: '02', title: 'Bazơ và muối', tag: 'Bài 2', summary: 'Tính chất hóa học của bazơ và cách tạo muối', level: 'Trung bình', duration: '28 phút', progress: 63 },
        { no: '03', title: 'Phản ứng trao đổi', tag: 'Bài 3', summary: 'Phương trình phản ứng trao đổi trong dung dịch', level: 'Trung bình', duration: '35 phút', progress: 75 },
        { no: '04', title: 'Kim loại và phi kim', tag: 'Bài 4', summary: 'So sánh tính chất các nguyên tố và hợp chất', level: 'Nâng cao', duration: '36 phút', progress: 70 }
    ],
    9: [
        { no: '01', title: 'Bảng tuần hoàn', tag: 'Bài 1', summary: 'Sắp xếp nguyên tố, chu kỳ và nhóm trong bảng tuần hoàn', level: 'Cơ bản', duration: '30 phút', progress: 68 },
        { no: '02', title: 'Kim loại và hợp chất', tag: 'Bài 2', summary: 'Tính chất và phản ứng của kim loại trong thực tế', level: 'Trung bình', duration: '35 phút', progress: 74 },
        { no: '03', title: 'Hợp chất hữu cơ', tag: 'Bài 3', summary: 'Carbon (C), hydrocarbon và các hợp chất cơ bản', level: 'Nâng cao', duration: '40 phút', progress: 66 },
        { no: '04', title: 'Dung dịch và pH', tag: 'Bài 4', summary: 'Xác định môi trường axit, bazơ và độ pH', level: 'Nâng cao', duration: '42 phút', progress: 78 }
    ]
};

function initHomeGradeUI() {
    const gradeLinks = document.querySelectorAll('.grade-link');
    const classTabs = document.querySelectorAll('.tab-link');
    const gradeContent = document.getElementById('gradeContent');
    const startLearning = document.getElementById('startLearning');
    const accountEmail = localStorage.getItem('loggedInUserEmail');
    const accountGrade = localStorage.getItem('loggedInCourseGrade');
    const isAccountCourseLocked = Boolean(accountEmail && homeGradeData[accountGrade]);
    const requestedGrade = new URLSearchParams(window.location.search).get('grade');
    const initialGrade = isAccountCourseLocked ? accountGrade : homeGradeData[requestedGrade] ? requestedGrade : '7';

    if (isAccountCourseLocked) {
        [...gradeLinks, ...classTabs].forEach((item) => {
            item.hidden = item.dataset.grade !== accountGrade;
        });
    }

    function renderGradeContent(grade) {
        if (!gradeContent) return;

        const lessons = homeGradeData[grade] || homeGradeData[7];
        gradeContent.innerHTML = lessons.map((lesson) => `
            <article class="lesson-card">
                <div class="lesson-card-top">
                    <span class="lesson-no">${lesson.no}</span>
                    <span class="lesson-title">${lesson.title}</span>
                    <span class="lesson-tag">${lesson.tag}</span>
                </div>
                <div class="lesson-summary">
                    <span class="icon-circle">⚗</span>
                    <span>${lesson.summary}</span>
                </div>
                <div class="lesson-meta">
                    <span>${lesson.duration}</span>
                    <span class="lesson-level">${lesson.level}</span>
                </div>
                <div class="progress-bar">
                    <span class="progress-bar-fill" style="width: ${lesson.progress}%;"></span>
                </div>
            </article>
        `).join('');
    }

    function setActiveGrade(grade) {
        gradeLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.grade === grade);
        });

        classTabs.forEach((tab) => {
            tab.classList.toggle('active', tab.dataset.grade === grade);
        });

        if (startLearning) {
            const courseUrl = `hoa_lop_${grade}.html?v=2#lesson-01`;
            startLearning.href = localStorage.getItem('loggedInUserEmail')
                ? courseUrl
                : `Dang_nhap.html?next=${encodeURIComponent(courseUrl)}`;
        }

        renderGradeContent(grade);
    }

    [...gradeLinks, ...classTabs].forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const grade = button.dataset.grade;
            setActiveGrade(grade);
        });
    });

    setActiveGrade(initialGrade);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeGradeUI);
} else {
    initHomeGradeUI();
}
