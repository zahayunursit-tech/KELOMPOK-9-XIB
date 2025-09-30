
  const backToTopButton = document.getElementById("btn-back-to-top");
  const navbar = document.querySelector(".navbar");

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    // ✅ Tombol scroll ke atas
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
      navbar.classList.add("navbar-scrolled");
    } else {
      backToTopButton.style.display = "none";
      navbar.classList.remove("navbar-scrolled");
    }

    // ✅ Navbar auto-hide
    if (prevScrollPos > currentScrollPos) {
      // scroll ke atas -> navbar muncul
      navbar.style.top = "0";
    } else {
      // scroll ke bawah -> navbar hilang
      navbar.style.top = "-80px"; // atur sesuai tinggi navbar
    }
    prevScrollPos = currentScrollPos;
  };

  // ✅ Klik tombol scroll ke atas
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  //modal pesan sekarang
  const sushiModal = document.getElementById('sushiModal');
  sushiModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // tombol yang diklik

    // ambil data dari tombol
    const title = button.getAttribute('data-title');
    const price = button.getAttribute('data-price');
    const desc  = button.getAttribute('data-desc');
    const img   = button.getAttribute('data-img');

    // isi konten modal
    document.getElementById('sushiTitle').textContent = title;
    document.getElementById('sushiPrice').textContent = price;
    document.getElementById('sushiDesc').textContent  = desc;
    document.getElementById('sushiImg').src = img;
  });