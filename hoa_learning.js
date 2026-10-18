const gradeData = {
  "7": {
    title: "Hóa lớp 7",
    summary: "Nắm vững chất, nguyên tử, phân tử và phản ứng hóa học cơ bản.",
    lessons: [
      { no: "01", title: "Chất và nguyên tử", tag: "Bài 1", text: "Hiểu khái niệm chất, nguyên tử và phân tử trong đời sống.", progress: 40 },
      { no: "02", title: "Phân tử và hợp chất", tag: "Bài 2", text: "Nhận biết cách các nguyên tử liên kết tạo thành phân tử.", progress: 58 },
      { no: "03", title: "Phản ứng hóa học", tag: "Bài 3", text: "Phân biệt phản ứng hóa học với hiện tượng vật lý đơn giản.", progress: 72 },
      { no: "04", title: "Oxygen và không khí", tag: "Bài 4", text: "Khám phá vai trò của Oxygen (O) trong sự cháy, hô hấp và Iron (Fe) bị gỉ.", progress: 66 }
    ],
    formulas: [
      { name: "Phân tử nước", value: "H₂O" },
      { name: "Oxygen gas", value: "O₂" },
      { name: "Hydrogen gas", value: "H₂" },
      { name: "Khí carbon dioxide", value: "CO₂" }
    ],
    flashcards: [
      { front: "Nguyên tử là gì?", back: "Nguyên tử là hạt nhỏ nhất của nguyên tố hóa học, không thể chia nhỏ hơn bằng phản ứng hóa học thông thường." },
      { front: "Phân tử là gì?", back: "Phân tử là nhóm hai hay nhiều nguyên tử liên kết với nhau và tạo thành một hạt riêng." },
      { front: "Phản ứng hóa học là gì?", back: "Là quá trình biến đổi các chất ban đầu thành các chất mới có tính chất khác nhau." }
    ],
    quiz: [
      {
        question: "Trong phân tử nước H₂O, nguyên tử nào tạo nên thành phần chính?",
        answers: ["Hydrogen (H) và Oxygen (O)", "Sodium (Na) và Chlorine (Cl)", "Carbon (C) và Oxygen (O)", "Iron (Fe) và Sulfur (S)"],
        correct: 0
      },
      {
        question: "Chất nào dưới đây là hợp chất mà em đã học trong bài chất và nguyên tử?",
        answers: ["O₂", "N₂", "CO₂", "Fe"],
        correct: 2
      },
      {
        question: "Khi đốt than trong không khí, hiện tượng xảy ra là:",
        answers: ["Sự hóa tan", "Phản ứng hóa học với Oxygen (O₂) tạo thành khí CO₂", "Sự bay hơi", "Sự đông đặc"],
        correct: 1
      },
      {
        question: "Nguyên tố hóa học gồm các nguyên tử có cùng:",
        answers: ["Số lớp electron", "Số proton trong hạt nhân", "Khối lượng", "Số neutron"],
        correct: 1
      },
      {
        question: "Một phân tử nước H₂O có bao nhiêu nguyên tử Hydrogen (H)?",
        answers: ["1", "2", "3", "4"],
        correct: 1
      },
      {
        question: "Hiện tượng nào sau đây là biến đổi vật lí?",
        answers: ["Nước đá tan thành nước", "Đốt cháy giấy", "Iron (Fe) bị gỉ", "Than cháy trong không khí"],
        correct: 0
      },
      {
        question: "Dấu hiệu quan trọng cho thấy phản ứng hóa học đã xảy ra là gì?",
        answers: ["Chất thay đổi hình dạng", "Chất chuyển động", "Có chất mới được tạo thành", "Vật được làm nóng"],
        correct: 2
      },
      {
        question: "Vai trò nào phù hợp với Oxygen (O₂)?",
        answers: ["Làm tắt mọi đám cháy", "Duy trì sự cháy và sự hô hấp", "Là khí chiếm nhiều nhất trong không khí", "Không tham gia phản ứng hóa học"],
        correct: 1
      },
      {
        question: "Khí chiếm phần lớn thể tích không khí là khí nào?",
        answers: ["Oxygen (O₂)", "Carbon dioxide (CO₂)", "Hydrogen (H₂)", "Nitrogen (N₂)"],
        correct: 3
      },
      {
        question: "Theo định luật bảo toàn khối lượng, tổng khối lượng chất tham gia phản ứng so với sản phẩm như thế nào?",
        answers: ["Luôn nhỏ hơn", "Luôn lớn hơn", "Bằng nhau", "Không thể so sánh"],
        correct: 2
      },
      {
        question: "Dẫn khí CO₂ vào nước vôi trong, hiện tượng thường thấy là gì?",
        answers: ["Nước vôi trong bị vẩn đục", "Có ngọn lửa xanh", "Dung dịch chuyển màu đỏ", "Không có hiện tượng"],
        correct: 0
      },
      {
        question: "Iron (Fe) bị gỉ nhanh hơn khi có mặt đồng thời của yếu tố nào?",
        answers: ["Nitrogen (N₂) và ánh sáng", "Oxygen (O₂) và nước", "Hydrogen (H₂) và muối ăn", "Carbon dioxide (CO₂) và cát"],
        correct: 1
      }
    ]
  },
  "8": {
    title: "Hóa lớp 8",
    summary: "Rèn kỹ năng viết phương trình, nhận biết oxit, axit và bazơ trong hóa học.",
    lessons: [
      { no: "01", title: "Oxit và axit", tag: "Bài 1", text: "Nhận biết oxit, axit và ứng dụng trong đời sống hàng ngày.", progress: 54 },
      { no: "02", title: "Bazơ và muối", tag: "Bài 2", text: "Tìm hiểu tính chất hóa học và cách phân loại dung dịch.", progress: 68 },
      { no: "03", title: "Phản ứng trao đổi", tag: "Bài 3", text: "Thực hành nhận biết và viết phương trình phản ứng trao đổi.", progress: 77 },
      { no: "04", title: "Kim loại và phi kim", tag: "Bài 4", text: "So sánh tính chất của kim loại, phi kim và hợp chất của chúng.", progress: 61 }
    ],
    formulas: [
      { name: "Axit sunfuric", value: "H₂SO₄" },
      { name: "Natri hiđroxit", value: "NaOH" },
      { name: "Đường saccarozơ", value: "C₁₂H₂₂O₁₁" },
      { name: "Sắt(III) oxit", value: "Fe₂O₃" }
    ],
    flashcards: [
      { front: "Oxit là gì?", back: "Là hợp chất tạo bởi hai nguyên tố, trong đó có một nguyên tố là Oxygen (O)." },
      { front: "Axit có tính chất gì?", back: "Làm đổi màu giấy quỳ tím thành đỏ và có thể phản ứng với kim loại, bazơ, oxit bazơ." },
      { front: "Phản ứng trao đổi là gì?", back: "Là phản ứng hóa học giữa hai hợp chất trong dung dịch tạo ra chất mới và thường có chất kết tủa hoặc khí bay ra." }
    ],
    quiz: [
      {
        question: "Dung dịch NaOH làm giấy quỳ tím chuyển sang màu nào?",
        answers: ["Đỏ", "Xanh", "Tím", "Vàng"],
        correct: 1
      },
      {
        question: "Axit sunfuric có công thức là:",
        answers: ["HCl", "HNO₃", "H₂SO₄", "H₂CO₃"],
        correct: 2
      },
      {
        question: "Khi cho axit clohidric tác dụng với Zinc (Zn), sản phẩm khí thường sinh ra là:",
        answers: ["Oxygen (O₂)", "Hydrogen (H₂)", "Khí amoniac", "Carbon dioxide (CO₂)"],
        correct: 1
      },
      {
        question: "Oxit là hợp chất gồm Oxygen (O) liên kết với:",
        answers: ["Chỉ Hydrogen (H)", "Chỉ kim loại", "Một nguyên tố khác", "Một dung dịch"],
        correct: 2
      },
      {
        question: "Chất nào sau đây là axit?",
        answers: ["NaOH", "HCl", "CaO", "NaCl"],
        correct: 1
      },
      {
        question: "Axit làm giấy quỳ tím chuyển sang màu gì?",
        answers: ["Đỏ", "Xanh", "Vàng", "Không đổi màu"],
        correct: 0
      },
      {
        question: "Phản ứng giữa axit và bazơ thường tạo thành:",
        answers: ["Kim loại và Oxygen (O₂)", "Axit mới và Hydrogen (H₂)", "Oxit và Hydrogen (H₂)", "Muối và nước"],
        correct: 3
      },
      {
        question: "Zinc (Zn) tác dụng với dung dịch HCl tạo ra khí nào?",
        answers: ["Oxygen (O₂)", "Hydrogen (H₂)", "Carbon dioxide (CO₂)", "Nitrogen (N₂)"],
        correct: 1
      },
      {
        question: "Sản phẩm của phản ứng CuO + H₂SO₄ là gì?",
        answers: ["Cu và H₂O", "CuSO₄ và H₂", "CuSO₄ và H₂O", "CuO và SO₂"],
        correct: 2
      },
      {
        question: "Cặp dung dịch nào có thể tạo kết tủa khi trộn với nhau?",
        answers: ["AgNO₃ và NaCl", "NaCl và KNO₃", "HCl và NaNO₃", "NaOH và KOH"],
        correct: 0
      },
      {
        question: "Phương trình đúng khi Zinc (Zn) tác dụng với axit clohidric là:",
        answers: ["Zn + HCl → ZnCl + H₂", "Zn + 2HCl → ZnCl₂ + H₂", "2Zn + HCl → Zn₂Cl + H₂", "Zn + HCl → ZnH + Cl₂"],
        correct: 1
      },
      {
        question: "Axit tác dụng với một số kim loại đứng trước Hydrogen (H) thường tạo ra:",
        answers: ["Muối và Oxygen (O₂)", "Bazơ và nước", "Muối và Hydrogen (H₂)", "Oxit và Carbon dioxide (CO₂)"],
        correct: 2
      }
    ]
  },
  "9": {
    title: "Hóa lớp 9",
    summary: "Tăng cường kiến thức về bảng tuần hoàn, kim loại, phi kim và hóa học hữu cơ.",
    lessons: [
      { no: "01", title: "Bảng tuần hoàn", tag: "Bài 1", text: "Nắm cách sắp xếp nguyên tố, chu kỳ và nhóm trong bảng tuần hoàn.", progress: 73 },
      { no: "02", title: "Kim loại và hợp chất", tag: "Bài 2", text: "Phân tích tính chất và phản ứng của kim loại trong thực tiễn.", progress: 80 },
      { no: "03", title: "Hợp chất hữu cơ", tag: "Bài 3", text: "Tìm hiểu Carbon (C), hydrocarbon và tính chất cơ bản của chúng.", progress: 64 },
      { no: "04", title: "Dung dịch và pH", tag: "Bài 4", text: "Hiểu cách xác định tính axit, bazơ và độ pH của dung dịch.", progress: 69 }
    ],
    formulas: [
      { name: "Metan", value: "CH₄" },
      { name: "Etilen", value: "C₂H₄" },
      { name: "Axit nitric", value: "HNO₃" },
      { name: "Canxi cacbonat", value: "CaCO₃" }
    ],
    flashcards: [
      { front: "Bảng tuần hoàn được sắp xếp theo nguyên tắc nào?", back: "Theo tăng dần điện tích hạt nhân nguyên tử của các nguyên tố." },
      { front: "Kim loại có tính chất gì đặc trưng?", back: "Dẫn điện, dẫn nhiệt, có ánh kim, có thể dát mỏng và kéo sợi." },
      { front: "Hydrocarbon là gì?", back: "Là hợp chất hữu cơ chỉ gồm Carbon (C) và Hydrogen (H), ví dụ metan, etilen, axetilen." }
    ],
    quiz: [
      {
        question: "Trong bảng tuần hoàn, nguyên tố Fluorine (F) nằm ở nhóm nào?",
        answers: ["Nhóm IA", "Nhóm VIIA", "Nhóm IVA", "Nhóm VIIIA"],
        correct: 1
      },
      {
        question: "Công thức của metan là:",
        answers: ["CH₄", "C₂H₆", "C₂H₄", "CO₂"],
        correct: 0
      },
      {
        question: "Trong dung dịch axit, giấy quỳ tím chuyển thành màu nào?",
        answers: ["Xanh", "Đỏ", "Vàng", "Tím"],
        correct: 1
      },
      {
        question: "Tính chất vật lí đặc trưng của nhiều kim loại là gì?",
        answers: ["Dẫn điện và dẫn nhiệt", "Tan hoàn toàn trong nước", "Không có ánh kim", "Dễ bay hơi ở nhiệt độ thường"],
        correct: 0
      },
      {
        question: "Aluminium (Al) tác dụng với khí Oxygen (O₂) tạo thành chất nào?",
        answers: ["AlCl₃", "Al₂O₃", "Al(OH)₃", "Al₂S₃"],
        correct: 1
      },
      {
        question: "Zinc (Zn) tác dụng với axit clohidric tạo thành muối nào?",
        answers: ["ZnSO₄", "ZnCO₃", "ZnO", "ZnCl₂"],
        correct: 3
      },
      {
        question: "Hydrocarbon là hợp chất chỉ chứa những nguyên tố nào?",
        answers: ["Carbon (C) và Hydrogen (H)", "Carbon (C) và Oxygen (O)", "Hydrogen (H) và Oxygen (O)", "Carbon (C), Hydrogen (H) và Oxygen (O)"],
        correct: 0
      },
      {
        question: "Công thức phân tử của etilen là gì?",
        answers: ["CH₄", "C₂H₄", "C₂H₆", "C₂H₂"],
        correct: 1
      },
      {
        question: "Muối cacbonat tác dụng với axit thường giải phóng khí nào?",
        answers: ["Oxygen (O₂)", "Hydrogen (H₂)", "Carbon dioxide (CO₂)", "Nitrogen (N₂)"],
        correct: 2
      },
      {
        question: "Dung dịch có pH nhỏ hơn 7 thường có môi trường gì?",
        answers: ["Axit", "Bazơ", "Trung tính", "Không xác định"],
        correct: 0
      },
      {
        question: "Fluorine (F) thuộc nhóm nào trong bảng tuần hoàn?",
        answers: ["Nhóm IA", "Nhóm VIIA", "Nhóm IVA", "Nhóm VIIIA"],
        correct: 1
      },
      {
        question: "Đốt cháy hoàn toàn metan trong Oxygen (O₂) tạo thành sản phẩm nào?",
        answers: ["CO và H₂", "C và H₂O", "CH₃OH và O₂", "CO₂ và H₂O"],
        correct: 3
      }
    ]
  }
};

const grade = document.body.dataset.grade || "7";
const data = gradeData[grade] || gradeData["7"];
const additionalQuizRows = window.additionalQuizBank && window.additionalQuizBank[grade];
if (!additionalQuizRows) {
  throw new Error(`Không tìm thấy ngân hàng câu hỏi cho lớp ${grade}.`);
}

const additionalQuiz = additionalQuizRows.trim().split(/\r?\n/).map((row, index) => {
  const fields = row.split("|").map((field) => field.trim());
  if (fields.length !== 6 || fields.some((field) => !field)) {
    throw new Error(`Dữ liệu quiz lớp ${grade} không hợp lệ ở câu bổ sung ${index + 1}.`);
  }

  const [question, correctAnswer, ...answerFields] = fields;
  const correctIndex = (Number(answerFields.pop()) + index) % 4;
  if (!Number.isInteger(correctIndex)) {
    throw new Error(`Vị trí đáp án đúng không hợp lệ ở quiz lớp ${grade}, câu ${index + 1}.`);
  }

  const answers = answerFields;
  answers.splice(correctIndex, 0, correctAnswer);
  return { question, answers, correct: correctIndex };
});

data.quiz.push(...additionalQuiz);
if (data.quiz.length !== 67) {
  throw new Error(`Quiz lớp ${grade} cần có 67 câu, hiện có ${data.quiz.length}.`);
}

const quizQuestionsPerRound = 20;
let quizQuestions = [];

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2000);
}

function renderLessons() {
  const target = document.getElementById("lessonList");
  if (!target) return;

  target.innerHTML = data.lessons.map((lesson) => `
    <article class="lesson-card" data-title="${lesson.title}">
      <div class="lesson-top">
        <span class="lesson-no">${lesson.no}</span>
        <span class="lesson-tag">${lesson.tag}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p>${lesson.text}</p>
      <div class="lesson-meta">
        <span>${lesson.progress}% hoàn thành</span>
        <span>Học nhanh</span>
      </div>
      <div class="progress-track">
        <span class="progress-fill" style="width:${lesson.progress}%"></span>
      </div>
    </article>
  `).join("");

  const cards = target.querySelectorAll(".lesson-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("highlight"));
      card.classList.add("highlight");
      showToast(`Đang luyện: ${card.dataset.title}`);
    });
  });

}

function renderFlashcards() {
  const target = document.getElementById("flashcardWrap");
  if (!target) return;

  target.innerHTML = data.flashcards.map((item, index) => `
    <div class="flashcard" data-index="${index}">
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <strong>Thẻ ${index + 1}</strong>
          <p>${item.front}</p>
        </div>
        <div class="flashcard-face flashcard-back">
          <strong>Gợi ý</strong>
          <p>${item.back}</p>
        </div>
      </div>
    </div>
  `).join("");

  target.querySelectorAll(".flashcard").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
}

function renderFormulas() {
  const target = document.getElementById("formulaList");
  if (!target) return;

  target.innerHTML = data.formulas.map((item) => `
    <article class="formula-card">
      <h3>${item.name}</h3>
      <span class="formula-box">${item.value}</span>
    </article>
  `).join("");
}

let quizIndex = 0;
let score = 0;

function prepareQuizRound() {
  const shuffledQuestions = [...data.quiz];
  for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledQuestions[index], shuffledQuestions[randomIndex]] = [
      shuffledQuestions[randomIndex],
      shuffledQuestions[index]
    ];
  }

  quizQuestions = shuffledQuestions.slice(0, quizQuestionsPerRound);
  quizIndex = 0;
  score = 0;
}

function renderQuiz() {
  const questionText = document.getElementById("questionText");
  const answerList = document.getElementById("answerList");
  const statusText = document.getElementById("quizStatus");
  const nextBtn = document.getElementById("nextQuestion");

  if (!questionText || !answerList || !statusText || !nextBtn) return;

  const current = quizQuestions[quizIndex];
  const shuffledAnswers = current.answers.map((answer, index) => ({
    answer,
    isCorrect: index === current.correct
  }));
  for (let index = shuffledAnswers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledAnswers[index], shuffledAnswers[randomIndex]] = [
      shuffledAnswers[randomIndex],
      shuffledAnswers[index]
    ];
  }
  const correctIndex = shuffledAnswers.findIndex((answer) => answer.isCorrect);
  const progressLabel = `Câu ${quizIndex + 1}/${quizQuestions.length}`;
  questionText.textContent = current.question;
  statusText.textContent = progressLabel;
  answerList.innerHTML = shuffledAnswers.map((item, index) => `
    <button class="answer-btn" data-index="${index}" type="button">${item.answer}</button>
  `).join("");

  nextBtn.textContent = quizIndex === quizQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo";
  nextBtn.disabled = true;

  answerList.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedIndex = Number(button.dataset.index);
      const isCorrect = selectedIndex === correctIndex;
      if (isCorrect) score += 1;

      answerList.querySelectorAll(".answer-btn").forEach((item) => {
        const itemIndex = Number(item.dataset.index);
        item.disabled = true;
        if (itemIndex === correctIndex) item.classList.add("correct");
        if (itemIndex === selectedIndex && !isCorrect) item.classList.add("incorrect");
      });

      nextBtn.disabled = false;
    });
  });
}

function completeQuiz() {
  const questionText = document.getElementById("questionText");
  const answerList = document.getElementById("answerList");
  const statusText = document.getElementById("quizStatus");
  const nextBtn = document.getElementById("nextQuestion");

  if (!questionText || !answerList || !statusText || !nextBtn) return;

  const percent = Math.round((score / quizQuestions.length) * 100);
  questionText.textContent = `Bạn đạt ${score}/${quizQuestions.length} điểm (${percent}%)`;
  statusText.textContent = "Hoàn thành bài kiểm tra";
  answerList.innerHTML = `
    <div class="flashcard-face">
      <strong>Kết quả</strong>
      <p>${percent >= 70 ? "Tuyệt vời! Bạn đang nắm vững kiến thức." : percent >= 40 ? "Khá tốt! Hãy ôn lại một chút nữa." : "Cần ôn luyện thêm. Hãy xem lại các thẻ ghi nhớ."}</p>
    </div>
  `;
  nextBtn.textContent = "Làm lại";
  nextBtn.disabled = false;
}

function bindQuizActions() {
  const nextBtn = document.getElementById("nextQuestion");
  const restartBtn = document.getElementById("restartQuiz");
  if (!nextBtn || !restartBtn) return;

  restartBtn.addEventListener("click", () => {
    prepareQuizRound();
    renderQuiz();
  });

  nextBtn.onclick = () => {
    if (nextBtn.textContent === "Làm lại") {
      prepareQuizRound();
      renderQuiz();
      return;
    }

    if (quizIndex < quizQuestions.length - 1) {
      quizIndex += 1;
      renderQuiz();
      return;
    }

    completeQuiz();
  };
}

function bindSearch() {
  const searchInput = document.getElementById("searchInput");
  const target = document.getElementById("lessonList");
  if (!searchInput || !target) return;

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value.trim().toLowerCase();
    const cards = target.querySelectorAll(".lesson-card");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

function bindRandomLesson() {
  const trigger = document.getElementById("randomLesson");
  const target = document.getElementById("lessonList");
  if (!trigger || !target) return;

  trigger.addEventListener("click", () => {
    const cards = Array.from(target.querySelectorAll(".lesson-card"));
    const visible = cards.filter((card) => card.style.display !== "none");
    const pick = (visible.length ? visible : cards)[Math.floor(Math.random() * (visible.length || cards.length))];
    cards.forEach((card) => card.classList.remove("highlight"));
    if (pick) {
      pick.classList.add("highlight");
      showToast(`Gợi ý học: ${pick.dataset.title}`);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLessons();
  renderFlashcards();
  renderFormulas();
  bindSearch();
  bindRandomLesson();
  prepareQuizRound();
  bindQuizActions();
  renderQuiz();
});
