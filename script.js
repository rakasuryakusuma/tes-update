// ===== DATA NAMA, PASSWORD, DAN CLUE (HARDCODE) =====
// Bagian ini berisi data untuk 40 nama yang dapat diubah sesuai kebutuhan
const peopleData = [
    // BAGIAN 1 - 10 nama pertama (selalu terbuka di awal)
    { name: "Ryan", password: "tegarkecelupsanten", clue: "ini cuma tes" },
    { name: "Elda", password: "kaelaa", clue: "Anak SIEGA" },
    { name: "Michi", password: "passwordapa?", clue: "Aku Laki Laki" },
    { name: "Zen", password: "slametdisaster", clue: "Anak TI" },
    { name: "Witney", password: "poseimup", clue: "Senyumanku manis" },
    { name: "Jesi", password: "eh ha'a lah", clue: "Tinggi ku 155cm" },
    { name: "Thomas", password: "fikom1", clue: "Suaraku khas, beda dari yang lain" },
    { name: "Jojo", password: "Bau Kelapa", clue: "Aku cuek" },
    { name: "Landra", password: "Fons Vitae Caritas", clue: "Anak ormawa" },
    { name: "Joss", password: "akulupaiq", clue: "Aku lumayan tinggi" },
    
    // BAGIAN 2 - 15 nama berikutnya (terbuka setelah bagian 1 selesai)
    { name: "Raka", password: "cyberians88", clue: "Aku suka ngedit sama foto" },
    { name: "Unya", password: "hanadulset", clue: "Dingin tetapi tidak kejam" },
    { name: "Bagas", password: "rkfikomrkjosjis", clue: "Aku suka grogi kalo ngomong, jadi kaya gajelas" },
    { name: "Micel", password: "atokdalang", clue: "Rambutku belah tengah" },
    { name: "Veve", password: "kasihaba2kaloudasiap", clue: "Laptopku ASUS" },
    { name: "Bigel", password: "hahgatauiq", clue: "Ada tahi lalat diwajah" },
    { name: "Anton", password: "jendralpardi", clue: "Aku ngekost" },
    { name: "Anet", password: "cetecantik", clue: "Aku gak ngekost" },
    { name: "Stefani", password: "berotaksenku", clue: "Umur ku 19th" },
    { name: "Titus", password: "kecebanget", clue: "Aku punya poni" },
    { name: "Danelle", password: "gatauaku", clue: "Aku pernah tinggal di Kalimantan" },
    { name: "Tegar", password: "ggemyu", clue: "Aku suka pakai sepatu putih" },
    { name: "Erick", password: "ptmbf25", clue: "Makanan favoritku soto" },
    { name: "Novan", password: "jogetduludong", clue: "Sepatuku biasanya NIKE PUTIH" },
    { name: "Kristo", password: "jarjitmetal", clue: "Mantanku 1" },
    
    // BAGIAN 3 - 22 nama terakhir (terbuka setelah bagian 2 selesai)
    { name: "Darren", password: "joinormawa5354", clue: "Aku anak pertama" },
    { name: "Abel", password: "mentahan", clue: "Aku suka pake celana hitam" },
    { name: "Cella", password: "cobavelocitydulu", clue: "Aku anak Himpunan Mahasiswa" },
    { name: "Salsa", password: "mautauaja", clue: "Namaku ada di judul Film 'Dear ... '" },
    { name: "Hany", password: "cbl", clue: "Kulitku sawo matang" },
    { name: "Yeye", password: "matchacu", clue: "Aku juga berkulit sawo matang" },
    { name: "Hendra", password: "eskrim", clue: "Rambutku se bahu" },
    { name: "Kira", password: "poseimut", clue: "Aku pake anting" },
    { name: "Jason", password: "cobatanyanathan", clue: "Aku sempet operator sound" },
    
    { name: "Alvin", password: "password", clue: "Nama yang populer di Rusia tapi juga dipakai di Indonesia" },
    { name: "Slash", password: "Labalabasunda", clue: "Nama yang berarti 'dunia' dalam bahasa Arab" },
    { name: "Yongki", password: "sembarang", clue: "Nama yang terdengar modern dan internasional" },
    { name: "Vara", password: "kaefsi", clue: "Nama yang terdengar seperti lagu atau musik" },
    { name: "Jesslyn", password: "terserah", clue: "Nama yang berarti 'luar biasa' atau 'menakjubkan'" },
    { name: "Rizky", password: "beraksekebon", clue: "Nama yang populer dan mudah diingat di mana saja" },
    { name: "Issa", password: "rahasia", clue: "Nama yang berarti 'bunga' dalam bahasa Jepang" },
    { name: "Paul", password: "12345", clue: "Nama yang berarti 'bunga' dalam bahasa Jepang" },
    { name: "Eric", password: "mienyemek", clue: "Nama yang berarti 'bunga' dalam bahasa Jepang" },
    { name: "Trixie", password: "sama kyk jesi", clue: "Nama yang berarti 'bunga' dalam bahasa Jepang" },
    { name: "Grace", password: "cobamelet", clue: "Nama yang berarti 'bunga' dalam bahasa Jepang" },
    { name: "Elia", password: "satupotong", clue: "Nama yang berarti 'luar biasa' atau 'menakjubkan'" },
    { name: "Nathan", password: "admin1234", clue: "Nama yang populer dan mudah diingat di mana saja" }
];

// ===== KONFIGURASI PEMBAGIAN KELOMPOK =====
// Bagian ini dapat diubah sesuai kebutuhan pembagian
const GROUP_SIZES = {
    group1: 10,  // Bagian 1: 10 nama pertama (selalu terbuka)
    group2: 15,  // Bagian 2: 15 nama berikutnya
    group3: 22   // Bagian 3: 15 nama terakhir
};

// ===== VARIABEL GLOBAL =====
let currentPersonIndex = null;
let completedPeople = [];
let currentUser = null;

// ===== SISTEM AUTENTIKASI =====
// Fungsi untuk menyimpan data user ke localStorage
function saveUserData(username, password) {
    const users = JSON.parse(localStorage.getItem('linktree_users') || '{}');
    users[username] = {
        password: password,
        createdAt: new Date().toISOString()
    };
    localStorage.setItem('linktree_users', JSON.stringify(users));
}

// Fungsi untuk memverifikasi user
function verifyUser(username, password) {
    const users = JSON.parse(localStorage.getItem('linktree_users') || '{}');
    return users[username] && users[username].password === password;
}

// Fungsi untuk menyimpan progress user tertentu
function saveUserProgress(username) {
    const userProgress = JSON.parse(localStorage.getItem('linktree_user_progress') || '{}');
    userProgress[username] = completedPeople;
    localStorage.setItem('linktree_user_progress', JSON.stringify(userProgress));
}

// Fungsi untuk memuat progress user tertentu
function loadUserProgress(username) {
    const userProgress = JSON.parse(localStorage.getItem('linktree_user_progress') || '{}');
    return userProgress[username] || [];
}

// Fungsi untuk menyimpan user yang sedang login
function saveCurrentUser(username) {
    localStorage.setItem('linktree_current_user', username);
}

// Fungsi untuk memuat user yang sedang login
function loadCurrentUser() {
    return localStorage.getItem('linktree_current_user');
}

// Fungsi untuk logout
function logout() {
    localStorage.removeItem('linktree_current_user');
    currentUser = null;
    completedPeople = [];
    showAuthContainer();
    hideMainContainer();
}

// ===== FUNGSI UNTUK MENYIMPAN DAN MENGAMBIL DATA DARI LOCALSTORAGE =====
function saveProgress() {
    if (currentUser) {
        saveUserProgress(currentUser);
    }
}

function loadProgress() {
    if (currentUser) {
        completedPeople = loadUserProgress(currentUser);
    }
}

// ===== FUNGSI UNTUK MENENTUKAN STATUS TOMBOL =====
function getButtonStatus(index) {
    // Cek apakah nama sudah berhasil dijawab
    if (completedPeople.includes(index)) {
        return 'success';
    }
    
    // Logika unlock berdasarkan kelompok
    if (index < GROUP_SIZES.group1) {
        // Bagian 1: selalu terbuka
        return 'default';
    } else if (index < GROUP_SIZES.group1 + GROUP_SIZES.group2) {
        // Bagian 2: terbuka jika bagian 1 sudah selesai semua
        const group1Completed = Array.from({length: GROUP_SIZES.group1}, (_, i) => i)
            .every(i => completedPeople.includes(i));
        return group1Completed ? 'default' : 'locked';
    } else {
        // Bagian 3: terbuka jika bagian 1 dan 2 sudah selesai semua
        const group1Completed = Array.from({length: GROUP_SIZES.group1}, (_, i) => i)
            .every(i => completedPeople.includes(i));
        const group2Completed = Array.from({length: GROUP_SIZES.group2}, (_, i) => i + GROUP_SIZES.group1)
            .every(i => completedPeople.includes(i));
        return (group1Completed && group2Completed) ? 'default' : 'locked';
    }
}

// ===== FUNGSI UNTUK MEMBUAT TOMBOL NAMA =====
function createNameButtons() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    
    peopleData.forEach((person, index) => {
        const button = document.createElement('button');
        button.className = 'name-btn';
        button.textContent = person.name;
        button.dataset.index = index;
        
        const status = getButtonStatus(index);
        button.classList.add(status);
        
        // Event listener untuk klik tombol
        button.addEventListener('click', () => handleNameClick(index, status));
        
        nameList.appendChild(button);
    });
    
    updateProgress();
}

// ===== FUNGSI UNTUK MENANGANI KLIK NAMA =====
function handleNameClick(index, status) {
    currentPersonIndex = index;
    
    if (status === 'locked') {
        alert('Nama ini masih terkunci! Selesaikan nama-nama sebelumnya terlebih dahulu.');
        return;
    }
    
    if (status === 'success') {
        // Jika sudah berhasil, tampilkan clue yang sama
        showClue(peopleData[index].clue);
    } else {
        // Jika belum dijawab, tampilkan popup password
        showPasswordModal(peopleData[index].name);
    }
}

// ===== FUNGSI UNTUK MENAMPILKAN MODAL PASSWORD =====
function showPasswordModal(name) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const okBtn = document.getElementById('okBtn');
    const clueDisplay = document.getElementById('clueDisplay');
    const errorMessage = document.getElementById('errorMessage');
    
    modalTitle.textContent = `Masukkan Password untuk ${name}`;
    passwordInput.value = '';
    passwordInput.style.display = 'block';
    submitBtn.style.display = 'inline-block';
    okBtn.style.display = 'none';
    clueDisplay.classList.remove('show');
    errorMessage.classList.remove('show');
    
    modal.style.display = 'block';
    passwordInput.focus();
}

// ===== FUNGSI UNTUK MENAMPILKAN CLUE =====
function showClue(clue) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const okBtn = document.getElementById('okBtn');
    const clueDisplay = document.getElementById('clueDisplay');
    const errorMessage = document.getElementById('errorMessage');
    
    modalTitle.textContent = 'Clue';
    passwordInput.style.display = 'none';
    submitBtn.style.display = 'none';
    okBtn.style.display = 'inline-block';
    clueDisplay.textContent = clue;
    clueDisplay.classList.add('show');
    errorMessage.classList.remove('show');
    
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK MEMVALIDASI PASSWORD =====
function validatePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const enteredPassword = passwordInput.value.trim();
    const correctPassword = peopleData[currentPersonIndex].password;
    
    if (enteredPassword === correctPassword) {
        // Password benar
        if (!completedPeople.includes(currentPersonIndex)) {
            completedPeople.push(currentPersonIndex);
            saveProgress();
        }
        
        // Tampilkan clue
        showClue(peopleData[currentPersonIndex].clue);
        
        // Update tampilan tombol
        createNameButtons();
    } else {
        // Password salah
        errorMessage.textContent = 'Password Anda Salah!';
        errorMessage.classList.add('show');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// ===== FUNGSI UNTUK UPDATE PROGRESS =====
function updateProgress() {
    const progressText = document.getElementById('progressText');
    const totalCompleted = completedPeople.length;
    const totalPeople = peopleData.length;
    progressText.textContent = `Progress: ${totalCompleted}/${totalPeople}`;
}

// ===== FUNGSI UNTUK MENUTUP MODAL =====
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    currentPersonIndex = null;
}

// ===== FUNGSI UNTUK MENAMPILKAN/MENYEMBUNYIKAN CONTAINER =====
function showAuthContainer() {
    document.getElementById('authContainer').style.display = 'flex';
}

function hideAuthContainer() {
    document.getElementById('authContainer').style.display = 'none';
}

function showMainContainer() {
    document.getElementById('mainContainer').style.display = 'block';
}

function hideMainContainer() {
    document.getElementById('mainContainer').style.display = 'none';
}

// ===== FUNGSI UNTUK UPDATE WELCOME TEXT =====
function updateWelcomeText() {
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.textContent = `Selamat datang, ${currentUser}!`;
}

// ===== FUNGSI UNTUK SWITCH TAB AUTH =====
function switchAuthTab(tabName) {
    // Hapus class active dari semua tab dan form
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    
    // Tambah class active ke tab dan form yang dipilih
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}Form`).classList.add('active');
    
    // Clear error messages
    document.getElementById(`${tabName}Error`).textContent = '';
}

// ===== FUNGSI UNTUK LOGIN =====
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorElement = document.getElementById('loginError');
    
    if (!username || !password) {
        errorElement.textContent = 'Username dan password harus diisi!';
        return;
    }
    
    if (verifyUser(username, password)) {
        currentUser = username;
        saveCurrentUser(username);
        loadProgress();
        createNameButtons();
        updateWelcomeText();
        hideAuthContainer();
        showMainContainer();
        
        // Clear form
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
        errorElement.textContent = '';
    } else {
        errorElement.textContent = 'Username atau password salah!';
    }
}

// ===== FUNGSI UNTUK REGISTER =====
function handleRegister() {
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorElement = document.getElementById('registerError');
    
    if (!username || !password || !confirmPassword) {
        errorElement.textContent = 'Semua field harus diisi!';
        return;
    }
    
    if (password !== confirmPassword) {
        errorElement.textContent = 'Password tidak cocok!';
        return;
    }
    
    if (password.length < 4) {
        errorElement.textContent = 'Password minimal 4 karakter!';
        return;
    }
    
    // Cek apakah username sudah ada
    const users = JSON.parse(localStorage.getItem('linktree_users') || '{}');
    if (users[username]) {
        errorElement.textContent = 'Username sudah digunakan!';
        return;
    }
    
    // Buat user baru
    saveUserData(username, password);
    
    // Auto login setelah register
    currentUser = username;
    saveCurrentUser(username);
    completedPeople = [];
    saveProgress();
    createNameButtons();
    updateWelcomeText();
    hideAuthContainer();
    showMainContainer();
    
    // Clear form
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    errorElement.textContent = '';
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah user sudah login
    const savedUser = loadCurrentUser();
    if (savedUser) {
        currentUser = savedUser;
        loadProgress();
        createNameButtons();
        updateWelcomeText();
        hideAuthContainer();
        showMainContainer();
    } else {
        showAuthContainer();
        hideMainContainer();
    }
    
    // Auth tab event listeners
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchAuthTab(tabName);
        });
    });
    
    // Login form event listeners
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    document.getElementById('loginPassword').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleLogin();
        }
    });
    
    // Register form event listeners
    document.getElementById('registerBtn').addEventListener('click', handleRegister);
    document.getElementById('confirmPassword').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleRegister();
        }
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Modal event listeners
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const submitBtn = document.getElementById('submitBtn');
    const okBtn = document.getElementById('okBtn');
    const passwordInput = document.getElementById('passwordInput');
    
    // Tombol close (X)
    closeBtn.addEventListener('click', closeModal);
    
    // Klik di luar modal untuk menutup
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Tombol Submit
    submitBtn.addEventListener('click', validatePassword);
    
    // Tombol OK
    okBtn.addEventListener('click', closeModal);
    
    // Enter key pada input password
    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            validatePassword();
        }
    });
    
    // ESC key untuk menutup modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// ===== FUNGSI TAMBAHAN UNTUK DEBUGGING (OPSIONAL) =====
// Uncomment fungsi di bawah ini jika ingin reset progress untuk testing
/*
function resetProgress() {
    if (currentUser) {
        localStorage.removeItem('linktree_user_progress');
        completedPeople = [];
        createNameButtons();
        console.log('Progress telah direset');
    }
}

function resetAllData() {
    localStorage.clear();
    location.reload();
}

// Panggil resetProgress() di console browser untuk reset progress user tertentu
// Panggil resetAllData() di console browser untuk reset semua data

*/ 
