document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const courseKeyForEmail = (email) => `hoaCourse:${email.trim().toLowerCase()}`;
    const getGradeNumber = (value) => String(value || "").match(/[789]/)?.[0] || "";

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const firstName = document.getElementById("first-name")?.value.trim() || "";
            const lastName = document.getElementById("last-name")?.value.trim() || "";
            const emailInput = document.getElementById("reg-email");
            const email = emailInput?.value.trim() || "";
            const password = document.getElementById("reg-password")?.value || "";
            const grade = getGradeNumber(document.getElementById("grade")?.value);
            const name = `${firstName} ${lastName}`.trim();

            if (!name || !email || !password || !grade) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

            if (!emailInput?.checkValidity()) {
                alert("Vui lòng nhập email hợp lệ!");
                emailInput?.focus();
                return;
            }

            try {
                const usersResponse = await fetch("https://mindx-class-api.vercel.app/api");
                if (!usersResponse.ok) {
                    throw new Error("Không thể kiểm tra email");
                }

                const users = await usersResponse.json();
                const normalizedEmail = email.toLowerCase();
                const emailExists = (Array.isArray(users) ? users : []).some((user) => {
                    const savedEmail = String(user.email || user.name || "").trim().toLowerCase();
                    return savedEmail === normalizedEmail;
                });

                if (emailExists || localStorage.getItem(courseKeyForEmail(email))) {
                    alert("Email này đã được đăng ký. Vui lòng đăng nhập hoặc dùng email khác.");
                    return;
                }

                const response = await fetch("https://mindx-class-api.vercel.app/api", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_class: "JSA17-JSA17",
                        name: email,
                        password: password,
                        grade: grade
                    })
                });

                if (!response.ok) {
                    throw new Error("Không thể tạo tài khoản");
                }

                localStorage.setItem(courseKeyForEmail(email), grade);
                alert("Đã tạo tài khoản thành công!");
                registerForm.reset();
            } catch (error) {
                console.error(error);
                alert("Tạo tài khoản thất bại!");
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.getElementById("email")?.value.trim() || "";
            const password = document.getElementById("password")?.value || "";

            if (!username || !password) {
                alert("Vui lòng nhập email và mật khẩu!");
                return;
            }

            try {
                const response = await fetch("https://mindx-class-api.vercel.app/api");
                const users = await response.json();
                const user = users.find((u) => (u.name === username || u.email === username) && u.password === password);

                if (user) {
                    const grade = getGradeNumber(user.grade) || localStorage.getItem(courseKeyForEmail(username)) || "";
                    localStorage.setItem("loggedInUserEmail", username.trim().toLowerCase());
                    if (grade) {
                        localStorage.setItem("loggedInCourseGrade", grade);
                    } else {
                        localStorage.removeItem("loggedInCourseGrade");
                    }
                    alert("Đăng nhập thành công!");
                    const nextPage = new URLSearchParams(window.location.search).get("next") || "";
                    const nextGrade = nextPage.match(/^hoa_lop_([789])\.html(?:\?v=\d+)?(?:#lesson-01)?$/)?.[1];

                    if (nextGrade && (!grade || nextGrade === grade)) {
                        window.location.href = nextPage;
                    } else {
                        window.location.href = grade ? `Trang_chinh_chu.html?grade=${grade}` : "Trang_chinh_chu.html";
                    }
                } else {
                    alert("Tên người dùng hoặc mật khẩu không đúng!");
                }
            } catch (error) {
                console.error(error);
                alert("Đăng nhập thất bại!");
            }
        });
    }
});