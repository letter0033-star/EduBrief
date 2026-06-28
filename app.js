// EduBrief Application Logic

// 23 Curated Categories
const CATEGORIES = [
    "교육부 정책", "시도교육청 정책", "교원 인사", "교원 정원", "교원 연금", 
    "공무원연금", "정년연장", "임금피크제", "교원 보수", "학교 행정", 
    "학교 안전", "학교폭력", "생활지도", "교육과정", "AI교육", 
    "디지털교과서", "늘봄학교", "초등교육", "교육 관련 법률 개정", 
    "국회 교육위원회", "교육부 보도자료", "인사혁신처 발표", "공무원 관련 제도 변화"
];

// Initial realistic mock data for 2026
const INITIAL_NEWS = [
    {
        id: "news-001",
        title: "공무원연금 개시 연령 조정 및 교원 정년연장(62세→65세) 사회적 합의안 국회 상정",
        priority: "critical",
        status: "reviewing",
        impact: 5,
        relatedFields: ["공무원연금", "교원 연금", "정년연장", "임금피크제", "국회 교육위원회", "공무원 관련 제도 변화"],
        summary: "1. 공무원 연금 개시 연령이 단계적으로 65세로 늦춰짐에 따라 교원의 퇴직 후 연금 공백을 해소하기 위한 정년연장 논의가 구체화되었습니다.\n2. 국회 및 사회적 타협 기구는 교원 정년을 만 62세에서 만 65세로 단계적(매년 0.5세씩) 연장하는 법안을 상정하여 검토 중입니다.\n3. 정년 연장에 따르는 학교 재정 부담을 완화하기 위해 임금피크제 도입 및 과도기적 파트타임 교직 모델이 병행 제안되었습니다.",
        preparations: [
            "퇴직 예정 교원의 연금 수급 시기 및 정년연장 적용 대상 연령대 파악",
            "고경력 교원 증가에 대비한 교내 수업 배정 및 업무 분담 기준 선제 검토",
            "임금피크제 도입 가능성에 따른 교직원 대상 사전 여론 동향 파악"
        ],
        facts: "대통령 직속 사회적 타협 기구와 국회 교육위원회 소속 의원들은 공무원연금 지급 개시 연령이 단계적으로 65세로 상향 조정됨에 따라 발생하는 교직원의 소득 공백(퇴직 후 연금 개시 전까지의 무급 기간)을 해결하기 위한 '초·중등교육법 개정안'을 상정했다. 본 개정안은 현재 만 62세인 교원 정년을 2028년부터 매년 0.5세씩 단계적으로 늘려 65세로 연장하는 내용을 골자로 하고 있다. 이에 재정 당국은 예산 절감을 위해 정년이 연장되는 3개년에 대해 임금의 일정 비율을 삭감하는 임금피크제 도입을 강하게 요구하고 있어 노동계와의 추가 갈등이 예상된다.",
        opinions: "연금 공백 해소를 위한 정년 연장 방향은 타당하나, 학교 현장 관리자 입장에서는 해결해야 할 난제가 많다. 학령인구 감소로 신규 교사 임용이 축소되는 상황에서 정년까지 연장되면 학교 내 고경력 교사 비율이 급증하게 된다. 이는 부장교사 임명 등 행정 업무 분담 시 젊은 교사들과 고경력 교사 간의 갈등을 증폭시킬 요인이다. 또한 임금피크제가 적용될 경우 보직이나 담임 배정에서 고경력 교사들의 기피 현상이 심화될 가능성이 높다. 교감 등 학교 관리자들은 국회 입법 동향을 주시하면서, 학교 구성원 간의 조화로운 업무 안배 규정을 마련해두어야 한다.",
        sourceMedia: "한국교육신문",
        sourceDate: "2026-06-25",
        sourceLink: "https://example.com/pension-reform-2026"
    },
    {
        id: "news-002",
        title: "2027년 초등 3~4학년 AI 디지털 교과서(AIDT) 정식 도입에 따른 학교 무선 인프라 표준화 지침 시달",
        priority: "critical",
        status: "confirmed",
        impact: 5,
        relatedFields: ["AI교육", "디지털교과서", "교육과정", "교육부 정책", "학교 행정", "초등교육"],
        summary: "1. 교육부는 2027년 1학기부터 초등학교 3·4학년 수학, 영어, 정보 교과에 AI 디지털 교과서(AIDT)를 전면 도입하기로 확정했습니다.\n2. 각 초등학교는 2026년 하반기 겨울방학 전까지 학교 무선AP망을 Wi-Fi 6E 이상으로 증설하고 대역폭을 최대 10Gbps로 상향해야 합니다.\n3. 기기 보급 외에 교실 내 유선 포트 증설 및 기기 충전함 배치 공간 확보가 의무화됩니다.",
        preparations: [
            "학교 전산망 주관 교실별 무선 네트워크 신호 강도 및 대역폭 전수조사",
            "2026년도 학교운영비 추가경정예산 편성 시 AIDT 기기 유지보수 및 예비 기기 구입 예산 배정",
            "방학 중 정보실 리모델링 및 개별 학급 태블릿 충전 공간 확보를 위한 전기 증설 공사 계획 수립"
        ],
        facts: "교육부는 'AI 디지털교과서 도입에 따른 초·중·고 무선망 인프라 고도화 추진 계획'을 최종 공고했다. 2027년 초등 3·4학년 도입을 시작으로 5·6학년까지 확대 적용될 예정이다. 교실 내 무선AP 규격을 WiFi 6E 규격으로 상향하고, 백본망 속도를 10Gbps로 업그레이드하는 것을 의무화한다. 관련 재원은 교육청 특별교부금과 지자체 대응자금으로 전액 지원되며, 학교별 인프라 구축 상태 검증을 위한 전문 테스크포스팀이 2026년 10월부터 점검에 나선다.",
        opinions: "하드웨어 도입 지원금은 100% 지원되지만 실무적인 행정 처리와 공사 감독은 일선 학교 행정실과 정보 부장 교사에게 전가되는 구조다. 기기 충전함이 들어서면서 발생하는 소음과 발열, 전기 배선 안전 문제에 대해 행정실과의 긴밀한 협의가 우선되어야 한다. 특히 저학년 학생들이 태블릿을 떨어뜨려 파손하거나 분실할 경우의 변상 기준을 학교 학교규칙(학칙) 내에 미리 삽입해야 교사와 학부모 간의 민원 다툼을 원천적으로 막을 수 있다.",
        sourceMedia: "교육부 보도자료",
        sourceDate: "2026-06-27",
        sourceLink: "https://example.com/moe-aidt-infrastructure"
    },
    {
        id: "news-003",
        title: "2027학년도 초등 신규 교사 임용 정원 15% 감축안 사전 예고 및 학급당 학생 수 기준 완화 대책 협의",
        priority: "critical",
        status: "reviewing",
        impact: 5,
        relatedFields: ["교원 정원", "교육부 정책", "시도교육청 정책", "교원 인사", "초등교육"],
        summary: "1. 행정안전부와 교육부는 저출생 여파로 학령인구가 급감함에 따라 2027학년도 초등 임용 정원을 올해 대비 15% 감축하기로 잠정 합의했습니다.\n2. 교육청은 정원 감축의 충격을 완화하기 위해 초등학교 학급당 학생 수 기준을 현행 20~24명에서 18명 이하로 낮추는 대안을 검토하고 있습니다.\n3. 학급수 감축에 따른 유휴 교실(유휴 교실) 전환 정책이 시도 교육청별로 하달될 예정입니다.",
        preparations: [
            "향후 3개년 학구 내 유치원 원아 수 및 주택 입주 정보를 연계한 학생 수 변동성 시뮬레이션 시행",
            "감급(학급 감축) 발생 가능성 대비 유휴 교실의 스마트 배움터 또는 늘봄교실 전환 설계",
            "교원 정원 축소에 대비한 교내 비담임 교사(전담 교사) 수급 배정 계획 재검토"
        ],
        facts: "행정안전부와 교육부는 중장기 교원수급계획에 따라 2027학년도 신규 초등교사 임용규모를 대폭 축소하는 실무 조율에 들어갔다. 학령인구 자연 감소세에 따른 불가피한 조치라는 입장이다. 이에 대해 교원단체들은 교권 보호와 개별화 교육을 위해 정원 감축을 멈추고 학급당 학생 수를 20명 이하(초등 18명 이하)로 제한하는 법제화를 통과시키라며 강력 반발하고 있다.",
        opinions: "신규 임용 정원 축소는 결국 학교 내 교원 부족과 강과후 지도 인력 구인난으로 직결된다. 정원이 줄어들면 비교과 교사나 보직 교사가 담임을 맡아야 하는 상황이 초래될 수 있다. 교감은 매년 10월경 제출하는 '학급편성 요구서' 작성 시 학생 수 감소 추이를 냉정히 판단하되, 다목적실이나 특수활동실 등 필요 교실 보존 논리를 선제적으로 수립하여 무조건적인 학급 감축을 방어할 필요가 있다.",
        sourceMedia: "인사혁신처 발표",
        sourceDate: "2026-06-26",
        sourceLink: "https://example.com/mpm-quota-2027"
    },
    {
        id: "news-004",
        title: "늘봄학교 초등 2학년 확대에 따른 외부 강사 채용 절차 간소화 및 행정실 업무 이관 분쟁 조정안 타결",
        priority: "warning",
        status: "confirmed",
        impact: 4,
        relatedFields: ["늘봄학교", "학교 안전", "학교 행정", "시도교육청 정책", "교육 관련 법률 개정"],
        summary: "1. 2026학년도 2학기부터 늘봄학교가 초등 2학년까지 의무 확대됨에 따라 교원의 늘봄 관련 행정 무배제 원칙이 강화됩니다.\n2. 늘봄 외부강사 채용 및 계약, 예산 정산 등 핵심 행정 업무는 학교가 아닌 '교육지원청 늘봄지원센터'로 이관하기로 합의안이 타결되었습니다.\n3. 학교는 늘봄교실 내 학생 관리 및 시설 안전관리 책임만 부담하며 행정 처리는 단순 이관 공문 접수로 대체됩니다.",
        preparations: [
            "2학기 늘봄학교 신청 예정 학생(1~2학년) 대상 학부모 수요 조사 및 반 편성 구성",
            "교육지원청 늘봄지원센터 담당자와의 긴밀한 연락 체계 구축 및 외부 강사 매칭 현황 수시 점검",
            "늘봄 운영 시간 확대(최대 저녁 8시)에 따른 학교 보안 경비 인력 근무 시간 및 출입 통제선 정비"
        ],
        facts: "국회 교육위원회와 시도교육감협의회는 늘봄학교 전면 확대에 따르는 행정 업무 갈등을 해결하기 위해 '늘봄학교 행정업무 교육청 완전 이관 지침'을 공동 의결했다. 이에 따라 그간 행정실과 교무실 간의 갈등을 유발했던 늘봄 외부 강사 신원조회, 채용 계약서 작성 및 회계 지출 결의 업무 일체가 교육지원청으로 귀속된다. 학교 현장에는 전담 늘봄실무사 1명이 상주하며 교육청 센터와 조율한다.",
        opinions: "계약 및 예산 실무가 교육청으로 넘어간 것은 다행스러운 일이나, 학생들이 학교 건물 내에 머무르는 동안 발생하는 안전사고(아동 낙상, 화재 등)에 대한 법적 책임은 여전히 학교장과 교감에게 있다. 저녁 늦게까지 남는 학생들을 위해 교무실과 행정실이 퇴근한 이후의 비상연락망(경비원, 야간 전담사, 인근 지구대) 연계를 확실히 구축해야 한다. 또한 일반 교실을 늘봄교실로 겸용해야 하는 담임 교사들의 정서적 피로감을 덜기 위해 특별 교실 지원비를 확보해야 한다.",
        sourceMedia: "국회 교육위원회 보도",
        sourceDate: "2026-06-24",
        sourceLink: "https://example.com/assembly-neulbom-2026"
    },
    {
        id: "news-005",
        title: "학생생활지도 고시 및 학교폭력예방 대책 시행령 개정 - 수업방해 학생 물리적 분리 및 학교장 면책 적용",
        priority: "critical",
        status: "confirmed",
        impact: 4,
        relatedFields: ["학교폭력", "생활지도", "교육 관련 법률 개정", "교육부 정책", "초등교육"],
        summary: "1. 초중등교육법 시행령 및 학생생활지도에 관한 고시 개정안이 공포되어 7월 1일부터 즉시 현장에 전면 적용됩니다.\n2. 수업을 방해하여 다른 학생의 학습권을 침해하는 학생은 즉시 교실 밖 지정 장소로 분리 조치할 수 있으며, 교직원의 정당한 지도는 아동학대 면책권이 부여됩니다.\n3. 학교폭력 가해조치 중 1~3호(서면사과, 접촉금지, 학교봉사)의 생활기록부 기재 유보 조항이 전면 폐지되어 학폭 사실이 즉각 기록됩니다.",
        preparations: [
            "학교 생활지도 규정 및 학교 규칙 개정을 위해 긴급 학교운영위원회 심의 안건 상정",
            "교실 밖 분리 장소(예: 상담실, 학부모 대기실 등) 지정 및 요일별 분리 학생 임시 지도 근무조 편성",
            "생기부 즉시 기재에 따른 학부모 항의 민원 제기 가능성 대비 법률 자문 연계망 확인"
        ],
        facts: "정부는 국무회의를 통해 교원의 정당한 지도는 아동학대로 보지 않으며, 심각한 수업 방해 시 교실 퇴실 등의 조치를 취할 수 있도록 하는 시행령을 개정했다. 또한 학교폭력 사안 발생 시 그간 경미한 조치에 대해 졸업 전까지 기록을 유보해 주던 특례 조항을 삭제하고 학폭 예방 효과를 높이기 위해 조치 즉시 생기부에 반영하도록 제도를 일원화했다.",
        opinions: "분리 조치의 근거가 법적으로 확실해진 점은 교직원들에게 위안이 된다. 그러나 현실적으로 교실 밖으로 쫓겨난 아이를 '어느 공간'에 두고 '누가 감독할 것인가'가 교내 갈등의 뇌관이다. 만약 분리된 학생을 교감실에 방치할 경우 교감의 교무 행정 업무가 마비된다. 따라서 대기 교실에 CCTV를 설치하거나, 비교과 교사(보건, 영양, 사서 등) 및 지킴이 인력이 번갈아 가며 관리하는 매뉴얼을 명확히 문서화해야 불필요한 사내 다툼을 예방할 수 있다.",
        sourceMedia: "교육부 보도자료",
        sourceDate: "2026-06-23",
        sourceLink: "https://example.com/moe-discipline-law"
    },
    {
        id: "news-006",
        title: "2027년도 공무원 수당 조정안 확정 - 담임 교사 및 보직 부장 수당 각 5만 원 인상",
        priority: "warning",
        status: "confirmed",
        impact: 3,
        relatedFields: ["교원 보수", "인사혁신처 발표", "공무원 관련 제도 변화", "교원 인사", "학교 행정"],
        summary: "1. 인사혁신처는 교직 기피 현상 완화를 위해 2027년 1월부터 담임 수당을 월 20만 원에서 25만 원으로 인상하기로 확정했습니다.\n2. 부장 등 보직 수당 또한 현행 월 15만 원에서 20만 원으로 상향 조정되며, 교감 직급보조비도 월 10만 원 인상됩니다.\n3. 비교과 교사(보건, 사서, 영양, 상담)의 특수업무수당 또한 월 3만 원씩 일괄 인상안이 가결되었습니다.",
        preparations: [
            "행정실 예산계 주관 2027년도 학교 본예산 수당 배정액 및 세입세출 요구서 세부 내역 수정",
            "수당 인상 확정 사항을 연말 인사 자문위원회 기초 자료로 활용하여 보직 교사 자율적 확보 독려",
            "비교과 교직원 수당 가산 항목 누락 방지를 위한 행정 정보 시스템(NEIS) 급여 마스터 정보 업데이트"
        ],
        facts: "인사혁신처는 '공무원 수당 등에 관한 규정 일부개정령안'의 의결 내용을 공표했다. 그동안 공무원 처우 개선 요구 중 가장 시급했던 교원 수당 체계를 대대적으로 개편하여 담임 및 부장 수당을 약 25%~33% 인상하고 다자녀 양육 공무원에게 지급되는 가족수당 가산금 지급 요건도 완화했다.",
        opinions: "보수 인상 소식은 매우 긍정적이지만, 교무 업무 부담 증가에 비하면 여전히 액수가 적다는 불만이 일부 존재한다. 그럼에도 담임과 부장을 서로 맡지 않으려던 극심한 교직 기피 현상이 이번 조치로 소폭 완화될 것으로 기대된다. 교감은 매년 11월~12월 실시하는 '차년도 보직 희망 신청' 전에 교직원 회의를 통해 수당 개선 사항을 널리 홍보하여 학기 말에 억지로 보직교사를 등떠밀어 지정하는 스트레스를 줄이도록 노력해야 한다.",
        sourceMedia: "인사혁신처 발표",
        sourceDate: "2026-06-22",
        sourceLink: "https://example.com/mpm-teacher-allowance"
    }
];

// App State
let newsDatabase = [];
let currentFilters = {
    query: "",
    priority: "all",
    status: "all",
    activeCategory: null
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initDatabase();
    setupCurrentDate();
    renderCategoryFilters();
    renderFormCategoryCheckboxes();
    renderNewsGrid();
    setupEventListeners();
});

// Initialize news storage
function initDatabase() {
    const storedNews = localStorage.getItem("edubrief_news");
    if (!storedNews) {
        localStorage.setItem("edubrief_news", JSON.stringify(INITIAL_NEWS));
        newsDatabase = [...INITIAL_NEWS];
    } else {
        newsDatabase = JSON.parse(storedNews);
    }
}

// Display Korean date
function setupCurrentDate() {
    const dateEl = document.getElementById("current-date-display");
    if (!dateEl) return;
    
    // Get Korean formatted date based on metadata (June 28, 2026)
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const date = new Date("2026-06-28T16:28:49");
    dateEl.textContent = date.toLocaleDateString("ko-KR", options);
}

// Render tag list in sidebar
function renderCategoryFilters() {
    const container = document.getElementById("category-filter-list");
    if (!container) return;
    
    container.innerHTML = "";
    
    // 'All' item
    const allBtn = document.createElement("button");
    allBtn.className = `tag-btn ${currentFilters.activeCategory === null ? 'active' : ''}`;
    allBtn.id = "tag-btn-all";
    allBtn.innerHTML = `
        <span>전체 보기</span>
        <span class="tag-count">${newsDatabase.length}</span>
    `;
    allBtn.addEventListener("click", () => selectCategoryFilter(null));
    container.appendChild(allBtn);
    
    // Count frequencies
    const freq = {};
    CATEGORIES.forEach(cat => freq[cat] = 0);
    newsDatabase.forEach(item => {
        if (item.relatedFields) {
            item.relatedFields.forEach(field => {
                if (freq[field] !== undefined) {
                    freq[field]++;
                }
            });
        }
    });
    
    // Render individual categories
    CATEGORIES.forEach(cat => {
        const count = freq[cat] || 0;
        const btn = document.createElement("button");
        btn.className = `tag-btn ${currentFilters.activeCategory === cat ? 'active' : ''}`;
        btn.innerHTML = `
            <span>${cat}</span>
            <span class="tag-count">${count}</span>
        `;
        btn.addEventListener("click", () => selectCategoryFilter(cat));
        container.appendChild(btn);
    });
}

// Render checkboxes in add/edit form
function renderFormCategoryCheckboxes() {
    const container = document.getElementById("form-related-fields");
    if (!container) return;
    
    container.innerHTML = "";
    CATEGORIES.forEach((cat, index) => {
        const label = document.createElement("label");
        label.className = "checkbox-label";
        label.innerHTML = `
            <input type="checkbox" name="form-categories" value="${cat}" id="chk-cat-${index}">
            <span>${cat}</span>
        `;
        container.appendChild(label);
    });
}

// Determine if a news item is a "High Priority Subject" based on rules
function isHighPrioritySubject(item) {
    const highPriorityTags = ["교원 연금", "공무원연금", "정년연장", "교원 정원", "교육부 정책", "교육 관련 법률 개정"];
    
    // Check if any tag matches
    const hasTagMatch = item.relatedFields && item.relatedFields.some(tag => highPriorityTags.includes(tag));
    
    // Check if title or content mentions "시행령 개정"
    const hasTextMatch = (item.title && item.title.includes("시행령 개정")) || 
                         (item.facts && item.facts.includes("시행령 개정")) ||
                         (item.relatedFields && item.relatedFields.includes("시행령 개정"));
                         
    return hasTagMatch || hasTextMatch;
}

// Render News Grid
function renderNewsGrid() {
    const grid = document.getElementById("news-grid");
    const emptyState = document.getElementById("empty-state");
    if (!grid) return;
    
    // 1. Filter data
    let filteredNews = newsDatabase.filter(item => {
        // Search Query filter (matches title, summary, preparations, facts, opinions)
        if (currentFilters.query) {
            const q = currentFilters.query.toLowerCase();
            const titleMatch = item.title && item.title.toLowerCase().includes(q);
            const summaryMatch = item.summary && item.summary.toLowerCase().includes(q);
            const factMatch = item.facts && item.facts.toLowerCase().includes(q);
            const prepMatch = item.preparations && item.preparations.some(p => p.toLowerCase().includes(q));
            
            if (!titleMatch && !summaryMatch && !factMatch && !prepMatch) return false;
        }
        
        // Priority filter
        if (currentFilters.priority !== "all") {
            if (item.priority !== currentFilters.priority) return false;
        }
        
        // Policy Status filter
        if (currentFilters.status !== "all") {
            if (item.status !== currentFilters.status) return false;
        }
        
        // Sidebar Category filter
        if (currentFilters.activeCategory !== null) {
            if (!item.relatedFields || !item.relatedFields.includes(currentFilters.activeCategory)) return false;
        }
        
        return true;
    });
    
    // 2. Sort data
    const sortVal = document.getElementById("sort-select").value;
    if (sortVal === "priority-rule") {
        // Special sorting: High Priority Subjects (연금, 정년, 정원, 교육부정책, 법률개정) first,
        // then sorted by Priority Level (critical > warning > info),
        // then sorted by latest date.
        filteredNews.sort((a, b) => {
            const aHigh = isHighPrioritySubject(a) ? 1 : 0;
            const bHigh = isHighPrioritySubject(b) ? 1 : 0;
            
            if (aHigh !== bHigh) {
                return bHigh - aHigh; // High priority subjects first
            }
            
            // Map priority levels to numbers
            const priorityWeight = { critical: 3, warning: 2, info: 1 };
            const aWeight = priorityWeight[a.priority] || 0;
            const bWeight = priorityWeight[b.priority] || 0;
            
            if (aWeight !== bWeight) {
                return bWeight - aWeight; // Critical first, then Warning, then Info
            }
            
            // Fallback to date
            return new Date(b.sourceDate) - new Date(a.sourceDate);
        });
    } else if (sortVal === "latest") {
        filteredNews.sort((a, b) => new Date(b.sourceDate) - new Date(a.sourceDate));
    } else if (sortVal === "impact") {
        filteredNews.sort((a, b) => b.impact - a.impact);
    }
    
    // 3. Render
    grid.innerHTML = "";
    
    // Update count display
    const countText = document.getElementById("results-count-text");
    if (countText) {
        countText.textContent = `검색 결과: ${filteredNews.length}건`;
    }
    
    // Update stats counts
    updateStatsDashboard();
    
    if (filteredNews.length === 0) {
        grid.classList.add("hidden");
        emptyState.classList.remove("hidden");
        return;
    }
    
    grid.classList.remove("hidden");
    emptyState.classList.add("hidden");
    
    filteredNews.forEach(item => {
        const card = document.createElement("div");
        
        // Priority check for visual left-border
        const isFeatured = isHighPrioritySubject(item);
        card.className = `news-card ${isFeatured ? 'featured-priority' : ''}`;
        card.setAttribute("data-id", item.id);
        
        // Build badges
        const priorityLabels = { critical: "🔴 매우 중요", warning: "🟠 중요", info: "🟡 참고" };
        const statusLabels = { confirmed: "확정 정책", reviewing: "검토 중" };
        
        const starsText = "★".repeat(item.impact) + "☆".repeat(5 - item.impact);
        
        // Build related tags list (max 4)
        let tagsHtml = "";
        if (item.relatedFields) {
            item.relatedFields.slice(0, 4).forEach(tag => {
                tagsHtml += `<span class="card-tag">${tag}</span>`;
            });
            if (item.relatedFields.length > 4) {
                tagsHtml += `<span class="card-tag">+${item.relatedFields.length - 4}</span>`;
            }
        }
        
        // Formatting 1 line summary for preview
        const firstLineSummary = item.summary ? item.summary.split("\n")[0] : "";
        
        card.innerHTML = `
            <div class="card-header">
                <div class="badges-row">
                    <span class="badge ${item.priority}">${priorityLabels[item.priority]}</span>
                    <span class="badge-status ${item.status}">${statusLabels[item.status]}</span>
                </div>
                <div class="star-rating" title="학교 영향도: ${item.impact}점">${starsText}</div>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-summary">${item.summary ? item.summary : ""}</p>
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <div class="card-footer">
                <span class="card-source">${item.sourceMedia}</span>
                <span>${item.sourceDate}</span>
            </div>
        `;
        
        card.addEventListener("click", () => openDetailModal(item.id));
        grid.appendChild(card);
    });
}

// Update the top Stats indicators
function updateStatsDashboard() {
    const totalEl = document.getElementById("stat-total-count");
    const criticalEl = document.getElementById("stat-critical-count");
    const warningEl = document.getElementById("stat-warning-count");
    const infoEl = document.getElementById("stat-info-count");
    const draftEl = document.getElementById("stat-draft-count");
    
    if (!totalEl) return;
    
    totalEl.textContent = newsDatabase.length;
    criticalEl.textContent = newsDatabase.filter(item => item.priority === "critical").length;
    warningEl.textContent = newsDatabase.filter(item => item.priority === "warning").length;
    infoEl.textContent = newsDatabase.filter(item => item.priority === "info").length;
    draftEl.textContent = newsDatabase.filter(item => item.status === "reviewing").length;
}

// Select category filter
function selectCategoryFilter(category) {
    currentFilters.activeCategory = category;
    
    // Update active state in sidebar
    const tagButtons = document.querySelectorAll(".tag-btn");
    tagButtons.forEach(btn => btn.classList.remove("active"));
    
    if (category === null) {
        document.getElementById("tag-btn-all").classList.add("active");
    } else {
        // Find which button has this category name
        tagButtons.forEach(btn => {
            if (btn.querySelector("span") && btn.querySelector("span").textContent === category) {
                btn.classList.add("active");
            }
        });
    }
    
    updateActiveFiltersBar();
    renderNewsGrid();
}

// Update Active Filters Bar display
function updateActiveFiltersBar() {
    const bar = document.getElementById("active-filters-container");
    const list = document.getElementById("active-filters-list");
    if (!bar || !list) return;
    
    list.innerHTML = "";
    let count = 0;
    
    if (currentFilters.priority !== "all") {
        const labels = { critical: "🔴 매우 중요", warning: "🟠 중요", info: "🟡 참고" };
        createActiveTag("중요도: " + labels[currentFilters.priority], () => {
            document.getElementById("priority-filter").value = "all";
            currentFilters.priority = "all";
            updateActiveFiltersBar();
            renderNewsGrid();
        });
        count++;
    }
    
    if (currentFilters.status !== "all") {
        const labels = { confirmed: "확정 정책", reviewing: "검토 중" };
        createActiveTag("구분: " + labels[currentFilters.status], () => {
            document.getElementById("status-filter").value = "all";
            currentFilters.status = "all";
            updateActiveFiltersBar();
            renderNewsGrid();
        });
        count++;
    }
    
    if (currentFilters.activeCategory !== null) {
        createActiveTag("카테고리: " + currentFilters.activeCategory, () => {
            selectCategoryFilter(null);
        });
        count++;
    }
    
    if (count > 0) {
        bar.classList.remove("hidden");
    } else {
        bar.classList.add("hidden");
    }
    
    function createActiveTag(text, onRemove) {
        const tag = document.createElement("span");
        tag.className = "active-filter-badge";
        tag.innerHTML = `
            ${text}
            <button class="remove-filter-btn" aria-label="필터 해제">&times;</button>
        `;
        tag.querySelector("button").addEventListener("click", onRemove);
        list.appendChild(tag);
    }
}

// Event Listeners setup
function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const body = document.body;
            if (body.classList.contains("light-mode")) {
                body.classList.replace("light-mode", "dark-mode");
                themeBtn.querySelector(".theme-icon").textContent = "☀️";
                showToast("다크 모드로 전환되었습니다.");
            } else {
                body.classList.replace("dark-mode", "light-mode");
                themeBtn.querySelector(".theme-icon").textContent = "🌙";
                showToast("라이트 모드로 전환되었습니다.");
            }
        });
    }
    
    // Sidebar toggle (for mobile)
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("open");
        });
        
        // Close sidebar if clicked outside on mobile
        document.addEventListener("click", (e) => {
            if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove("open");
            }
        });
    }
    
    // Search input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentFilters.query = e.target.value;
            renderNewsGrid();
        });
    }
    
    // Priority filter dropdown
    const prioritySelect = document.getElementById("priority-filter");
    if (prioritySelect) {
        prioritySelect.addEventListener("change", (e) => {
            currentFilters.priority = e.target.value;
            updateActiveFiltersBar();
            renderNewsGrid();
        });
    }
    
    // Status filter dropdown
    const statusSelect = document.getElementById("status-filter");
    if (statusSelect) {
        statusSelect.addEventListener("change", (e) => {
            currentFilters.status = e.target.value;
            updateActiveFiltersBar();
            renderNewsGrid();
        });
    }
    
    // Sort dropdown
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            renderNewsGrid();
        });
    }
    
    // Reset Filters button
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            searchInput.value = "";
            prioritySelect.value = "all";
            statusSelect.value = "all";
            sortSelect.value = "priority-rule";
            
            currentFilters = {
                query: "",
                priority: "all",
                status: "all",
                activeCategory: null
            };
            
            // Reset sidebar tags active style
            const tagButtons = document.querySelectorAll(".tag-btn");
            tagButtons.forEach(btn => btn.classList.remove("active"));
            document.getElementById("tag-btn-all").classList.add("active");
            
            updateActiveFiltersBar();
            renderNewsGrid();
            showToast("모든 필터가 초기화되었습니다.");
        });
    }
    
    // Clear active tags button
    const clearActiveTagsBtn = document.getElementById("clear-active-tags-btn");
    if (clearActiveTagsBtn) {
        clearActiveTagsBtn.addEventListener("click", () => {
            prioritySelect.value = "all";
            statusSelect.value = "all";
            currentFilters.priority = "all";
            currentFilters.status = "all";
            selectCategoryFilter(null);
        });
    }
    
    // Add Curation modal triggers
    const openAddBtn = document.getElementById("open-add-modal-btn");
    const closeFormBtn = document.getElementById("close-form-modal-btn");
    const cancelFormBtn = document.getElementById("cancel-form-btn");
    const formModal = document.getElementById("form-modal");
    
    if (openAddBtn) openAddBtn.addEventListener("click", () => openFormModal());
    if (closeFormBtn) closeFormBtn.addEventListener("click", closeFormModal);
    if (cancelFormBtn) cancelFormBtn.addEventListener("click", closeFormModal);
    
    // Form submission
    const form = document.getElementById("news-curation-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
    
    // Detail Modal close trigger
    const closeDetailBtn = document.getElementById("close-detail-modal-btn");
    const detailModal = document.getElementById("detail-modal");
    if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetailModal);
    
    // Close modals on clicking backdrop
    window.addEventListener("click", (e) => {
        if (e.target === formModal) closeFormModal();
        if (e.target === detailModal) closeDetailModal();
    });
    
    // Copy Markdown button in detail modal
    const copyBtn = document.getElementById("copy-markdown-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", copyArticleAsMarkdown);
    }
    
    // Print button in detail modal
    const printBtn = document.getElementById("print-detail-btn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
    
    // Edit & Delete button in detail modal
    const editBtn = document.getElementById("edit-curation-btn");
    const deleteBtn = document.getElementById("delete-curation-btn");
    
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            const currentId = document.getElementById("form-news-id").value;
            closeDetailModal();
            openFormModal(currentId);
        });
    }
    
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            const currentId = document.getElementById("form-news-id").value;
            if (confirm("정말로 이 큐레이션 기사를 삭제하시겠습니까?")) {
                deleteNews(currentId);
                closeDetailModal();
            }
        });
    }
    
    // Auto-parse button
    const autoParseBtn = document.getElementById("auto-parse-btn");
    if (autoParseBtn) {
        autoParseBtn.addEventListener("click", handleAutoParseSimulation);
    }
}

// Open Detail view modal
function openDetailModal(id) {
    const item = newsDatabase.find(x => x.id === id);
    if (!item) return;
    
    // Save current active ID to the hidden form field so edit/delete can access it
    document.getElementById("form-news-id").value = id;
    
    // Set headers
    const priorityBadge = document.getElementById("detail-priority-badge");
    const statusBadge = document.getElementById("detail-status-badge");
    const titleEl = document.getElementById("detail-title");
    
    const priorityLabels = { critical: "🔴 매우 중요", warning: "🟠 중요", info: "🟡 참고" };
    const statusLabels = { confirmed: "확정 정책", reviewing: "검토 중인 정책" };
    
    priorityBadge.textContent = priorityLabels[item.priority];
    priorityBadge.className = `badge ${item.priority}`;
    
    statusBadge.textContent = statusLabels[item.status];
    statusBadge.className = `badge-status ${item.status}`;
    
    titleEl.textContent = item.title;
    
    // Set meta grid
    const starsEl = document.getElementById("detail-impact-stars");
    const sourceEl = document.getElementById("detail-source-info");
    const linkEl = document.getElementById("detail-source-link");
    const linkWrapper = document.getElementById("detail-source-link-wrapper");
    
    starsEl.textContent = "★".repeat(item.impact) + "☆".repeat(5 - item.impact);
    starsEl.title = `학교 영향도: ${item.impact}점`;
    
    sourceEl.textContent = `${item.sourceMedia} | ${item.sourceDate}`;
    
    if (item.sourceLink) {
        linkWrapper.classList.remove("hidden");
        linkEl.href = item.sourceLink;
    } else {
        linkWrapper.classList.add("hidden");
    }
    
    // Render tags
    const tagsContainer = document.getElementById("detail-tags-list");
    tagsContainer.innerHTML = "";
    if (item.relatedFields) {
        item.relatedFields.forEach(tag => {
            const tagSpan = document.createElement("span");
            tagSpan.className = "detail-tag";
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
    }
    
    // Key summary (3-5 lines)
    const summaryContainer = document.getElementById("detail-summary-content");
    summaryContainer.textContent = item.summary;
    
    // School preparations
    const prepContainer = document.getElementById("detail-prep-list");
    prepContainer.innerHTML = "";
    if (item.preparations) {
        item.preparations.forEach(prep => {
            const li = document.createElement("li");
            li.textContent = prep;
            prepContainer.appendChild(li);
        });
    }
    
    // Facts vs Opinions
    document.getElementById("detail-fact-content").textContent = item.facts || "기재된 팩트 내용이 없습니다.";
    document.getElementById("detail-opinion-content").textContent = item.opinions || "큐레이터의 분석 의견이 없습니다.";
    
    // Show Modal
    const modal = document.getElementById("detail-modal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

// Close Detail Modal
function closeDetailModal() {
    const modal = document.getElementById("detail-modal");
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Enable background scrolling
}

// Open Form modal (for adding or editing)
function openFormModal(id = "") {
    const form = document.getElementById("news-curation-form");
    const modalTitle = document.getElementById("form-modal-title");
    const idField = document.getElementById("form-news-id");
    
    // Clear validation error highlights
    const formGroups = form.querySelectorAll(".form-group");
    formGroups.forEach(g => g.classList.remove("invalid"));
    const errorMsgs = form.querySelectorAll(".error-msg");
    errorMsgs.forEach(m => m.textContent = "");
    
    // Reset pasting assistant area
    document.getElementById("raw-news-paste").value = "";
    
    if (id) {
        // Edit mode
        modalTitle.textContent = "뉴스 큐레이션 수정";
        const item = newsDatabase.find(x => x.id === id);
        if (!item) return;
        
        idField.value = item.id;
        document.getElementById("form-title").value = item.title;
        document.getElementById("form-priority").value = item.priority;
        document.getElementById("form-status").value = item.status;
        document.getElementById("form-impact").value = item.impact.toString();
        document.getElementById("form-summary").value = item.summary;
        
        // Select checkboxed tags
        const checkboxes = document.querySelectorAll("input[name='form-categories']");
        checkboxes.forEach(chk => {
            chk.checked = item.relatedFields && item.relatedFields.includes(chk.value);
        });
        
        // Fill preparations
        const prepInputs = document.querySelectorAll(".form-prep-item");
        prepInputs.forEach((input, index) => {
            input.value = item.preparations && item.preparations[index] ? item.preparations[index] : "";
        });
        
        document.getElementById("form-source-media").value = item.sourceMedia;
        document.getElementById("form-source-date").value = item.sourceDate;
        document.getElementById("form-source-link-input").value = item.sourceLink || "";
        document.getElementById("form-fact").value = item.facts || "";
        document.getElementById("form-opinion").value = item.opinions || "";
    } else {
        // Create mode
        modalTitle.textContent = "새로운 뉴스 큐레이션 작성";
        form.reset();
        idField.value = "";
        
        // Reset category checkboxes
        const checkboxes = document.querySelectorAll("input[name='form-categories']");
        checkboxes.forEach(chk => chk.checked = false);
        
        // Set date to today (June 28, 2026)
        document.getElementById("form-source-date").value = "2026-06-28";
    }
    
    const modal = document.getElementById("form-modal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

// Close Form Modal
function closeFormModal() {
    const modal = document.getElementById("form-modal");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

// Helper Toast message
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : '⚠️'}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto remove
    setTimeout(() => {
        toast.style.animation = "slideIn 0.25s reverse";
        setTimeout(() => {
            toast.remove();
        }, 240);
    }, 3000);
}

// Copy news details to clipboard in clean Markdown format
function copyArticleAsMarkdown() {
    const currentId = document.getElementById("form-news-id").value;
    const item = newsDatabase.find(x => x.id === currentId);
    if (!item) return;
    
    const priorityLabels = { critical: "🔴 매우 중요", warning: "🟠 중요", info: "🟡 참고" };
    const statusLabels = { confirmed: "확정 정책", reviewing: "검토 중인 정책" };
    const stars = "★".repeat(item.impact) + "☆".repeat(5 - item.impact);
    
    // Format preparations
    let prepText = "";
    if (item.preparations) {
        item.preparations.forEach(prep => {
            if (prep.trim()) {
                prepText += `- ${prep.trim()}\n`;
            }
        });
    }
    
    // Format categories
    const categoriesText = item.relatedFields ? item.relatedFields.join(", ") : "";
    
    // Build Markdown template
    const markdown = 
`[${priorityLabels[item.priority]}] ${item.title}

■ 핵심내용
${item.summary}

■ 학교 영향도: ${stars}
■ 정책 구분: ${statusLabels[item.status]}
■ 관련 분야: ${categoriesText}

■ 학교에서 준비할 사항
${prepText}
■ 출처
- 언론사/출처: ${item.sourceMedia}
- 발행일: ${item.sourceDate}
- 원문 링크: ${item.sourceLink || "없음"}

---
* 본 요약은 초등학교 교감 및 학교 관리자를 위한 교육정책 큐레이터 'EduBrief'에서 생성되었습니다.`;

    navigator.clipboard.writeText(markdown).then(() => {
        showToast("마크다운 텍스트가 클립보드에 복사되었습니다!");
    }).catch(err => {
        showToast("복사 실패: 브라우저 권한을 확인하세요.", "error");
        console.error(err);
    });
}

// Delete Curation news
function deleteNews(id) {
    newsDatabase = newsDatabase.filter(x => x.id !== id);
    localStorage.setItem("edubrief_news", JSON.stringify(newsDatabase));
    
    renderCategoryFilters();
    renderNewsGrid();
    showToast("큐레이션 뉴스가 성공적으로 삭제되었습니다.");
}

// Validation before form save
function validateForm() {
    let isValid = true;
    
    const title = document.getElementById("form-title");
    const summary = document.getElementById("form-summary");
    const media = document.getElementById("form-source-media");
    const date = document.getElementById("form-source-date");
    const fact = document.getElementById("form-fact");
    const opinion = document.getElementById("form-opinion");
    
    // Title check
    if (!title.value.trim()) {
        setError("title", "뉴스 제목을 입력해 주세요.");
        isValid = false;
    } else {
        clearError("title");
    }
    
    // Categories checkbox check
    const chkboxes = document.querySelectorAll("input[name='form-categories']:checked");
    if (chkboxes.length === 0) {
        setError("fields", "최소 하나의 관련 분야 카테고리를 선택해야 합니다.");
        isValid = false;
    } else {
        clearError("fields");
    }
    
    // Summary check
    if (!summary.value.trim()) {
        setError("summary", "핵심 내용 요약을 작성해 주세요.");
        isValid = false;
    } else {
        clearError("summary");
    }
    
    // Preparations check (at least two)
    const preps = Array.from(document.querySelectorAll(".form-prep-item"))
                       .map(input => input.value.trim())
                       .filter(val => val !== "");
    if (preps.length < 2) {
        setError("preps", "학교 준비 사항은 최소 2가지 이상 기입해야 합니다.");
        isValid = false;
    } else {
        clearError("preps");
    }
    
    // Source Media check
    if (!media.value.trim()) {
        setError("media", "출처 언론사나 발표 기관을 기입해 주세요.");
        isValid = false;
    } else {
        clearError("media");
    }
    
    // Source Date check
    if (!date.value) {
        setError("date", "기사 발행일을 선택해 주세요.");
        isValid = false;
    } else {
        clearError("date");
    }
    
    // Fact check
    if (!fact.value.trim()) {
        setError("fact", "기사 및 보도자료의 객관적 사실관계(Fact)를 입력해 주세요.");
        isValid = false;
    } else {
        clearError("fact");
    }
    
    // Opinion check
    if (!opinion.value.trim()) {
        setError("opinion", "큐레이터의 분석 의견(Opinion)을 작성해 주세요.");
        isValid = false;
    } else {
        clearError("opinion");
    }
    
    return isValid;
    
    function setError(fieldId, msg) {
        const errEl = document.getElementById("error-" + fieldId);
        if (errEl) errEl.textContent = msg;
        
        const inputEl = document.getElementById("form-" + fieldId);
        if (inputEl) inputEl.closest(".form-group").classList.add("invalid");
    }
    
    function clearError(fieldId) {
        const errEl = document.getElementById("error-" + fieldId);
        if (errEl) errEl.textContent = "";
        
        const inputEl = document.getElementById("form-" + fieldId);
        if (inputEl) inputEl.closest(".form-group").classList.remove("invalid");
    }
}

// Form submit handler (Create / Edit)
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showToast("입력 양식 중 오류가 있습니다. 붉은색 오류 메세지를 확인해 주세요.", "error");
        return;
    }
    
    const idField = document.getElementById("form-news-id").value;
    const titleVal = document.getElementById("form-title").value.trim();
    const priorityVal = document.getElementById("form-priority").value;
    const statusVal = document.getElementById("form-status").value;
    const impactVal = parseInt(document.getElementById("form-impact").value);
    const summaryVal = document.getElementById("form-summary").value.trim();
    
    // Checked tags
    const checkedCats = [];
    const checkboxes = document.querySelectorAll("input[name='form-categories']:checked");
    checkboxes.forEach(chk => checkedCats.push(chk.value));
    
    // Preparations list
    const prepInputs = document.querySelectorAll(".form-prep-item");
    const prepsVal = [];
    prepInputs.forEach(input => {
        if (input.value.trim()) {
            prepsVal.push(input.value.trim());
        }
    });
    
    const sourceMediaVal = document.getElementById("form-source-media").value.trim();
    const sourceDateVal = document.getElementById("form-source-date").value;
    const sourceLinkVal = document.getElementById("form-source-link-input").value.trim();
    
    const factVal = document.getElementById("form-fact").value.trim();
    const opinionVal = document.getElementById("form-opinion").value.trim();
    
    if (idField) {
        // Edit Operation
        const idx = newsDatabase.findIndex(x => x.id === idField);
        if (idx !== -1) {
            newsDatabase[idx] = {
                id: idField,
                title: titleVal,
                priority: priorityVal,
                status: statusVal,
                impact: impactVal,
                relatedFields: checkedCats,
                summary: summaryVal,
                preparations: prepsVal,
                facts: factVal,
                opinions: opinionVal,
                sourceMedia: sourceMediaVal,
                sourceDate: sourceDateVal,
                sourceLink: sourceLinkVal
            };
            showToast("큐레이션 뉴스가 성공적으로 수정되었습니다.");
        }
    } else {
        // Create Operation
        const newId = "news-" + Date.now();
        const newItem = {
            id: newId,
            title: titleVal,
            priority: priorityVal,
            status: statusVal,
            impact: impactVal,
            relatedFields: checkedCats,
            summary: summaryVal,
            preparations: prepsVal,
            facts: factVal,
            opinions: opinionVal,
            sourceMedia: sourceMediaVal,
            sourceDate: sourceDateVal,
            sourceLink: sourceLinkVal
        };
        newsDatabase.unshift(newItem); // Add to beginning of database
        showToast("새로운 큐레이션 뉴스가 등록되었습니다.");
    }
    
    localStorage.setItem("edubrief_news", JSON.stringify(newsDatabase));
    closeFormModal();
    renderCategoryFilters();
    renderNewsGrid();
}

// 🤖 Magic Auto-Parse / Analyze simulator
function handleAutoParseSimulation() {
    const rawText = document.getElementById("raw-news-paste").value.trim();
    if (!rawText) {
        showToast("텍스트 창이 비어 있습니다. 기사 내용을 복사해서 붙여넣어 주세요.", "error");
        return;
    }
    
    showToast("기사 내용을 인공지능 분석기로 파싱하고 있습니다...", "info");
    
    // Simulate smart parsing delay (300ms)
    setTimeout(() => {
        // Heuristic 1: Extract Title
        // Use first line of text, if it's less than 80 chars. Otherwise generate.
        const lines = rawText.split("\n").map(l => l.trim()).filter(l => l.length > 0);
        let suggestedTitle = "";
        if (lines.length > 0 && lines[0].length < 80) {
            suggestedTitle = lines[0].replace(/\[.*?\]/g, "").trim(); // strip braces
        } else {
            suggestedTitle = "교육 정책 관련 신규 보도 기사";
        }
        
        // Heuristic 2: Match Categories
        const matchedCats = [];
        CATEGORIES.forEach(cat => {
            // Simplify terms for matching
            let shortTerm = cat;
            if (cat === "교육 관련 법률 개정") shortTerm = "법률 개정";
            if (cat === "공무원 관련 제도 변화") shortTerm = "공무원";
            if (cat === "디지털교과서") shortTerm = "교과서";
            if (cat === "국회 교육위원회") shortTerm = "교육위";
            if (cat === "교육부 보도자료") shortTerm = "교육부";
            if (cat === "인사혁신처 발표") shortTerm = "인사혁신처";
            
            if (rawText.includes(shortTerm) || rawText.includes(cat)) {
                matchedCats.push(cat);
            }
        });
        
        // Defaults if none matched
        if (matchedCats.length === 0) {
            matchedCats.push("교육부 정책", "학교 행정");
        }
        
        // Auto check Priority
        let priority = "info";
        let impact = 3;
        if (rawText.match(/(연금|정년|정원|법률 개정|폐지|인상|의무화|전면)/)) {
            priority = "critical";
            impact = 5;
        } else if (rawText.match(/(안전|학폭|생활지도|늘봄|교육과정|수당)/)) {
            priority = "warning";
            impact = 4;
        }
        
        // Formulate Summary
        let summaryText = "";
        let preps = [];
        let opinionText = "";
        
        // Customize text depending on main keywords
        if (rawText.includes("늘봄")) {
            summaryText = "1. 늘봄학교 프로그램 운영 시간이 확대 및 전원 참여 정책이 가속화됩니다.\n2. 늘봄 전담 행정인력이 재편되어 교사들의 행무 부담이 경감될 예정입니다.\n3. 아동의 등하교 안전 및 시설 관리 문제 보강이 촉구됩니다.";
            preps = [
                "늘봄학교 교실 공간 구성에 따르는 냉난방 및 집기 조율",
                "지역사회 전문 강사 연계망 매칭 상태 및 신원조회 준비",
                "학교 주변 통학로 및 아동 출입증 배부 등 보안대책 재정비"
            ];
            opinionText = "늘봄학교 대상 확대로 늘봄실무사가 배치되나, 실제 운영 시간 중 관리자의 결재와 학생 안전에 대한 실질 지휘는 교감의 부담으로 귀결됩니다. 저녁 늦게까지 학교 개방에 따른 경비원 업무 협의 및 비상연락체계를 행정실과 정립해야 합니다.";
        } else if (rawText.match(/(연금|정년)/)) {
            summaryText = "1. 공무원 연금 지급 시기 지연에 따른 소득 공백 해소 법안이 구체화되고 있습니다.\n2. 이에 따라 교원 정년을 만 65세로 점진적으로 늘려가는 정년 연장 상정안이 논의 중입니다.\n3. 고령자 증가에 상응하는 고용제도 보완(임금피크제 등)이 의무 탑재될 것으로 보입니다.";
            preps = [
                "향후 3~5년 주기 퇴직 대상 교원의 현황 및 정년연장 적용 연한 매칭표 작성",
                "보직 임명 규정 변경 시 장기 경력자와 신임 교사 간 조율 조항 검토",
                "임금피크제 도입 시 보직 수당 및 보수 지급 기준표 행정실 이관 사전 점검"
            ];
            opinionText = "정년연장은 신규 임용 절벽을 수반하므로 젊은 신규 교사들의 수업 및 행정 업무 가중을 유발할 우려가 큽니다. 고경력 교직원이 늘어남에 따라 비교적 편중되었던 업무 분담 문화를 개혁하고 투명한 보직 순환제를 구축하는 갈등 관리 지침이 필수적입니다.";
        } else if (rawText.match(/(폭력|생활지도|아동학대)/)) {
            summaryText = "1. 교원의 생활지도 영역 구체화와 정당한 훈육에 대한 아동학대 면책 조항이 적용됩니다.\n2. 학교폭력 처리 절차가 간소화되고 중대한 학폭 징계 사항은 생기부에 즉시 기재 처리됩니다.\n3. 수업 방해 학생을 즉시 물리적으로 분리 조치할 수 있는 학칙 권한이 부여됩니다.";
            preps = [
                "개정 학생지도 고시 내용에 기반하여 교내 '학생 생활교육 학칙' 전면 개정 및 학운위 심의 요청",
                "분리 처분 학생이 머무를 교내 대기 시설 장소 확보 및 보호 전담 교무 임시 배정표 편성",
                "학폭 기재 관련 학부모 소송/이의 신청에 대비한 학교 고문 변호사 및 지원청 법률 지원팀 컨택처 확보"
            ];
            opinionText = "법적인 면책은 반가우나 교실에서 분리된 학생을 교무실에 대기하게 함으로써 관리자와 행정 직원들의 직접 관찰 부담이 커지게 됩니다. 분리 학생 지도 일지를 신설하고 요일별 순번 지도를 행정실, 비교과, 교감이 균등 배분하는 매뉴얼 작성이 필요합니다.";
        } else {
            summaryText = "1. 교육 정책 개정안 발표에 따라 일선 학교의 관리 기준이 변경됩니다.\n2. 학정 사항의 규정 적용 시기가 다가옴에 따라 학교 규정 개정이 요구됩니다.\n3. 관련 부서(교무/행정) 간 협의를 통한 예산 및 실무 정리가 필요합니다.";
            preps = [
                "신규 하달된 공문서 및 시행 지침의 학교 내 전파 연수 계획 수립",
                "변동 수당 및 시설 보강 예산에 대한 시도교육청 배부 기준 파악 및 행정실 이관",
                "학교운영위원회 안건 상정을 위한 변경 규정 시안 마련"
            ];
            opinionText = "본 교육부 발표는 학교 행정에 즉각적인 행정력 소모를 일으키는 조항이 다수 포함되어 있습니다. 공문 접수 즉시 행무 부서 간의 책임 소재를 명확히 하여 혼선을 줄이고, 교직원 간의 업무 회피 상황을 중재하는 리더십이 요구됩니다.";
        }
        
        // Populate form fields
        document.getElementById("form-title").value = suggestedTitle;
        document.getElementById("form-priority").value = priority;
        document.getElementById("form-status").value = rawText.includes("확정") ? "confirmed" : "reviewing";
        document.getElementById("form-impact").value = impact.toString();
        document.getElementById("form-summary").value = summaryText;
        
        // Checkboxes check
        const checkboxes = document.querySelectorAll("input[name='form-categories']");
        checkboxes.forEach(chk => {
            chk.checked = matchedCats.includes(chk.value);
        });
        
        // Preps
        const prepInputs = document.querySelectorAll(".form-prep-item");
        prepInputs.forEach((input, index) => {
            input.value = preps[index] ? preps[index] : "";
        });
        
        // Facts vs Opinions
        document.getElementById("form-fact").value = rawText.substring(0, 1000); // paste raw text as facts
        document.getElementById("form-opinion").value = opinionText;
        
        // Source Defaults
        document.getElementById("form-source-media").value = "교육정책분석팀";
        document.getElementById("form-source-date").value = "2026-06-28";
        
        showToast("텍스트 파싱 및 추천 초안 작성이 완료되었습니다! 입력값을 확인해 주세요.");
    }, 300);
}
