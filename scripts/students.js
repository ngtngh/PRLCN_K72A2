const students = {
    "001": { "stt": "01", "name": "Nguyen Van A", "dob": "01/01/2000", "points": "0", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"" },
    "002": { "stt": "02", "name": "Tran Thi B", "dob": "02/02/2001", "points": "10", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"" },
    "003": { "stt": "03", "name": "Le Van C", "dob": "03/03/2002", "points": "10", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"\n3. Hoạt động ba" },
    "725101074": { "stt": "11", "name": "Bùi Hương Giang", "dob": "04/10/2004", "points": "84", "hd": "1. Đánh giá giảng viên môn chung\n2. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Tham gia Nghị quyết Đại hội Đại biểu toàn quốc lần thứ XI\n4. Đánh giá giảng viên môn chuyên ngành" },
    "725101076": { "stt": "12", "name": "Nguyễn Hương Giang", "dob": "14/01/2004", "points": "94.5", "hd": "1. Thành viên CLB TnT ( Trưởng ban Sự kiện )\n2. Phó BTC Hội nghị Sinh viên nghiên cứu khoa học\n3. Đánh giá giảng viên môn chung\n4. Đánh giá giảng viên môn chuyên ngành\n5. Tham gia cuộc thi Eco Vision: Design for Future đạt giải 3\n6. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n7. Ban tổ chức Xuân an lành ( Thành viên ban nội dung )\n8. Hiến máu ( hiến tiểu cầu 2 lần )" },
    "725101077": { "stt": "13", "name": "Trần Quỳnh Giang", "dob": "27/01/2004", "points": "83", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. " },
    "725101078": { "stt": "14", "name": "Trần Thị Hà Giang", "dob": "18/08/2004", "points": "86.5", "hd": "1. Đánh giá giảng viên môn chung \n2. Đánh giá giảng viên môn chuyên ngành\n3. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n4. Tham gia cuộc thi Chính luận về bảo vệ nền tảng tư tưởng của Đảng\n5. Tham gia Hội thao sinh viên khoa Toán\n6. GCN tích cực tham gia chương trình \"Thắp nến tri ân\" năm 2024" },
    "725101079": { "stt": "15", "name": "Trần Thị Quỳnh Giang", "dob": "16/02/2004", "points": "83", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành" },
    "725101080": { "stt": "16", "name": "Xa Trà Giang", "dob": "15/03/2004", "points": "84.5", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. Thành viên CLB TnT ( Thành viên ban Sự kiện )" },
    "725101082": { "stt": "17", "name": "Đào Thu Hà", "dob": "08/10/2004", "points": "87.5", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n4. Tham gia Cuộc thi Rung chuông vàng: Ánh sáng soi đường - Tiếp bước ba sẵn sàng\n5. GPA kì 2 đạt giỏi\n6. Hiến máu" },
    "725101083": { "stt": "18", "name": "Đinh Thu Hà", "dob": "24/10/2003", "points": "87", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. GPA kì 2 đạt giỏi\n4. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n5. Hiến máu" },
    "725101085": { "stt": "19", "name": "Phạm Thị Ngân Hà", "dob": "12/02/2004", "points": "86.5", "hd": "1. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n2. Tham gia cuộc thi tìm hiểu về Đoàn Thanh niên Cộng sản HCM\n3. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin\n4. Đánh giá giảng viên môn chung\n5. Đánh giá giảng viên môn chuyên ngành\n6. GPA kì 2 xuất sắc" },
    "725101086": { "stt": "20", "name": "Vũ Thanh Hà", "dob": "20/05/2004", "points": "86", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. GPA kì 2 xuất sắc\n4. Tham gia Nghị quyết Đại hội Đại biểu toàn quốc lần thứ XI\n5. Khảo sát lấy ý kiến về phiếu rèn luyện mới\n6. Tham gia Cuộc thi Rung chuông vàng: Ánh sáng soi đường - Tiếp bước ba sẵn sàng" },
    "725101119": { "stt": "51", "name": "Nguyễn Thu Hoài", "dob": "05/01/2004", "points": "95", "hd": "1. Cán bộ lớp tích cực\n2. Tham gia CLB Nghệ thuật khoa Toán-Tin (Trưởng ban SKNS) \n3. Tham gia CLB NVSP khoa Toán-Tin\n4. Tham gia cuộc thi Liên hoan ca khúc thanh niên 2024 \n5. BTC cuộc thi \"Khơi nguồn cảm hứng học toán\" \n6. Đánh giá giảng viên môn chung\n7. Đánh giá giảng viên môn chuyên ngành\n8. Tham gia \"Xuân an lành\" (Đội trưởng đội 5) \n9. Tham gia cổ vũ HEC \n10. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n11. Thực hiện khảo sát lấy ý kiến về phiếu rèn luyện mới\n12. Tham gia cuộc thi tìm hiểu về Đoàn Thanh niên Cộng sản HCM \n13. Tham gia Talkshow \"Tạo động lực trong dạy và học\"\n14. Tham gia BIGGAME7 của CLB CTC" },
    "725101099": { "stt": "33", "name": "Nguyễn Thu Hiền", "dob": "24/01/2004", "points": "91", "hd": "1. Cán bộ lớp tích cực\n2. Tham gia CLB Nghệ thuật khoa Toán-Tin \n3. Tham gia cuộc thi Liên hoan ca khúc thanh niên 2024 \n4. Đánh giá giảng viên môn chung\n5. Đánh giá giảng viên môn chuyên ngành\n6. Tham gia \"Xuân an lành\" Đội 5 ( Siêu trí tuệ)   \n7. Tham gia cổ vũ HEC\n8. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n9. Tham gia cuộc thi tìm hiểu về Đoàn Thanh niên Cộng sản HCM  \n10. Tham gia Nghị quyết Đại hội Đại biểu toàn quốc lần thứ XI\n11. Thực hiện khảo sát lấy ý kiến về phiếu rèn luyện mới" },
    "725101111": { "stt": "43", "name": "Đào Phạm Diệu Hoa", "dob": "04/11/2004", "points": "86.5", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. Tham gia cổ vũ HEC \n4. Tham gia CLB Nghệ thuật khoa Toán-Tin \n5. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n6. Tham gia Nghị quyết Đại hội Đại biểu toàn quốc lần thứ XI" },
    "725101112": { "stt": "44", "name": "Dương Thị Như Hoa", "dob": "27/07/2004", "points": "87.5", "hd": "1. Đánh giá giảng viên môn chung\n2. Đánh giá giảng viên môn chuyên ngành\n3. Tham gia cuộc thi Liên hoan ca khúc Thanh niên 2024 \n4. Tham gia \"Xuân an lành\" (Đội 5 - Siêu trí tuệ) \n5. Tham gia cổ vũ HEC\n6. GPA kì 2 đạt giỏi\n7. Thực hiện khảo sát lấy ý kiến về phiếu rèn luyện mới\n8. Tham gia Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
};

function lookupStudent() {
    const studentId = document.getElementById('studentId').value.toUpperCase();
    const student = students[studentId] || { stt: '', name: '', dob: '', points: '', hd: '' };
    document.getElementById('number').innerText = student.stt;
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentDOB').innerText = student.dob;
    document.getElementById('studentPoints').innerText = student.points;
    document.getElementById('activities').innerText = student.hd;
    
    const diemInputs = document.querySelectorAll('.diem-input');
    if (document.getElementById('studentName').innerText === '') {
        check_acts.textContent = '';
        diemInputs.forEach(function(input) {
            input.disabled = true;
            input.value = '';
        });
    } else {
        check_acts.textContent = 'Bạn vui lòng kiểm tra lại các hoạt động rèn luyện của mình trước khi lưu thông tin:';
        diemInputs.forEach(function(input) {
            input.disabled = false;
        });
    }
}
